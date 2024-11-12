const mongodb = require('mongodb');
const bcrypt = require('bcrypt');
const userSchema = require('../model/userModel');
const jwt = require("jsonwebtoken");
const { createSecretToken } = require('../config/generateToken');


register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body.data;
        
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Check if user already exists
        const existingUser = await userSchema.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error:true,message: 'Email already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new userSchema({
            name: username,
            email: email,
            password: hashedPassword,
            role: role || 'user'
        });

        await user.save();
        res.status(201).json({ error:false,message: 'User registered successfully' });

    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({error:true, message: 'Error registering user', error });
    }
}


login = async (req, res) => {
    try {
        const { email, password } = req.body.data;
        const user = await userSchema.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: true, message: 'Invalid email or password' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: true, message: 'Invalid email or password' });
        }

        //return token in response 
        const token = createSecretToken(
            user._id
        );

        res.status(200).json({ error:false, message: 'Logged in successfully', token });
        // res.status(200).json({ error: false, message: 'Login successful', token: });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: true, message: 'Error logging in', error });
    }
}

module.exports = {
    register,
    login
}
