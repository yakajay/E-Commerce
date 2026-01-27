const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("mongoose")
const router = require("./routes/userRoutes")

dotenv.config()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.mongouri)
.then(() => {
    console.log("Db Connected");
    
})

app.use("/api", router)

app.listen("5103", () => {
    console.log("Server Connecteds");
})