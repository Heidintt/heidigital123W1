#!/usr/bin/env node

/**
 * Google Search Console URL Removal Automation Script
 * 
 * This script helps automate the process of submitting URL removal requests
 * to Google Search Console for the pages being redirected to homepage.
 * 
 * Prerequisites:
 * 1. Google Search Console API access
 * 2. Service account with Search Console permissions
 * 3. Authentication credentials (service account key file)
 * 
 * Usage:
 * node scripts/google-search-console-removal.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// URLs to be removed from Google Search results
const URLS_TO_REMOVE = [
  'https://heidigital.info/faq',
  'https://heidigital.info/solutions',
  'https://heidigital.info/services/content-creation',
  'https://heidigital.info/solutions/free-resources/seo-optimization-checklist',
  'https://heidigital.info/solutions/tools/roi-calculator'
];

// Configuration
const CONFIG = {
  site: 'https://heidigital.info',
  // Add your service account credentials file path here
  credentialsPath: process.env.GOOGLE_CREDENTIALS_PATH || './google-service-account.json',
  // Removal type: 'TEMPORARY' or 'OUTDATED_CONTENT'
  removalType: 'OUTDATED_CONTENT'
};

/**
 * Load Google Service Account credentials
 */
function loadCredentials() {
  try {
    if (!fs.existsSync(CONFIG.credentialsPath)) {
      throw new Error(`Credentials file not found: ${CONFIG.credentialsPath}`);
    }
    
    const credentials = JSON.parse(fs.readFileSync(CONFIG.credentialsPath, 'utf8'));
    return credentials;
  } catch (error) {
    console.error('Error loading credentials:', error.message);
    console.log('\nTo use this script:');
    console.log('1. Create a Google Cloud service account');
    console.log('2. Download the service account key file');
    console.log('3. Set GOOGLE_CREDENTIALS_PATH environment variable or place file as google-service-account.json');
    process.exit(1);
  }
}

/**
 * Get OAuth 2.0 access token using service account
 */
async function getAccessToken(credentials) {
  const jwt = require('jsonwebtoken');
  
  const payload = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters',
    aud: 'https://oauth2.googleapis.com/token',
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 3600
  };
  
  const token = jwt.sign(payload, credentials.private_key, { algorithm: 'RS256' });
  
  return new Promise((resolve, reject) => {
    const postData = new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: token
    }).toString();
    
    const options = {
      hostname: 'oauth2.googleapis.com',
      path: '/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
      }
    };
    
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.access_token) {
            resolve(response.access_token);
          } else {
            reject(new Error('Failed to get access token: ' + data));
          }
        } catch (error) {
          reject(error);
        }
      });
    });
    
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

/**
 * Submit URL removal request to Google Search Console
 */
async function submitRemovalRequest(accessToken, url) {
  return new Promise((resolve, reject) => {
    const requestBody = JSON.stringify({
      url: url,
      type: CONFIG.removalType
    });
    
    const encodedSite = encodeURIComponent(CONFIG.site);
    const options = {
      hostname: 'searchconsole.googleapis.com',
      path: `/v1/sites/${encodedSite}/removals`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Content-Length': requestBody.length
      }
    };
    
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          resolve({ url, status: res.statusCode, response });
        } catch (error) {
          resolve({ url, status: res.statusCode, response: data });
        }
      });
    });
    
    req.on('error', (error) => {
      reject({ url, error: error.message });
    });
    
    req.write(requestBody);
    req.end();
  });
}

/**
 * Main function to process all URL removals
 */
async function main() {
  console.log('🚀 Starting Google Search Console URL Removal Process...\n');
  
  try {
    // Check if jsonwebtoken is available
    try {
      require('jsonwebtoken');
    } catch (error) {
      console.error('❌ Missing dependency: jsonwebtoken');
      console.log('Please install it with: npm install jsonwebtoken');
      process.exit(1);
    }
    
    // Load credentials
    console.log('📋 Loading Google Service Account credentials...');
    const credentials = loadCredentials();
    console.log('✅ Credentials loaded successfully');
    
    // Get access token
    console.log('🔑 Getting OAuth 2.0 access token...');
    const accessToken = await getAccessToken(credentials);
    console.log('✅ Access token obtained');
    
    // Submit removal requests
    console.log(`\n📤 Submitting removal requests for ${URLS_TO_REMOVE.length} URLs...\n`);
    
    const results = [];
    for (const url of URLS_TO_REMOVE) {
      try {
        console.log(`Processing: ${url}`);
        const result = await submitRemovalRequest(accessToken, url);
        results.push(result);
        
        if (result.status === 200 || result.status === 201) {
          console.log(`✅ Success: ${url}`);
        } else {
          console.log(`⚠️  Warning: ${url} (Status: ${result.status})`);
          console.log(`   Response: ${JSON.stringify(result.response, null, 2)}`);
        }
        
        // Add delay between requests to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      } catch (error) {
        console.log(`❌ Error: ${url}`);
        console.log(`   ${error.error || error.message}`);
        results.push({ url, error: error.error || error.message });
      }
    }
    
    // Summary
    console.log('\n📊 Summary:');
    const successful = results.filter(r => r.status === 200 || r.status === 201).length;
    const failed = results.filter(r => r.error || (r.status && r.status !== 200 && r.status !== 201)).length;
    
    console.log(`✅ Successful: ${successful}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`📝 Total: ${results.length}`);
    
    if (failed > 0) {
      console.log('\n⚠️  Some requests failed. Please check the responses above and retry if needed.');
      console.log('💡 Note: You can also submit removal requests manually via Google Search Console web interface.');
    }
    
  } catch (error) {
    console.error('❌ Script failed:', error.message);
    process.exit(1);
  }
}

// Run the script if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  URLS_TO_REMOVE,
  CONFIG,
  main
};