import  express  from "express";
import { applyJob, getAppliedJobs, getApplicents, updateApplicationStatus } from "../controllers/application.controllers.js";
import auth from "../middlewares/auth.js";

const router = express.Router()

router.route("/apply/:jobId").get(auth, applyJob)
router.route("/applied").get(auth, getAppliedJobs)
router.route("/:jobId/applicants").get(auth, getApplicents)
router.route("/status/:id").post(auth, updateApplicationStatus)



export default router



