const User = require("../models/User")

const addUser = async (req, res) => {
    try {
        const data = await User.create(req.body)
        return res.status(200).json(data)
    } catch (error) {
        console.log(error);
    }
}

const allUsers = async (req, res) => {
    try {
        const allData = await User.find()
        return res.json(allUsers)
    } catch (error) {
        
    }
}

module.exports = {addUser, allUsers}