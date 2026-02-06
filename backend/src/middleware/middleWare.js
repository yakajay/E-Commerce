const jwt = require("jsonwebtoken")
const env = require("dotenv")

env.config()

exports.authMiddleWare = (req, res, next) => {
    try {
        const headersData = Auth.headers.authorization
        if (!headersData) {
            return res.status(401).json({MSG: "Invalid Token"})
        }
        const tokenData = headersData.split(" ")
        const decodedData = jwt.verify(tokenData[1], process.env.SECRET_JWT)
        req.id = decodedData.id
        next()
    } catch (error) {
        console.log(
            res.status(500).json({MSG: "Error with Token"})
        );
    }
}