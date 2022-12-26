const User = require("../../models/userModel");


exports.getProfile = async (req, res) => {
    try {

        const { id } = req.user;

        const user = await User.findById(id).select('-password');
        if (!user) {
            return res.status(404).json({
                status: 'failed',
                message: 'user not found'
            });
        }
        res.status(200).json({
            user
        });
    } catch (error) {
        return res.status(500).json({
            status: 'failed',
            message: error.message
        });
    }
};