
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { useSEO } from "@/hooks/useSEO";

const OnPageSEOChecklist = () => {
  useSEO({
    title: "On-Page SEO Checklist 2025 | Free Download | Heidi Digital",
    description: "Complete on-page SEO checklist to optimize your website pages for better search rankings. Free downloadable checklist with actionable tips.",
    keywords: "on-page SEO checklist, SEO optimization, website optimization, search rankings",
    url: "https://heidigital.info/solutions/free-resources/on-page-seo-checklist",
    canonicalUrl: "https://heidigital.info/solutions/free-resources/on-page-seo-checklist",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="On-Page SEO Checklist 2025"
        subtitle="Complete checklist to optimize every page of your website for better search engine rankings"
        backgroundImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              On-page SEO is the foundation of your website's search engine optimization. This comprehensive checklist covers all the essential elements you need to optimize on each page to improve your search rankings.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Download Checklist</h3>
              <p className="mb-4">Get the complete printable checklist PDF with all 50+ optimization points.</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Download PDF Checklist
              </button>
            </div>

            <h2 className="text-2xl font-bold mb-6">Complete On-Page SEO Checklist</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Title Tags & Meta Descriptions</h3>
                <ul className="space-y-2">
                  <li>✓ Include target keyword in title tag</li>
                  <li>✓ Keep title under 60 characters</li>
                  <li>✓ Write compelling meta descriptions (150-160 characters)</li>
                  <li>✓ Include call-to-action in meta description</li>
                  <li>✓ Avoid duplicate titles and descriptions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Content Optimization</h3>
                <ul className="space-y-2">
                  <li>✓ Use primary keyword in H1 tag</li>
                  <li>✓ Include keywords in H2 and H3 headings naturally</li>
                  <li>✓ Maintain keyword density of 1-2%</li>
                  <li>✓ Use LSI keywords and synonyms</li>
                  <li>✓ Write minimum 300 words of quality content</li>
                  <li>✓ Structure content with proper headings</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Elements</h3>
                <ul className="space-y-2">
                  <li>✓ Optimize page loading speed</li>
                  <li>✓ Ensure mobile responsiveness</li>
                  <li>✓ Add schema markup where relevant</li>
                  <li>✓ Optimize images with alt text</li>
                  <li>✓ Use descriptive file names for images</li>
                  <li>✓ Implement clean URL structure</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Internal Linking</h3>
                <ul className="space-y-2">
                  <li>✓ Add 2-5 internal links per page</li>
                  <li>✓ Use descriptive anchor text</li>
                  <li>✓ Link to relevant related content</li>
                  <li>✓ Avoid over-optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OnPageSEOChecklist;
