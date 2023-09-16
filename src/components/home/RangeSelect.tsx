import { useState } from "react";

const RangeSelect = () => {
  // This value has to be a string since the input with type range is a string
  const [radius, setRadius] = useState<string>("5");

  return (
    <div className="mt-5">
      <h2 className="font-bold px-2">Select Radius</h2>
      <input
        type="range"
        name="radius"
        min={0}
        max={50}
        step={5}
        onChange={(e) => setRadius(e.target.value)}
        defaultValue={radius}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <label
        htmlFor="radius"
        className="text-gray-500 text-[15px]"
      >{`${radius} miles`}</label>
    </div>
  );
};

export default RangeSelect;
