import dotenv from 'dotenv'
dotenv.config()

import express from "express"
import cors from "cors"
import { sample_foods, sample_tags, sample_users } from "./data"
import jwt from "jsonwebtoken"
import foodRouter from './routers/food.router'
import userRouter from './routers/user.router'
import { dbConnect } from './configs/database.config'

dbConnect()
const app  = express()

app.use(express.json())

app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}))



app.get("/api/foods", foodRouter)
app.get("/api/users", userRouter)


const port = 5000

app.listen(port, () => {
    console.log(`Website served on port ${port}`)
})
