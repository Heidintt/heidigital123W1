
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { useSEO } from "@/hooks/useSEO";

const MarketingWithCanva = () => {
  useSEO({
    title: "Marketing with Canva Complete Guide | Free Download | Heidi Digital",
    description: "Master Canva for marketing with our complete guide. Create professional marketing materials, social media graphics, and brand assets.",
    keywords: "canva marketing guide, canva design, marketing graphics, social media design",
    url: "https://heidigital.info/solutions/free-resources/marketing-with-canva",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="Marketing with Canva Guide"
        subtitle="Complete guide to creating professional marketing materials and brand assets with Canva"
        backgroundImage="https://images.unsplash.com/photo-1558655146-364adaf25c46?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Download Complete Guide</h3>
            <p className="mb-4">Get the comprehensive 40-page guide with templates and step-by-step tutorials.</p>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700">
              Download Free Guide
            </button>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-6">Master Marketing with Canva</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Social Media Graphics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="bg-blue-100 w-16 h-16 mx-auto mb-3 rounded-lg flex items-center justify-center">
                      📱
                    </div>
                    <h4 className="font-semibold">Instagram Posts</h4>
                    <p className="text-sm text-gray-600">Square posts, stories, and reels</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="bg-green-100 w-16 h-16 mx-auto mb-3 rounded-lg flex items-center justify-center">
                      📘
                    </div>
                    <h4 className="font-semibold">Facebook Content</h4>
                    <p className="text-sm text-gray-600">Posts, covers, and ads</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="bg-purple-100 w-16 h-16 mx-auto mb-3 rounded-lg flex items-center justify-center">
                      💼
                    </div>
                    <h4 className="font-semibold">LinkedIn Graphics</h4>
                    <p className="text-sm text-gray-600">Professional posts and articles</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Marketing Materials</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 border rounded-lg">
                    <div className="bg-orange-100 w-12 h-12 mr-4 rounded-lg flex items-center justify-center">
                      📊
                    </div>
                    <div>
                      <h4 className="font-semibold">Infographics</h4>
                      <p className="text-gray-600">Visual data presentations and process flows</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 border rounded-lg">
                    <div className="bg-red-100 w-12 h-12 mr-4 rounded-lg flex items-center justify-center">
                      📄
                    </div>
                    <div>
                      <h4 className="font-semibold">Flyers & Brochures</h4>
                      <p className="text-gray-600">Print and digital marketing materials</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 border rounded-lg">
                    <div className="bg-yellow-100 w-12 h-12 mr-4 rounded-lg flex items-center justify-center">
                      🎨
                    </div>
                    <div>
                      <h4 className="font-semibold">Brand Assets</h4>
                      <p className="text-gray-600">Logos, business cards, and brand templates</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Pro Tips for Marketing Success</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Use consistent brand colors and fonts across all materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Create templates for recurring content types</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Optimize images for each platform's requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Use high-quality stock photos from Canva's library</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Keep designs simple and focused on your message</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketingWithCanva;
