import React from "react";
import Navbar from "./shared/Navbar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowLeft } from "lucide-react";

const JobDescription = () => {
  const { id } = useParams();
  const { allJobs } = useSelector((state) => state.job);
  const navigate = useNavigate();

  const job = allJobs?.length ? allJobs.find((item) => item._id === id) : null;
  console.log("job", job);

  const isApplied = true;
  const formattedDate = new Date(job?.createdAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <>
      <Navbar />
      <div className=" max-w-7xl mx-auto my-10">
        <Button
          className={"cursor-pointer"}
          variant={"outline"}
          onClick={() => navigate(-1)}
        >
          <ArrowLeft />
          Go Back
        </Button>
        <div className=" flex items-center justify-between ">
          <div>
            <h1 className=" font-bold text-xl">{}</h1>
            <div className=" flex items-center mt-4 gap-2">
              <Badge className={"text-blue-700 font-bold"} variant={"ghost"}>
                {job?.position} Positions
              </Badge>
              <Badge className={"text-[#f83002] font-bold"} variant={"ghost"}>
                {job?.jobType}
              </Badge>
              <Badge className={"text-[#7209b7] font-bold"} variant={"ghost"}>
                {`${job?.salary} ${job?.salary > 100 ? "K/year" : "lpa"}`}
              </Badge>
            </div>
          </div>
          <Button
            disabled={isApplied}
            className={`rounded-lg ${
              isApplied
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[#7209b7] hover:bg-[#5f32ad]"
            }`}
          >
            {isApplied ? "Already applied" : "Apply Now"}
          </Button>
        </div>
        <h1 className=" border-b-2 border-b-gray-300 font-medium py-4">
          {job?.title}
        </h1>
        <div className=" my-4">
          <h1 className=" font-bold my-1">
            Role:
            <span className=" pl-4 font-normal text-gray-800">
              {job?.title}
            </span>
          </h1>
          <h1 className=" font-bold my-1">
            Location:
            <span className=" pl-4 font-normal text-gray-800">
              {job?.location}
            </span>
          </h1>
          <h1 className=" font-bold my-1">
            Description :
            <span className=" pl-4 font-normal text-gray-800">
              {job?.description}
            </span>
          </h1>
          <h1 className=" font-bold my-1">
            Experience :
            <span className=" pl-4 font-normal text-gray-800">
              {job?.experienceLevel} years
            </span>
          </h1>
          <h1 className=" font-bold my-1">
            Salary :
            <span className=" pl-4 font-normal text-gray-800">{`${
              job?.salary
            } ${job?.salary > 100 ? "K/year" : "lpa"}`}</span>
          </h1>
          <h1 className=" font-bold my-1">
            Total Applicants :
            <span className=" pl-4 font-normal text-gray-800">
              {job?.application.length || 0}
            </span>
          </h1>
          <h1 className=" font-bold my-1">
            Posted Date :
            <span className=" pl-4 font-normal text-gray-800">
              {formattedDate || "sdd"}
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default JobDescription;
