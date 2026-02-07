const dotenv = require("dotenv")
const jwt = require(jsonwebtoken)

dotenv.config()

exports.authMiddleWare = (req, res, next) => {
    try {
        const headData = Auth.headers.authorization
        if (!headData) {
            return res.status(401).json({MSG: "Invalid Token"})
        }
        const tokenData = headData.split(" ")
        const deocdeData = jwt.verify(tokenData[1], process.env.SECRET_JWT)
        req.id = deocdeData.id
        next()
    } catch (error) {
        return res.status(500).json({MSG: "Token Error"})
    }
}