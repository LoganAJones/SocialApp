import Post from "../models/Post.js"

// CREATE

export const createPost = async(req, res) => {
    try {
        const { userId, description, picturePath} = req.body
        const user = await User.findById(userId)
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.userPicturePath,
            picturePath,
            likes: {},
            comments: []
        })
    } catch (err) {
        res.status(409).json({message: err.message})
    }
}