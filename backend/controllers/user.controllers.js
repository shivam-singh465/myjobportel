import { user } from "../models/user.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import auth from "../middlewares/auth.js";

export const register = async (req, res) => {
    try {
        
        const { fullName, email, password, role } = req.body;

        if (!fullName || !email || !password || !role) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const userExists = await user.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists", success: false });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const createUser = new user({
            fullName,
            email,
            password: hashedPassword,
            role
        });

        await createUser.save();

        return res.status(201).json({
            message: "User registered successfully",
            success: true,
            user: {
                fullName: createUser.fullName,
                email: createUser.email,
                role: createUser.role
            }
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}



export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({ 
                message: "All fields are required",
                success: false 
            });
        }

        const userExists = await user.findOne({ email });
        if (!userExists) {
            return res.status(400).json({ 
                message: "User does not exist",
                success: false 
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, userExists.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ 
                message: "Invalid credentials",
                success: false 
            });
        }

        if (userExists.role !== role) {
            return res.status(400).json({ 
                message: "Invalid credentials",
                success: false 
            });
        }

        const tokenData = {
            userId: userExists._id,
        };
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1h" });

        const userData = {
            _id: userExists._id,
            fullName: userExists.fullName,
            email: userExists.email,
            role: userExists.role,
            token: token
        };

        return res.status(200)
            .cookie("token", token, { 
                maxAge: 1 * 60 * 60 * 1000, 
                httpOnly: true, 
                sameSite: "strict" 
            })
            .json({
                message: "Login successful",
                success: true,
                user: userData
            });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}



export const logout = async (req, res) => {
    try {
        return res.status(200)
            .cookie("token", "", { maxAge: 0 })
            .json({ 
                message: "Logout successful",
                success: true 
            });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}



export const updateProfile = async (req, res) => {
    try {
        const { fullName, email, password, role, skills, bio } = req.body;
        let skillsArray 
        if(skills) {
            skillsArray = skills.split(",").map(skill => skill.trim());
        }
        const userId = req.user.userId;

        const userDoc = await user.findById(userId);
        if (!userDoc) {
            return res.status(400).json({ 
                message: "User does not exist",
                success: false 
            });
        }

        // Update user fields
        if(fullName) userDoc.fullName = fullName;
        if(email) userDoc.email = email;
        if(password) userDoc.password = await bcrypt.hash(password, 12);
        if(role) userDoc.role = role;
        
        // Initialize profile if it doesn't exist
        // if (!userDoc.profile) {
        //     userDoc.profile = {};
        // }
        
        if(bio !== undefined) {userDoc.profile.bio = bio || ''}
        if(skillsArray !== undefined) {userDoc.profile.skills = skillsArray}



        await userDoc.save();

        const responseUser = {
            _id: userDoc._id,
            fullName: userDoc.fullName,
            email: userDoc.email,
            role: userDoc.role,
            profile: userDoc.profile
        };

        return res.status(200).json({ 
            message: "Profile updated successfully",
            success: true,
            user: responseUser 
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}