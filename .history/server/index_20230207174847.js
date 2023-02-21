import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import multer from "multer"
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from "url"
import helmet from "helmet"
//auth
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import { register } from "./controllers/auth/js"

// configurations
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()
const app = express();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors())
//S3 can be used
app.use("/assets", express.static(path.join(__dirname, "public/assets")))

//file storage
//anytime file is uploaded is saved into...
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/assets")
    },
    filename: function(req, file, cb) {
        cd(null, file.originalname)
    }
})
const upload = multer({ storage })

//routes with files
app.post("/auth/register", upload.single("picture", register))

//routes
app.use("/auth", authRoutes)
app.use("/users", userRoutes)
app.use("/posts", postRoutes)
//mongoose setup
const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
})
.catch((error) => console.log(`${error} did not connect`))