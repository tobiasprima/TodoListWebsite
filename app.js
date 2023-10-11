const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.render("app.ejs")
})

app.listen(port, function(){
    console.log("Server is listening on port " + port)
})