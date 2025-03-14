import express from "express";
import {
  postJob,
  getAllJobs,
  getJobsByIdForUsers,
  getAdminCreatedJobs,
} from "../controllers/job.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const router = express.Router();

router.post("/post", isAuthenticated, postJob);
router.get("/get", isAuthenticated, getAllJobs);
router.get("/getAdminJobs", isAuthenticated, getAdminCreatedJobs);
router.get("/get/:id", isAuthenticated, getJobsByIdForUsers);

export default router;
