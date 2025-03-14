import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "industry",
    array: ["Frontend Developer", "Backend Developer", "Full-stack Developer"],
  },
  {
    filterType: "salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
  },
];
const FilterCard = () => {
  return (
    <div className=" w-full bg-white p-3 rounded-md">
      <h1 className=" font-bold text-lg">Filter jobs</h1>
      <hr className=" mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className=" font-bold text-lg">{data.filterType}</h1>
            {data.array.map((item, index) => {
              return (
                <div key={index} className=" flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} />
                  <Label>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
