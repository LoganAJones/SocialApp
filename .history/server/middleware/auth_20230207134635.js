import  jwt  from "jsonwebtoken"

export const verifyToken = async(res, req, next) => {
    try {
        let loken = req.header("Authorization")

        if(!token) {
            return res.status(403).send("Access Denied")
        }

        if(token.startsWith("Bearer ")) {
            return res.status(403).send("Access Denied")
        }
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}