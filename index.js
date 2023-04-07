const express = require("express");
const app = express();
const fs = require("fs");

app.use("/",express.static("public"))

app.get('/', (req,res)=>{
    // console.log(x);
    res.sendFile(__dirname + "/public/html/index.html")

})

app.get("/howl-fabric", (req,res)=>{
    res.sendFile(__dirname + "/public/output2.json")
})

app.listen(3000, ()=>{console.log("Listening on port 80")});
