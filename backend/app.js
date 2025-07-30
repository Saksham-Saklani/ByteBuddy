const cookieParser = require("cookie-parser")
const express = require("express")
const userRoute = require("./routes/userRoute")
const { connectDB} = require("./connection")
const { checkAuthentication} = require(".//middlewares/auth")
const cors = require("cors")
const PORT = 8005

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(checkAuthentication)

connectDB(process.env.mongoUrl)

app.use('/auth',userRoute)

app.listen(PORT,() => {
    console.log("server started")
})





