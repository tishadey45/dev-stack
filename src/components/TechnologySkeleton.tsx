const TechnologySkeleton = () => {
  return (
    <div className="w-full rounded-[14px] border border-[#E5EAF2] bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        {/* Icon */}
        <div className="skeleton h-12 w-12 rounded-lg"></div>

        {/* Badge */}
        <div className="skeleton h-8 w-20 rounded-full"></div>
      </div>

      {/* Name */}
      <div className="skeleton mt-5 h-7 w-32"></div>

      {/* Description */}
      <div className="skeleton mt-3 h-4 w-full"></div>
      <div className="skeleton mt-2 h-4 w-4/5"></div>

      {/* Bottom */}
      <div className="mt-6">
        <div className="skeleton h-px w-full"></div>

        <div className="mt-5 flex justify-between">
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

export default TechnologySkeleton;