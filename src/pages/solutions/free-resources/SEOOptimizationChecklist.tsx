
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { useSEO } from "@/hooks/useSEO";

const SEOOptimizationChecklist = () => {
  useSEO({
    title: "Complete SEO Optimization Checklist | Free Guide | Heidi Digital",
    description: "Comprehensive SEO audit checklist covering technical, on-page, and off-page optimization. Free download with actionable steps.",
    keywords: "SEO optimization checklist, SEO audit, technical SEO, website optimization",
    url: "https://heidigital.info/solutions/free-resources/seo-optimization-checklist",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="SEO Optimization Checklist"
        subtitle="Complete audit checklist covering all aspects of SEO optimization for your website"
        backgroundImage="https://images.unsplash.com/photo-1572177191856-3cde618dee1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Download Complete Checklist</h3>
            <p className="mb-4">Get the full 100+ point SEO audit checklist with detailed explanations.</p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Download Full Checklist
            </button>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-6">Complete SEO Audit Checklist</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical SEO</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Site speed optimization</li>
                  <li>✓ Mobile-first indexing</li>
                  <li>✓ SSL certificate</li>
                  <li>✓ XML sitemap</li>
                  <li>✓ Robots.txt file</li>
                  <li>✓ Core Web Vitals</li>
                  <li>✓ Schema markup</li>
                  <li>✓ Crawl error fixes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">On-Page SEO</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Title tag optimization</li>
                  <li>✓ Meta descriptions</li>
                  <li>✓ Header tag structure</li>
                  <li>✓ Content optimization</li>
                  <li>✓ Image optimization</li>
                  <li>✓ Internal linking</li>
                  <li>✓ URL structure</li>
                  <li>✓ User experience</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Off-Page SEO</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Backlink analysis</li>
                  <li>✓ Domain authority</li>
                  <li>✓ Social signals</li>
                  <li>✓ Local citations</li>
                  <li>✓ Brand mentions</li>
                  <li>✓ Competitor analysis</li>
                  <li>✓ Link building strategy</li>
                  <li>✓ Online reputation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Content & Keywords</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Keyword research</li>
                  <li>✓ Content gaps analysis</li>
                  <li>✓ Content quality audit</li>
                  <li>✓ Duplicate content check</li>
                  <li>✓ Content freshness</li>
                  <li>✓ Topic clusters</li>
                  <li>✓ Search intent matching</li>
                  <li>✓ Featured snippets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SEOOptimizationChecklist;
