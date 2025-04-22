import express from "express"
import { postJob, getJob, getJobById, getAdminJobs } from "../controllers/job.controllers.js"
import auth from "../middlewares/auth.js"


const router = express.Router()

router.route("/postJob").post(auth, postJob)
router.route("/getJob").get(auth, getJob)
router.route("/getJobById/:jobId").get(auth, getJobById)
router.route("/getAdminJobs").get(auth, getAdminJobs)



export default router
