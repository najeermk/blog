import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import connectDB  from './config/db.js'
import userRouter from "./routes/userRoutes.js"
import blogRouter from "./routes/blogRoutes.js"
import cors from 'cors'

const app = express()

connectDB()

app.use(cors());

app.set("view engine","ejs");
app.use(express.json());

app.use("/api/users",userRouter);
app.use("/api",blogRouter);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))
})

mongoose.connection.on('error', err => {
  console.log(err)
})

// mongoose.connect(process.env.mongoDBUrl)
//     .then(()=> {
//         console.log('App connected to database')
//         app.listen(process.env.PORT, () => {
//             console.log(`App listening on port ${process.env.PORT}`)
//           })
//     })
//     .catch((error)=> {
//         console.log(error)
//     })