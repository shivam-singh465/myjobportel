import { Application } from "../models/application.models.js"
import { job } from "../models/job.models.js"
// import { user } from "../models/user.models.js"


export const applyJob = async (req, res) => {
    try {
        const userId = req.id
        const jobId = req.params.jobId
        if (!userId || !jobId) {
            return res.status(400).json({
                message: "User ID and job ID are required",
                success: false
            })
        }
        const existingApplication = await Application.findOne({
            job: jobId,
            applicant: userId
        })
        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this job",
                success: false
            })
        }

        const Job = await job.findById(jobId)
        if (!Job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }

        const newApplication = await Application.create({
            job: jobId,
            applicant: userId,
            company: Job.company,
            status: "pending"
        })
        Job.jobApplications.push(newApplication._id)
        await Job.save()




        return res.status(200).json({
            message: "Application submitted successfully",
            success: true,
            application: newApplication
        })



    } catch (error) {
        console.log("error in applyJob", error)
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
            success: false
        })
    }
}



export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id
        const aplication = await Application.find({ applicant: userId }).sort({ createdAt: -1 }).populate({
            path: "job",
            options: { sort: { createdAt: -1 } }
        }).populate({
            path: "company",
            options: { sort: { createdAt: -1 } }
        })

        if (!aplication) {
            return res.status(404).json({
                message: "No aplications found",
                success: false
            })
        }


        return res.status(200).json({
            message: "Applied jobs fetched successfully",
            success: true,
            aplications: aplication
        })


    } catch (error) {
        console.log("error in getAppliedJobs", error)

        res.status(500).json({
            message: "Internal server error",
            error: error.message,
            success: false
        })
    }
}


export const getApplicents = async (req, res) => {
    try {
        const jobId = req.params.jobId
        const Job = await job.findById(jobId).populate({
            path: "jobApplications",
            options: { sort: { createdAt: -1 } }


        })
        if (!Job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }
        return res.status(200).json({
            message: "Applicants fetched successfully",
            success: true,
            Job
        })






    } catch (error) {
        console.log("error in getApplicents", error)
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
            success: false
        })
    }
}


export const updateApplicationStatus = async (req, res) => {
    try {
        const { applicationId } = req.params.id
        const { status = "pending" } = req.body
        if (!status) {
            return res.status(400).json({
                message: "Status is required",
                success: false
            })
        }
        const application = await Application.findOne({ _id: applicationId })
        if (!application) {
            return res.status(404).json({
                message: "Application not found",
                success: false
            })
        }
        application.status = status.toLowerCase()
        await application.save()
        return res.status(200).json({
            message: "Application status updated successfully",
            success: true,
            application
        })



    } catch (error) {
        console.log("error in updateApplicationStatus", error)
        res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}   
