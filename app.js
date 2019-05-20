var express=require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser");

mongoose.connect("mongodb://localhost/dashboard", { useNewUrlParser: true });
var app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("home");
});

app.listen(4000,process.env.IP,function(){
	console.log("server started.....");
});