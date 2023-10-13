const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

const items = ["test"];

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')

app.get("/", function(req,res){
    res.render("app", {newListItems : items});
})

app.post("/", function(req,res){
    let item = req.body.newItem
    items.push(item);
    res.redirect("/");
})
app.listen(port, function(){
    console.log("Server is listening on port " + port)
})