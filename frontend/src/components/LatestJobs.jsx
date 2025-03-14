import React from "react";
import LatestJobCards from "./LatestJobCards";
import { JOB_BASE_URL, randomJobs } from "@/utils/constant";

const LatestJobs = () => {
  return (
    <div className=" max-w-7xl mx-auto my-20">
      <h1 className=" text-4xl font-bold">
        <span className="text-[#6a38c2]">Latest & Top</span> Job Openings
      </h1>
      <div className=" grid grid-cols-3 gap-4 my-5">
        {randomJobs
          .slice(0, 6)
          .map(
            (
              {
                companyName,
                location,
                jobTitle,
                jobDescription,
                positions,
                jobType,
                salary,
              },
              index
            ) => (
              <LatestJobCards
                key={index}
                companyName={companyName}
                location={location}
                jobTitle={jobTitle}
                jobDescription={jobDescription}
                positions={positions}
                jobType={jobType}
                salary={salary}
              />
            )
          )}
      </div>
    </div>
  );
};

export default LatestJobs;
