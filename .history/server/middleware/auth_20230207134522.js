import  jwt  from "jsonwebtoken"

export const verifyToken = async(res, req, next) => {
    try {
        let loken = req.header("Authorization")
        
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}