import express from "express"
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import cors from  "cors"; 
import { clerkMiddleware } from "@clerk/express";
import userRoutes from "../src/routes/user.route.js";
import postRoutes from "../src/routes/post.route.js";
import commentRoutes from "../src/routes/comment.route.js";
import notificationRoutes from "../src/routes/notification.route.js";


const app = express()

app.use(cors())
app.use(express.json());


app.use(clerkMiddleware());

app.get("/", ( req, res ) => res.send("Hello from server.") )
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/notifications", notificationRoutes);


//error handling middleware
app.use((err, req, res )=> {
    console.log("Unhandled error:", err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
})


const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, ()=>{
            console.log("Server is up and running on PORT:", ENV.PORT);
        })
    } catch (error) {
        console.log("Error connecting to server:", error);
        process.exit(1);
    }
} 
  
startServer();

