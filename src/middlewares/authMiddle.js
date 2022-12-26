require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.authMiddleware = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({
            status: 'failed',
            message: 'unauthorized'
        });
    }
    const token = authHeader.split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.user = payload;
        next();

    } catch (error) {
        return res.status(401).json({
            status: 'failed',
            message: 'unauthorized'
        });
    }
};