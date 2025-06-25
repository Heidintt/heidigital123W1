
import React, { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import ResourceCard from "@/components/solutions/ResourceCard";
import ResourceFilter from "@/components/solutions/ResourceFilter";
import { resources } from "@/data/resourcesData";

const FreeResources = () => {
  const [selectedLabel, setSelectedLabel] = useState<string>("All");

  // Get all unique labels
  const allLabels = Array.from(new Set(resources.flatMap(resource => resource.labels)));
  const labelOptions = ["All", ...allLabels.sort()];

  // Filter resources based on selected label
  const filteredResources = selectedLabel === "All" 
    ? resources 
    : resources.filter(resource => resource.labels.includes(selectedLabel));

  return (
    <Layout>
      <Hero
        title="Free Marketing Resources"
        subtitle="Valuable external resources to help you master digital marketing and grow your business"
        backgroundImage="https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="External Learning Resources"
            subtitle="Curated collection of industry-leading courses, tools, and guides"
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
        </div>
      </section>

      <CallToAction
        title="Need Custom Marketing Solutions?"
        description="Our team of experts is ready to help you develop tailored marketing strategies for your unique business needs."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-white"
      />
    </Layout>
  );
};

export default FreeResources;
