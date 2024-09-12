const express=require("express");
// const { connect } = require("mongoose");
const connectToDb = require("./db");
const cors = require('cors')

// express app
const app=express();
const port=8083;

// database connection

connectToDb();

app.use(cors())
app.use(express.json({limit:"50mb"}));
app.get("/",(req,res)=>{
    res.send("Hello welcome!");
})

// all routes files
let userRoutes=require("./routes/userRoutes");
let postRoutes=require("./routes/postRoutes");

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("welcome page")
})

app.use("/users",userRoutes)
app.use("/posts",postRoutes)


app.listen(port,()=>{
    console.log("server is running at port number :"+port);
})