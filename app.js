var express        = require("express"),
    bodyParser     = require("body-parser")
    
var app            = express(); 
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
  res.render("home");
})


app.listen(3000,function(){
    console.log("Server is listening");
})
