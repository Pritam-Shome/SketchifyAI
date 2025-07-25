import userModel from "../models/userModel.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ sucess:false,message: "Please fill all fields" });
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const userdata = {
            name,
            email,
            password: hashedPassword,
        }; 
        const newUser = new userModel(userdata);
        const user = await newUser.save();


        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "30d",
        });

        res.json({
            success: true,
            token,
            user: {
                name: user.name,
            }
        });


        }catch(err) {
        console.error(err);
        res.json({ success: false, message: err.message });
        }
}


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Please fill all fields" });
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }
        else{
             const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "30d",
        });

        res.json({
            success: true,
            token,
            user: {
                name: user.name,
            }
        });
    }

       

    } catch (err) {
        console.error(err);
        res.json({ success: false, message: err.message });
    }
}

const userCredits = async (req, res) => {
    try {
        const user = await userModel.findById(req.userId); // Use req.userId
        res.json({
            success: true,
            credits: user.creditBalance,
            user: { name: user.name }
        });
    } catch (e) {
        console.log(e.message);
        res.json({
            success: false,
            message: e.message
        });
    }
}

export { registerUser, loginUser,userCredits};