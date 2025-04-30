import { company } from "../models/company.models.js"

export const registerCompany = async (req, res) => {
    try {
        const { companyName, companyDescription, companyLocation } = req.body
        const userId = req.user.userId

        if (!companyName || !companyDescription || !companyLocation) {
            return res.status(400).json({ message: "All fields are required", success: false })
        }

        const companyExists = await company.findOne({ companyName })
        if (companyExists) {
            return res.status(400).json({ message: "Company already exists", success: false })
        }


        const companyDoc = await company.create({
            companyName,
            companyDescription,
            companyLocation,
        })
        return res.status(200).json({ message: "Company registered successfully", success: true, company: companyDoc })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error", success: false })
    }
}

export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.Id
        const foundCompany = await company.findById(companyId)

        if (!foundCompany) {

            return res.status(400).json({ message: "Company not found", success: false })

        }
        return res.status(200).json({ company: foundCompany, success: true })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error", success: false })
    }
}

export const getCompany = async (req, res) => {
    try {

        const companyId = req.user.companyId
        const foundCompany = await company.find()
        console.log(companyId)







        if (!foundCompany) {
            return res.status(400).json({ message: "Company not found", success: false, error: error.message })
        }
        return res.status(200).json({ company: foundCompany, success: true })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error", success: false, error: error.message })
    }
}


export const updateCompany = async (req, res) => {
    try {
        const { companyName, companyDescription, companyLocation, companyWebsite, companyLogo } = req.body
        const file = req.file

        const updateData = {
            companyName,
            companyDescription,
            companyLocation,
            companyWebsite,
            companyLogo
        }

        const updatedCompany = await company.findByIdAndUpdate(
            req.params.Id,
            updateData,
            { new: true }
        )

        if (!updatedCompany) {
            return res.status(400).json({ message: "Company not found", success: false })
        }

        return res.status(200).json({
            message: "Company updated successfully",
            success: true,
            company: updatedCompany
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error", success: false })
    }
}