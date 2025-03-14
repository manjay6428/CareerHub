import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCards = ({
  companyName,
  location,
  jobTitle,
  jobDescription,
  positions,
  jobType,
  salary,
}) => {
  return (
    <div className=" p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className=" font-medium text-lg">{companyName}</h1>
        <p className=" text-sm text-gray-500">{location}</p>
      </div>
      <div>
        <h1 className=" font-bold text-lg my-2">{jobTitle}</h1>
        <p className=" text-sm text-gray-600">{jobDescription}</p>
      </div>
      <div className=" flex items-center mt-4 gap-2">
        <Badge className={"text-blue-700 font-bold"} variant={"ghost"}>
          {positions} Positions
        </Badge>
        <Badge className={"text-[#f83002] font-bold"} variant={"ghost"}>
          {jobType}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant={"ghost"}>
          {salary} lpa
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
