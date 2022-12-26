const bookmarkModel = require("../../models/bookmarkModel");


exports.createBookmark = async (req, res) => {
    try {
        const { title, content, description, urlToImage, publishedAt, url } = req.body;

        if (!title || !content || !description || !urlToImage || !publishedAt || !url) {
            return res.status(400).json({
                status: 'failed',
                message: 'missing parameters'
            });
        }

        const bookmark = await bookmarkModel({
            title,
            description,
            urlToImage,
            publishedAt,
            url
        });
        return res.status(201).json({
            status: 'success',
            bookmark
        });
    } catch (error) {
        return res.status(500).json({
            status: 'failed',
            message: error.message
        });
    }
};


