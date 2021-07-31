require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');


app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
    limit:'50mb'
}));
app.get("/api/mymesse",(req,res)=>{
    res.status(200).json({
        status:200,
        message:"The api is working as well"
    })
})
//port
app.listen(process.env.APP_PORT,()=>{
    console.log("server is up at ",process.env.APP_PORT);
})

