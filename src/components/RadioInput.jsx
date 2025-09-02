import { useState, React } from "react";

function RadioInput() {
  const [selected, setSelected] = useState("yes");

  return (
    <div className="flex items-center space-x-6">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="radio"
            name="choice"
            value="yes"
            checked={selected === "yes"}
            onChange={(e) => setSelected(e.target.value)}
            className="sr-only"
          />
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              selected === "yes"
                ? "border-[#6C25FF] bg-white"
                : "border-gray-300"
            }`}
          >
            {selected === "yes" && (
              <div className="w-2 h-2 rounded-full bg-[#6C25FF]"></div>
            )}
          </div>
        </div>
        <span className="ml-2 text-gray-700">Yes</span>
      </label>

      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="radio"
            name="choice"
            value="no"
            checked={selected === "no"}
            onChange={(e) => setSelected(e.target.value)}
            className="sr-only"
          />
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              selected === "no"
                ? "border-[#6C25FF] bg-white"
                : "border-gray-300"
            }`}
          >
            {selected === "no" && (
              <div className="w-2 h-2 rounded-full bg-[#6C25FF]"></div>
            )}
          </div>
        </div>
        <span className="ml-2 text-gray-700">No</span>
      </label>
    </div>
  );
}

export default RadioInput;