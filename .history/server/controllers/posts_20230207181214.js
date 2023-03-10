import Post from "../models/Post.js"

// CREATE

export const createPost = async(req, res) => {
    try {
        const { userId, description, picturePath} = req.body
        const user = await User.findById(userId)
    } catch (err) {
        res.status(409).json({message: err.message})
    }
}