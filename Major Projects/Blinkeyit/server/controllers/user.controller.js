import UserModel from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export async function registerUserController(request, response) {
    try {
        const { name, email, password } = request.body
        if (!name || !email || !password) {
            return response.status(400).json({
                message: "All fields are required, provide them",
                error: true,
                success: false
            })
        }

        const user = await UserModel.findOne({ email });
        if (user) {
            return response.json({
                message: "User already exists",
                error: true,
                success: false
            })
        }

        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        const payload = {
            name,
            email,
            password: hashPassword
        }
        const newUser = new UserModel(payload);
        const save = await newUser.save();

        const verifyEmail = await sendEmail({
            sendTo: email,
            subject: "Verify your email for Binkeyit",
            html:
        })
    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}