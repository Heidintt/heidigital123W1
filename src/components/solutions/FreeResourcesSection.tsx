
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ResourceCard from "./ResourceCard";
import ResourceFilter from "./ResourceFilter";
import { resources } from "@/data/resourcesData";

const FreeResourcesSection = () => {
  const [selectedLabel, setSelectedLabel] = useState<string>("All");

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
