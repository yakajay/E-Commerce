const Auth = require("../models/AuthModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
    const { username, password, email } = res.body
    try {
        const user = await Auth.findOne({email})
        if (user) {
            return res.status(401).json({MSG: "User Already exists"})
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = await Auth.create({
            username, email, password: hashPassword
        })
        res.json(newUser)
    } catch (error) {
        console.log(error);
    }
}

exports.login = async (req, res) => {
    const { email, password} = res.body
    try {
        const user = await Auth.findOne({email})
        if (!user) {
            return res.status(401).json({MSG: "Email not Found"})
        }
        const userMapping = await Auth.bcrypt.compare(password, user.password)
        if (!userMapping) {
            return res.status(401).json("Invalid Credentials")
        }
        const jwt = jwt.sign(
            {id: user._id}, "SECRET_JWT", {expiresIn: "1d"}
        )
        res.json(jwt)
    } catch (error) {
        console.log(error);
    }
}