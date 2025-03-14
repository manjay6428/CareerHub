import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "dffrgr34343434";
  return (
    <div className=" p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className=" flex items-center justify-between">
        <p className=" text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className=" rounded-full" size={"icon"}>
          <Bookmark />
        </Button>
      </div>
      <div className=" flex items-center gap-2 my-2">
        <Button variant={"outline"} className=" p-6" size={"icon"}>
          <Avatar>
            <AvatarImage
              src={
                "https://i.pinimg.com/736x/18/05/ce/1805ce3d6ff5fa2a329d8052ffa90707.jpg"
              }
            />
          </Avatar>
        </Button>
        <div>
          <h1 className=" font-medium text-lg">Company Name</h1>
          <p className=" text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className=" font-bold text-lg my-2">Title</h1>
        <p className=" text-sm  text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
          laborum esse reiciendis tempora impedit optio fugit perferendis non
          veniam ut?
        </p>
      </div>
      <div className=" flex items-center mt-4 gap-2">
        <Badge className={"text-blue-700 font-bold"} variant={"ghost"}>
          12 Positions
        </Badge>
        <Badge className={"text-[#f83002] font-bold"} variant={"ghost"}>
          Part time
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant={"ghost"}>
          12 lpa
        </Badge>
      </div>
      <div className=" flex items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/description/${jobId}`)}
          variant={"outline"}
        >
          Details
        </Button>
        <Button className={"bg-[#7209b7]"}>Save for later</Button>
      </div>
    </div>
  );
};

export default Job;
