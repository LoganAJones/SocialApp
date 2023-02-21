import User from "../models/User"

export const gerUSer = async(req,res) => {
    try {
        
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}