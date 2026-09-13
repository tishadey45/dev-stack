import { Suspense, use, useState } from "react";
import type { ITechnology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologyProps {
  technologies: Promise<ITechnology[]>;
}

// Skeleton Card
const TechnologySkeleton = () => {
  return (
    <div className="w-full rounded-[14px] border border-[#E5EAF2] bg-white p-6 shadow-sm">
      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="skeleton h-12 w-12 rounded-lg"></div>

        <div className="skeleton h-8 w-20 rounded-full"></div>
      </div>

      {/* Name */}
      <div className="skeleton mt-5 h-7 w-32"></div>

      {/* Description */}
      <div className="skeleton mt-3 h-4 w-full"></div>
      <div className="skeleton mt-2 h-4 w-4/5"></div>

      {/* Bottom Content */}
      <div className="mt-6">
        <div className="skeleton h-px w-full"></div>

        <div className="mt-5 flex items-center justify-between">
          <div className="skeleton h-6 w-20"></div>
          <div className="skeleton h-6 w-24"></div>
          <div className="skeleton h-6 w-12"></div>
        </div>

        {/* Button */}
        <div className="skeleton mt-5 h-12 w-full rounded-[10px]"></div>
      </div>
    </div>
  );
};

// Main Technology Component
const Technology = ({ technologies }: TechnologyProps) => {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto py-12 pl-8">
          <h1 className="text-4xl font-bold">
            Explore the{" "}
            <span className="text-pink-600">Technologies</span>
          </h1>

          <p className="pt-4 text-gray-600">
            Pick one technology per category to build your ideal stack.
          </p>

          <div className="px-6 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Technology Skeletons */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <TechnologySkeleton key={index} />
                  ))}
                </div>
              </div>

              {/* Stack Skeleton */}
              <div className="lg:col-span-1">
                <div className="skeleton h-64 w-full rounded-[14px]"></div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <TechnologyContent technologies={technologies} />
    </Suspense>
  );
};

// Data Loaded Component
const TechnologyContent = ({
  technologies,
}: TechnologyProps) => {
  const technologiesData = use(technologies);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);

  // Add Technology
  const handleAddToStack = (technology: ITechnology) => {
    setSelectedTechnologies((prev) => {
      const exists = prev.some(
        (tech) => tech.id === technology.id
      );

      if (exists) return prev;

      return [...prev, technology];
    });
  };

  // Remove One Technology
  const handleRemove = (id: string) => {
    setSelectedTechnologies((prev) =>
      prev.filter((tech) => tech.id !== id)
    );
  };

  // Remove All Technologies
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <div className="container mx-auto py-12 pl-8">
      <h1 className="text-4xl font-bold">
        Explore the{" "}
        <span className="text-pink-600">Technologies</span>
      </h1>

      <p className="pt-4 text-gray-600">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="px-6 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Technology Cards */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologiesData.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  technology={tech}
                  onSelect={handleAddToStack}
                />
              ))}
            </div>
          </div>

          {/* Your Stack */}
          <div className="lg:col-span-1">
            <YourStack
              selectedTechnologies={selectedTechnologies}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
