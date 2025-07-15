
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ResourceCard from "./ResourceCard";
import ResourceFilter from "./ResourceFilter";

const FreeResourcesSection = () => {
  const [selectedLabel, setSelectedLabel] = useState<string>("All");

  // Updated resources list with only external resources (no internal pages)
  const resources = [
    {
      title: "Google Digital Marketing & E-commerce Certificate",
      description: "Comprehensive professional certificate program covering digital marketing and e-commerce fundamentals.",
      type: "Certificate",
      labels: ["Marketing", "E-commerce", "Google"],
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://www.coursera.org/google-certificates/digital-marketing-certificate"
    },
    {
      title: "Learn Essential AI Skills - Google",
      description: "Master essential AI skills with Google's comprehensive learning resources and tools.",
      type: "Course",
      labels: ["AI", "Google", "Skills"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://ai.google/learn-ai-skills/"
    },
    {
      title: "Semrush On-Page SEO Checklist",
      description: "Comprehensive on-page SEO checklist from Semrush to optimize your website for search engines.",
      type: "Checklist",
      labels: ["SEO", "Semrush", "On-Page"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://www.semrush.com/blog/on-page-seo-checklist/"
    },
    {
      title: "SEO Optimization Guide - 41 Tips",
      description: "Complete SEO optimization guide with 41 actionable tips from Semrush experts.",
      type: "Guide",
      labels: ["SEO", "Semrush", "Tips"],
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://www.semrush.com/blog/seo-checklist/"
    },
    {
      title: "Hootsuite Free Social Media Tools",
      description: "Discover Hootsuite's collection of free social media tools to enhance your online presence.",
      type: "Tools",
      labels: ["Social Media", "Free Tools", "Hootsuite"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://www.hootsuite.com/social-media-tools"
    },
    {
      title: "Canva for Work Course",
      description: "Learn professional design skills with Canva's comprehensive course for business applications.",
      type: "Course",
      labels: ["Design", "Canva", "Business"],
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://www.canva.com/design-school/courses/canva-for-work"
    },
    {
      title: "Marketing with Canva Course",
      description: "Master marketing design and create compelling visual content using Canva's powerful tools.",
      type: "Course",
      labels: ["Marketing", "Canva", "Design"],
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://www.canva.com/design-school/courses/marketing-with-canva"
    },
    {
      title: "Adobe Social Media Content Scheduler",
      description: "Schedule and manage your social media content efficiently with Adobe's free scheduling tool.",
      type: "Tool",
      labels: ["Social Media", "Adobe", "Scheduling"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://new.express.adobe.com/schedule"
    }
  ];

  // Get all unique labels
  const allLabels = Array.from(new Set(resources.flatMap(resource => resource.labels)));
  const labelOptions = ["All", ...allLabels.sort()];

  // Filter resources based on selected label
  const filteredResources = selectedLabel === "All" 
    ? resources 
    : resources.filter(resource => resource.labels.includes(selectedLabel));

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <SectionHeading
          title="Free Resources & Materials"
          subtitle="Valuable external resources to help you master digital marketing"
          centered
        />

        <ResourceFilter
          labelOptions={labelOptions}
          selectedLabel={selectedLabel}
          onLabelChange={setSelectedLabel}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredResources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              description={resource.description}
              type={resource.type}
              labels={resource.labels}
              image={resource.image}
              link={resource.link}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-heisocial-blue text-heisocial-blue hover:bg-heisocial-blue/10">
            <a href="/solutions/free-resources">Browse All Resources</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FreeResourcesSection;
