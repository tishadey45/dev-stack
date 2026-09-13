import type { ITechnology } from "../types/technology";

interface YourStackProps {
  selectedTechnologies: ITechnology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  console.log("YourStack selectedTechnologies:", selectedTechnologies);

  return (
    <div className="card bg-base-100 w-96 shadow-lg">
      <div className="card-body">
        <h2 className="card-title">Your Stack</h2>

        <p className="text-gray-500">
          {selectedTechnologies.length}{" "}
          {selectedTechnologies.length === 1 ? "Technology" : "Technologies"}{" "}
          Selected
        </p>

        {/* Empty */}
        {selectedTechnologies.length === 0 ? (
          <p className="text-gray-600 mt-5">Your stack is empty.</p>
        ) : (
          <div className="mt-5 space-y-3">
            {selectedTechnologies.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between border rounded-xl p-3"
              >
                <div className="flex gap-3">
                  <img
                    src={tech.icon}
                    alt="technology"
                    className="h-12 w-12 object-contain"
                  />
                  <div className="flex flex-col">
                    <h3 className="font-semibold">{tech.name}</h3>
                    <div>
                      <p className="text-sm text-gray-500">{tech.category}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(tech.id)}
                  className="text-2xl text-gray-400 hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Remove All */}
        {selectedTechnologies.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="btn btn-outline btn-error mt-5"
          >
            Remove All
          </button>
        )}
      </div>
    </div>
  );
};

export default YourStack;
