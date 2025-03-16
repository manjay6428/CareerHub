import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
  return (
    <div className=" text-center mt-6">
      <div className=" flex flex-col gap-5 my-10">
        <span className=" mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium">
          No . 1 Job hunt Website
        </span>
        <h1 className=" text-5xl font-bold">
          Search , apply & <br />
          Get your
          <span className=" text-[#6a38c2]"> Dream Job</span>
        </h1>
        <p>
          Find your perfect job with ease. Browse listings, apply in one click,
          and start your career journey today. <br /> Opportunities are waiting
          — take the first step now!
        </p>
        <div className=" flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className=" outline-none border-none w-full"
          />
          <Button
            className={"rounded-r-full bg-[#6a38c2]"}
            onClick={searchJobHandler}
          >
            <Search className=" h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
