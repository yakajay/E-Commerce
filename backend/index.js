const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("mongoose")
const router = require("./routes/userRoutes")
const authRouter = require("./routes/AuthRoutes")

dotenv.config()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.mongouri)
.then(() => {
    console.log("Db Connected Successfully");
    
})

app.use("/api", router)
app.use("/auth", authRouter)

app.listen("5103", () => {
    console.log("Server Connecteds");
})