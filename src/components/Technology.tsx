import { use, useState } from "react";
import type { ITechnology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologyProps {
  technologies: Promise<ITechnology[]>;
}

const Technology = ({ technologies }: TechnologyProps) => {
  const technologiesData = use(technologies);

  const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnology[]>([]);

  // Add Technology
  const handleAddToStack = (technology: ITechnology) => {
    setSelectedTechnologies((prev) => {
      const exists = prev.some((tech) => tech.id === technology.id);

      if (exists) return prev;

      return [...prev, technology];
    });
  };

  // Remove One Technology
  const handleRemove = (id: string) => {
    setSelectedTechnologies((prev) => prev.filter((tech) => tech.id !== id));
  };

//   Remove All Technologies
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <div className="container mx-auto py-12 pl-8">
      <h1 className="text-4xl font-bold">
        Explore the <span className="text-pink-600">Technologies</span>
      </h1>

      <p className="text-gray-600 pt-4">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="px-6 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
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
