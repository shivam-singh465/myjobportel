import mongoose from "mongoose";

const companySchema = new mongoose.Schema({

    companyName:{
        type:String,
        required:true
    },
    companyDescription:{    
        type:String,
        required:true
    },
    companyLogo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    companywebsite:{
        type:String,
    },
    companyLocation:{
        type:String,
        required:true
    },
    


},{timestamps:true});


export const company = mongoose.model('Company', companySchema);    