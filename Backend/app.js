const express=require("express");
const app=express();

app.use(express.json());


// Route Import 
const products=require("./routes/productRoute");

app.use("/api/v1",products);


module.exports=app;