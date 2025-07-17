
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { useSEO } from "@/hooks/useSEO";

const SocialMediaGrowthTools = () => {
  useSEO({
    title: "Free Social Media Growth Tools & Strategies | Heidi Digital",
    description: "Collection of free tools and proven strategies to grow your social media presence organically. Boost engagement and followers.",
    keywords: "free social media tools, social media growth, engagement tools, followers growth",
    url: "https://heidigital.info/solutions/free-resources/social-media-growth-tools",
    canonicalUrl: "heidigital.info/solutions/free-resources/social-media-growth-tools",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="Free Social Media Growth Tools"
        subtitle="Powerful free tools and strategies to grow your social media presence organically"
        backgroundImage="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Download Toolkit</h3>
            <p className="mb-4">Get access to 20+ free tools and a complete growth strategy guide.</p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
              Download Free Toolkit
            </button>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-6">Free Social Media Growth Tools</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Content Creation Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold">Canva (Free Plan)</h4>
                    <p className="text-sm text-gray-600">Create stunning graphics and posts</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold">Unsplash</h4>
                    <p className="text-sm text-gray-600">High-quality free stock photos</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold">GIMP</h4>
                    <p className="text-sm text-gray-600">Free photo editing software</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibual">Figma</h4>
                    <p className="text-sm text-gray-600">Design and prototype tool</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Scheduling & Analytics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold">Buffer (Free Plan)</h4>
                    <p className="text-sm text-gray-600">Schedule posts across platforms</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold">Hootsuite (Free)</h4>
                    <p className="text-sm text-gray-600">Social media management</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold">Google Analytics</h4>
                    <p className="text-sm text-gray-600">Track social media traffic</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold">Native Analytics</h4>
                    <p className="text-sm text-gray-600">Platform insights (Instagram, Facebook, etc.)</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Growth Strategies</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-3 mt-1">Strategy</span>
                    <div>
                      <strong>Consistent Posting Schedule</strong>
                      <p className="text-gray-600">Post regularly at optimal times for your audience</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-3 mt-1">Engagement</span>
                    <div>
                      <strong>Community Interaction</strong>
                      <p className="text-gray-600">Respond to comments and engage with your community</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm mr-3 mt-1">Content</span>
                    <div>
                      <strong>Value-Driven Content</strong>
                      <p className="text-gray-600">Share valuable, educational, and entertaining content</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SocialMediaGrowthTools;
