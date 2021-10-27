const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    title:{
        required: true,
        type: String,
    },
    author:{
        required: true,
        type: String,
    },
    description:{
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Post",postSchema);