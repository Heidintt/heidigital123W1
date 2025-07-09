
import React from 'react';

const MapSection = () => {
  return (
    <section className="py-6 px-4" aria-label="Location Map">
      <div className="container mx-auto">
        <div className="h-[300px] rounded-lg overflow-hidden shadow-md">
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 text-sm">Map Placeholder - In a real implementation, an interactive map would be displayed here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
