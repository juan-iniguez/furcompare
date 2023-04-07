const express = require("express");
const app = express();
const fs = require("fs");

app.use("/",express.static("public"))

app.get('/', (req,res)=>{

    let x = JSON.parse(fs.readFileSync("../output.json", "utf8"));



    console.log(x);
    res.sendFile(__dirname + "/public/html/index.html")

})

app.get("/howl-fabric", (req,res)=>{
    res.sendFile(__dirname + "/public/output2.json")
})

app.listen(80, ()=>{console.log("Listening on port 80")});
