
import express from "express";

const app = express();

//Import all route
import userRoutes from "./routes/users.js"

// app.get("/test",(req, res, next) => {
//     res.send("Test")
// })
app.use('/api/users', userRoutes);


app.listen(8080, ()=> {
    console.log("Server is running on port 8080");
})