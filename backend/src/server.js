import express from "express"
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";



const app = express()

app.use(express.json());


app.get("/", ( req, res ) => res.send("Hello from server.") )

const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, ()=>{
            console.log("Server is up and running on PORT:", ENV.PORT);
        })
    } catch (error) {
        console.log("Error connecting to DB:", error);
        process.exit(1);
    }
} 
  
startServer();

