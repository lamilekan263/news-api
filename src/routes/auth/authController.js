const User = require("../../models/userModel");


exports.registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                status: 'failed',
                message: 'missing parameters'
            });
        }
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password
        });

        const token = newUser.createJWT();
        return res.status(201).json({
            status: 'success',
            token
        });
    } catch (error) {
        return res.status(500).json({
            status: 'failed',
            message: error.message
        });
    }
};



exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                status: 'failed',
                message: 'Incomplete data'
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                status: 'failed',
                message: 'user doesnt exist please register'
            });
        }

        const validPassword = await user.comparePassword(password);
        console.log(validPassword);
        if (!validPassword) {
            return res.status(401).json({
                status: 'failed',
                message: 'Invalid credentials'
            });
        }
        const token = await user.createJWT();
        return res.status(200).json({
            status: 'success',
            token
        });
    } catch (error) {
        return res.status(500).json({
            status: 'failed',
            message: error.message
        });
    }
};