const app=require("./app");

const dotenv=require("dotenv");
const connectDatabase=require("./config/dataBase")


// config file

dotenv.config({path:"Backend/config/config.env"});

// Connection of Database 
connectDatabase();


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on  http://localhost:${process.env.PORT} `)
})