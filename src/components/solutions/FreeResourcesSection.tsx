
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ResourceCard from "./ResourceCard";
import ResourceFilter from "./ResourceFilter";

// Import dữ liệu từ file JSON
import freeResourcesData from "@/data/solutions/free-resources.json";

const FreeResourcesSection = () => {
  const [selectedLabel, setSelectedLabel] = useState<string>("All");

  // Sử dụng dữ liệu từ JSON file
  const resources = freeResourcesData.resources || [];

  // Get all unique labels - sử dụng category thay vì labels
  const allLabels = Array.from(new Set(resources.map(resource => resource.category).filter(Boolean)));
  const labelOptions = ["All", ...allLabels.sort()];

  // Filter resources based on selected label - sử dụng category thay vì labels
  const filteredResources = selectedLabel === "All" 
    ? resources 
    : resources.filter(resource => resource.category === selectedLabel);

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
              labels={[resource.category]}
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
