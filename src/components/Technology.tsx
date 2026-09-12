import { use } from "react";
import type { ITechnology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologyProps {
  technologies: Promise<ITechnology[]>;
}

const Technology = ({ technologies }: TechnologyProps) => {
  const technologiesData = use(technologies);
  console.log(technologiesData);
  return (
    <div className="container mx-auto py-12 pl-8">
      <h1 className="text-4xl font-bold">
        Explore the <span className="text-pink-600">Technologies</span>
      </h1>
      <p className="text-gray-600 pt-4">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pr-6 mt-6 mx-auto pl-6 items-stretch">
        {technologiesData.map((tech) => (
          <TechnologyCard key={tech.id} technology={tech} />
        ))}
      </div>
    </div>
  );
};

export default Technology;
