import Post from "../models/Post.js"

// CREATE

export const createPost = async(req, res) => {
    try {
        const { userId, description, picturePath}
    } catch (err) {
        res.status(409).json(message: err.message)
    }
}