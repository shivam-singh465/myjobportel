import mongoose from "mongoose";


const jobSchema = new mongoose.Schema({

    jobTitle: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    jobRequirements: [{
        //skills, experience, education, certifications, etc.
        type: String,
    }],
    jobSalary: {
        type: Number,
        required: true
    },
    jobLocation: {
        type: String,
        required: true
    },
    jobType: {
        //full time, part time, contract, internship
        type: String,
        required: true
    },
    jobPosition: {
        //number of positions available
        type: Number,
        required: true
    },

    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    jobCreatedBy: {
        //user who created the job
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    jobApplications: [{
        //applications for the job
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application'


    }]

}, { timestamps: true });

export const job = mongoose.model('Job', jobSchema);
