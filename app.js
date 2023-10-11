const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){

})

app.listen(port, function(){
    console.log("Server is listening on port ${port}")
})