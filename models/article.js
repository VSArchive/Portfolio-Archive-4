import mongoose from "mongoose"

const articleSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    longDescription: {
        type: String
    },
    imageUrl: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

mongoose.models = {};

var Article = mongoose.model('Article', articleSchema)

export default Article