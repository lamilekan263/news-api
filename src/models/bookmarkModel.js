const mongoose = require('mongoose');


const bookmarkSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    content: {
        type: String,
        required: [true, 'content is required']
    },
    description: {
        type: String,
        required: [true, 'description is required']
    },
    urlToImage: {
        type: String,
        required: [true, 'urlToImage is required']
    },
    publishedAt: {
        type: String,
        required: [true, 'publishedAt is required']
    },

    url: {
        type: String,
        required: [true, 'url is required']
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});


module.exports = mongoose.model("Bookmark", bookmarkSchema);