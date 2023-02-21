import User from "../models/User"

export const gerUSer = async(req,res) => {
    try {
        const { id } = req.params
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}