
import { Star } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import type { ITechnology } from "../types/technology";

interface TechnologyCardProps {
  technology: ITechnology;
  onSelect: (technology: ITechnology) => void;
}

const TechnologyCard = ({
  technology,
  onSelect,
}: TechnologyCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);

 const handleAdd = () => {
  if (isSelected) {
    toast.error(`${technology.name} is already in your stack!`);
    setIsDuplicate(true);
    return;
  }

  onSelect(technology);
  setIsSelected(true);
  toast.success(`${technology.name} added to stack!`);
};


  return (
    <div className="w-75 h-full">
      <div
        className="
          h-full
          flex
          flex-col
          rounded-[14px]
          border
          border-[#E5EAF2]
          bg-white
          p-6
          shadow-sm
        "
      >
        {/* Icon + Badge */}
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center">
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-12 w-12 object-contain"
            />
          </div>

          {technology.badge && (
            <span className="rounded-full border border-[#D9EFFC] bg-[#F3FAFF] px-3.5 py-1.5 text-[13px] font-medium text-[#159BD5]">
              {technology.badge}
            </span>
          )}
        </div>

        {/* Name */}
        <h2 className="mt-5 text-[23px] font-bold leading-tight text-[#101828]">
          {technology.name}
        </h2>

        {/* Description */}
        <p className="mt-2 text-[15px] leading-6 text-[#71809A]">
          {technology.description}
        </p>

        {/* Bottom Content */}
        <div className="mt-auto">
          <div className="my-5 h-px bg-[#EDF0F5]" />

          {/* Category + Difficulty + Rating */}
          <div className="flex items-center gap-3 text-sm text-[#71809A]">
            <span className="rounded-md bg-[#F2F5F9] px-2.5 py-1 text-[#53627A]">
              {technology.category}
            </span>

            <span className="whitespace-nowrap">
              {technology.difficulty}
            </span>

            <span className="ml-auto flex items-center gap-1 font-semibold text-[#475467]">
              <Star size={16} fill="#FDBB25" color="#FDBB25" />
              {technology.rating}
            </span>
          </div>

          {/* Button */}
          <button
            onClick={handleAdd}
            type="button"
            disabled={isDuplicate}
            className={`
              mt-5
              w-full
              rounded-[10px]
              px-4
              py-3
              text-[15px]
              font-medium
              text-white
              transition
              ${
                isSelected
                  ? "cursor-not-allowed bg-gray-400"
                  : "bg-[#080D1D] hover:bg-[#171D2E]"
              }
            `}
          >
            {isSelected ? "✓ Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;


