# URL Removal Documentation

This document provides instructions for removing specific URLs from Google Search results after they have been redirected to the homepage.

## URLs Being Removed

The following URLs have been redirected to the homepage and need to be removed from search results:

- `https://heidigital.info/faq`
- `https://heidigital.info/solutions`
- `https://heidigital.info/services/content-creation`
- `https://heidigital.info/solutions/free-resources/seo-optimization-checklist`
- `https://heidigital.info/solutions/tools/roi-calculator`

## Automated Removal Script

### Prerequisites

1. **Google Cloud Project**: Create a Google Cloud project if you don't have one
2. **Enable Search Console API**: Enable the Google Search Console API in your project
3. **Service Account**: Create a service account with Search Console permissions
4. **Credentials**: Download the service account key file (JSON format)
5. **Node.js Dependencies**: Install required dependencies

### Setup Steps

1. **Install Dependencies**
   ```bash
   npm install jsonwebtoken
   ```

2. **Set up Credentials**
   - Place your Google service account key file in the project root as `google-service-account.json`
   - Or set the `GOOGLE_CREDENTIALS_PATH` environment variable to point to your credentials file

3. **Run the Script**
   ```bash
   node scripts/google-search-console-removal.cjs
   ```

### Service Account Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project or create a new one
3. Navigate to "APIs & Services" > "Credentials"
4. Click "Create Credentials" > "Service Account"
5. Fill in the service account details
6. Download the JSON key file
7. Add the service account email to your Google Search Console property with "Owner" permissions

## Manual Removal Process

If the automated script doesn't work or you prefer manual removal, follow these steps:

### Step 1: Access Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property: `https://heidigital.info`
3. Make sure you have owner or full user permissions

### Step 2: Submit Removal Requests

1. In the left sidebar, click on "Removals"
2. Click the "New Request" button
3. Select "Temporarily hide URL from Google"
4. For each URL, submit a removal request:

#### URL 1: FAQ Page
- **URL**: `https://heidigital.info/faq`
- **Type**: "Remove this URL only"
- **Reason**: "Page no longer exists (404/410)" or "Content has changed significantly"

#### URL 2: Solutions Main Page
- **URL**: `https://heidigital.info/solutions`
- **Type**: "Remove this URL only"
- **Reason**: "Page no longer exists (404/410)" or "Content has changed significantly"

#### URL 3: Content Creation Service
- **URL**: `https://heidigital.info/services/content-creation`
- **Type**: "Remove this URL only"
- **Reason**: "Page no longer exists (404/410)" or "Content has changed significantly"

#### URL 4: SEO Optimization Checklist
- **URL**: `https://heidigital.info/solutions/free-resources/seo-optimization-checklist`
- **Type**: "Remove this URL only"
- **Reason**: "Page no longer exists (404/410)" or "Content has changed significantly"

#### URL 5: ROI Calculator
- **URL**: `https://heidigital.info/solutions/tools/roi-calculator`
- **Type**: "Remove this URL only"
- **Reason**: "Page no longer exists (404/410)" or "Content has changed significantly"

### Step 3: Monitor Removal Status

1. After submitting requests, you can monitor their status in the "Removals" section
2. Removal requests typically take 1-2 days to process
3. Approved removals will hide the URLs from Google Search results for approximately 6 months

### Step 4: Update Sitemap (Optional)

1. If these URLs were in your sitemap, consider regenerating it to exclude them
2. Submit the updated sitemap to Google Search Console

## Technical Implementation

### Redirect Rules

The following redirect rules have been implemented in `public/_redirects`:

```
# Redirect specific pages to homepage (301 redirects for SEO)
/faq                                              /               301
/solutions                                        /               301
/services/content-creation                        /               301
/solutions/free-resources/seo-optimization-checklist  /          301
/solutions/tools/roi-calculator                   /               301
```

### Robots.txt Updates

The following disallow rules have been added to `public/robots.txt`:

```
# Disallow pages being removed from website
Disallow: /faq
Disallow: /services/content-creation
Disallow: /solutions/free-resources/seo-optimization-checklist
Disallow: /solutions/tools/roi-calculator
```

Note: `/solutions` is not explicitly disallowed in robots.txt since it still redirects to the homepage.

### Netlify Configuration

The conflicting redirect rule in `netlify.toml` has been disabled:

```toml
# Redirect main solutions page to free resources - DISABLED (now redirects to homepage via _redirects)
# [[redirects]]
#   from = "/solutions"
#   to = "/solutions/free-resources"
#   status = 301
```

## Verification

### Test Redirects

You can test the redirects using curl or by visiting the URLs in a browser:

```bash
# Test redirects (should return 301 status and redirect to homepage)
curl -I https://heidigital.info/faq
curl -I https://heidigital.info/solutions
curl -I https://heidigital.info/services/content-creation
curl -I https://heidigital.info/solutions/free-resources/seo-optimization-checklist
curl -I https://heidigital.info/solutions/tools/roi-calculator
```

### Check Robots.txt

Verify that robots.txt is properly configured:

```bash
curl https://heidigital.info/robots.txt
```

### Monitor Search Console

1. Check the "Coverage" report in Google Search Console
2. Look for 404 errors related to these URLs
3. Monitor the "Removals" section for request status

## Timeline

- **Immediate**: 301 redirects are active, users visiting old URLs will be redirected to homepage
- **1-2 days**: Google Search Console removal requests should be processed
- **1-2 weeks**: Google should stop showing these URLs in search results (natural crawling)
- **6 months**: Temporary removal expires (but URLs should remain permanently removed due to 301 redirects)

## Troubleshooting

### Common Issues

1. **Service Account Permissions**: Ensure the service account has owner permissions in Search Console
2. **API Limits**: Google Search Console API has rate limits, the script includes delays between requests
3. **Credential Issues**: Verify the service account key file is valid and accessible
4. **Property Verification**: Ensure your property is verified in Google Search Console

### Alternative Approaches

If automated removal doesn't work:

1. Use the manual process described above
2. Wait for natural crawling (takes longer but is guaranteed to work)
3. Submit a sitemap that excludes these URLs
4. Use Google's URL inspection tool to check individual URLs

## Contact

For questions or issues related to this removal process, contact the development team.

---

**Last Updated**: January 2025  
**Status**: Active - redirects and removal requests implemented