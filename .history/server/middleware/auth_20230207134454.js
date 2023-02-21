import  jwt  from "jsonwebtoken"

export const verifyToken = async(res, req, next) => {
    try {
        
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}