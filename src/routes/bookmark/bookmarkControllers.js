const Bookmark = require("../../models/bookmarkModel");


exports.createBookmark = async (req, res) => {
    try {
        const { title, content, description, urlToImage, publishedAt, url } = req.body;
        if (!title || !content || !description || !urlToImage || !publishedAt || !url) {
            return res.status(400).json({
                status: 'failed',
                message: 'missing parameters'
            });
        }

        const bookmark = await Bookmark.create({
            title,
            description,
            urlToImage,
            publishedAt,
            url,
            content,
            createdBy: req.user.id
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


exports.fetchBookmarks = async (req, res) => {
    try {
        const bookmarks = await Bookmark.find({ createdBy: req.user.id });

        return res.status(200).json({
            status: 'success',
            bookmarks
        });
    } catch (error) {
        return res.status(500).json({
            status: 'failed',
            message: error.message
        });
    }
};

// exports.getBookmark = async (req, res) => {

// };
exports.deleteBookmark = async (req, res) => {
    try {
        const { id } = req.params;
        await Bookmark.findByIdAndDelete(id, { createdBy: req.user.id });

        return res.status(200).json({
            status: 'success',
            message: 'deleted successfully'
        });
    } catch (error) {
        return res.status(500).json({
            status: 'failed',
            message: error.message
        });
    }
};