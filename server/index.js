import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import { dbConnection } from './dbConnection.js';
import router from './routes/userRoute.js'

dotenv.config();
const app = express();
const PORT  = process.env.PORT1 || 5500;

app.use(cors());
app.use(express.json());

dbConnection(process.env.MONGO_STRING).then(()=>{
    console.log("Database connected")
}).catch((error)=>{
   console.log(error);
})

// routes
app.use('/api', router)

app.listen(PORT, ()=>{
	console.log(`Server started on Port ${PORT}`)
})