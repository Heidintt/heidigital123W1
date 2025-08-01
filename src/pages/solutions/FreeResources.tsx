import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { ExternalLink, FileText, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";

const FreeResources = () => {
  // Enhanced SEO for Free Resources page
  useSEO({
    title: "Free Marketing Resources & Learning Materials | Expert Guides & Tools | Heidi Digital",
    description: "Access valuable free marketing resources including courses, guides, checklists and tools from industry leaders. Master digital marketing with expert learning materials and boost your skills.",
    keywords: "free marketing resources, marketing courses, digital marketing guides, marketing checklists, SEO tools, social media resources, marketing learning materials, free marketing education",
    url: "https://heidigital.info/solutions/free-resources",
    canonicalUrl: "https://heidigital.info/solutions/free-resources",
    type: "website",
    image: "https://heidigital.info/og-free-resources.jpg",
    schemaType: "CollectionPage",
    breadcrumbs: [
      { name: "Home", url: "https://heidigital.info/" },
      { name: "Solutions", url: "https://heidigital.info/solutions" },
      { name: "Free Resources", url: "https://heidigital.info/solutions/free-resources" }
    ]
  });
  const resources = [{
    title: "Google Digital Marketing & E-commerce Professional Certificate",
    description: "Comprehensive professional certificate program covering digital marketing and e-commerce fundamentals.",
    type: "Certificate",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "https://www.coursera.org/google-certificates/digital-marketing-certificate?gwg_campaign_id=null&gwg_exp=dme-mainversion&utm_campaign=sou--google__med--organicsearch__cam--gwgsite__con--null__ter--null&utm_medium=institutions&utm_source=google"
  }, {
    title: "Learn Essential AI Skills - Google",
    description: "Master essential AI skills with Google's comprehensive learning resources and tools.",
    type: "Course",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "https://ai.google/learn-ai-skills/"
  }, {
    title: "On-Page SEO Checklist: The Complete Task List for 2025",
    description: "Comprehensive on-page SEO checklist from Semrush to optimize your website for search engines.",
    type: "Checklist",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "https://www.semrush.com/blog/on-page-seo-checklist/"
  }, {
    title: "SEO Checklist: 41 Tips to Optimize Your Website",
    description: "Complete SEO optimization guide with 41 actionable tips from Semrush experts.",
    type: "Guide",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "https://www.semrush.com/blog/seo-checklist/"
  }, {
    title: "Free Social Media Tools to Help You Grow Online",
    description: "Discover Hootsuite's collection of free social media tools to enhance your online presence.",
    type: "Tools",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "https://www.hootsuite.com/social-media-tools?srsltid=AfmBOoqqL4gCjGkfMKnnxWNpn8o74l90_krhSdGITq_qPFACJSZKLd9i"
  }, {
    title: "Canva for Work Course",
    description: "Learn professional design skills with Canva's comprehensive course for business applications.",
    type: "Course",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "https://www.canva.com/design-school/courses/canva-for-work"
  }, {
    title: "Marketing with Canva",
    description: "Master marketing design and create compelling visual content using Canva's powerful tools.",
    type: "Course",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "https://www.canva.com/design-school/courses/marketing-with-canva"
  }, {
    title: "Free Social Media Content Scheduler - Adobe",
    description: "Schedule and manage your social media content efficiently with Adobe's free scheduling tool.",
    type: "Tool",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "https://new.express.adobe.com/schedule?referrer=https%3A%2F%2Fadobeid-na1.services.adobe.com%2F&url=%2Fexpress%2Ffeature%2Fcontent-scheduler%2Fsocial-media&placement=ax-columns-1&locale=en-US&contentRegion=us&ecid=67167239487051076080737464956335265715&_branch_match_id=1322145989141289339&_branch_referrer=H4sIAAAAAAAAAy2PT0sDMRTEP01zy%2F7fpBWCiCDiwYKi4EmyyWs3NJuE97JaPPjZjVWYwzDMj2HmnBNd1bW2cQJKGk8pUq50SpV34VTv9w%2BP%2Fku8vt1P1wgHQARU8y%2B06W823V3RBXWWB91WBPjhDFB1CSsTl1JgJoYMIT%2FB0cWgVmJgnFVCtkJ2%2FW7YymZsGymabSN7OYhhN4q%2BHzsxynZkyWsDS8GVPnMT%2FboE4i3z0WgPCgJ%2FeWYrelWG4JwQiIo7gM4rQnH%2F25zMDHb1gCWjaJz2fAHrNPv%2Bu%2BXC8X3C%2BFkeqNsZ4wI%2F8lJsMhsBAAA%3D&postlogin=true"
  }];
  return <Layout>
      <Hero title="Free Marketing Resources" subtitle="Valuable external resources to help you master digital marketing and grow your business" backgroundImage="https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading title="External Learning Resources" subtitle="Curated collection of industry-leading courses, tools, and guides" centered />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => <Card key={index} className="overflow-hidden card-hover">
                <div className="h-48 overflow-hidden">
                  <img src={resource.image} alt={resource.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <CardHeader>
                  <div className="mb-2">
                    <span className="text-xs font-medium text-white bg-heisocial-blue px-2 py-1 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  <CardTitle className="hover:text-heisocial-blue transition-colors text-sm">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{resource.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full flex items-center justify-center border-heisocial-blue text-heisocial-blue hover:bg-heisocial-blue/10">
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Access Resource
                    </a>
                  </Button>
                </CardFooter>
              </Card>)}
          </div>
        </div>
      </section>

      

      {/* Newsletter Section */}
      

      <CallToAction title="Need Custom Marketing Solutions?" description="Our team of experts is ready to help you develop tailored marketing strategies for your unique business needs." primaryButtonText="Contact Us" primaryButtonLink="/contact" secondaryButtonLink="/services" secondaryButtonText="Explore Our Services" backgroundClass="bg-white" />
    </Layout>;
};
export default FreeResources;