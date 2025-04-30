import { job } from "../models/job.models.js"
import { company } from "../models/company.models.js"


export const postJob = async (req, res) => {
    try {
        const { jobTitle, jobDescription, jobRequirements, jobSalary, jobLocation, jobPosition, jobType } = req.body;
        
        // Get userId and companyId from the authenticated request
        const userId = req.id;
        
        

        // Validate required fields
        if (!jobTitle || !jobDescription || !jobRequirements || !jobSalary || !jobLocation || !jobPosition || !jobType) {
            return res.status(400).json({ 
                message: "All fields are required", 
                success: false 
            });
        }

        // Create the job with company field
        const jobDoc = await job.create({
            jobTitle,
            jobDescription,
            jobRequirements: jobRequirements.split(','),  // Split if it's a comma-separated string
            jobSalary: Number(jobSalary),
            jobLocation,
            jobPosition: Number(jobPosition),
            jobType,
            jobCreatedBy: userId,
            company: companyId  // Set the company field here
        });
       




        // Populate company details in response
        // const populatedJob = await jobDoc.populate([
        //     {
        //         path: 'company',
        //         select: 'companyName companyLocation companyEmail'
        //     },
        //     {
        //         path: 'jobCreatedBy',
        //         select: 'name email'
        //     }
        // ]);


        return res.status(200).json({
            success: true,
            message: "Job created successfully",
            job: jobDoc
        });

    } catch (error) {
        console.error('Error in postJob:', error);
        return res.status(500).json({
            success: false,
            message: "Error creating job",
            error: error.message
            
        });
    }
};




export const getJob = async (req, res) => {
    const companyId = req.user.companyId
    try {
        const keyword = req.query.keyword || ""
        const query = {
            $or: [
                { jobTitle: { $regex: keyword, $options: "i" } },
                { jobDescription: { $regex: keyword, $options: "i" } }
            ]
        }
        const jobs = await job.find(query).populate({
            path: "company",
            select: "companyName companyEmail"
        }).sort({ createdAt: -1 })



        if (!jobs) {
            return res.status(404).json({
                message: "No jobs found",
                success: false
            })
        }
        return res.status(200).json({
            message: "Jobs fetched successfully",
            jobs,
            success: true
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }



}




export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.jobId

        console.log("jobId", jobId)
        if (!jobId) {
            return res.status(400).json({
                success: false,
                message: "Job ID is required"
            });
        }


        const jobDetails = await job.findById(jobId)
        if (!jobDetails) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }

        return res.status(200).json({
            message: "Job details fetched successfully",
            jobDetails,
            success: true
        })




    } catch (error) {
        console.log("error in getJobById--------------------------------------------------------------------", error)
        res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}


export const getAdminJobs = async (req, res) => {

    try {
        const adminId = req.user.adminId
        const jobs = await job.find({ adminId })
        if (!jobs) {
            return res.status(404).json({
                message: "No jobs found",
                success: false
            })
        }
        return res.status(200).json({
            message: "Jobs fetched successfully",
            jobs,
            success: true
        })



    } catch (error) {
        console.log(error)
        res.status(500).json({

            message: "Internal server error",
            success: false
        })
    }




}







