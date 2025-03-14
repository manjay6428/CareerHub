import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

const appliedJobs = [
  {
    id: 1,
    date: "13-03-25",
    role: "Frontend Developer",
    company: "Microsoft",
    status: "Rejected",
  },
  {
    id: 2,
    date: "10-03-25",
    role: "Backend Developer",
    company: "Google",
    status: "Pending",
  },
  {
    id: 3,
    date: "08-03-25",
    role: "Full Stack Developer",
    company: "Amazon",
    status: "Accepted",
  },
  {
    id: 4,
    date: "05-03-25",
    role: "UI/UX Designer",
    company: "Apple",
    status: "Pending",
  },
];
const AppliedJobsTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appliedJobs.map((job, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{job.date}</TableCell>
              <TableCell>{job.role}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell className="text-right">
                <Badge>{job.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobsTable;
