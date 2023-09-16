import { useState } from "react";
import { ratingList } from "@/shared/data";

const RatingSelect = () => {
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const onSelectRating = (isChecked: boolean, value: number) => {
    if (isChecked) {
      setSelectedRatings([...selectedRatings, value]);
    } else {
      setSelectedRatings(selectedRatings.filter((n) => n !== value));
    }
  };

  return (
    <div className="px-2 mt-5">
      <h2 className="font-bold">Select Rating</h2>
      <div>
        {ratingList.map((item) => (
          <div key={item.id} className="flex justify-between">
            <label htmlFor="rating">{item.icon}</label>
            <input
              type="checkbox"
              onChange={(e) => onSelectRating(e.target.checked, item.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingSelect;
