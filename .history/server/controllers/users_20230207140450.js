import User from "../models/User"

export const getUser = async(req,res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const getUserFriends = async(req,res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    )
    const formattedFriends = friends.map(
        ({ _id, firstName, lastName, occupation, location, picturePath }) => {
            return {_id, firstName, lastName, occupation, location, picturePath}
        }
    )
}