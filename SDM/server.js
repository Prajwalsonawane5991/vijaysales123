var express=require('express')
var app = express();
app.use(express.static('public'))
app.get("/",(req,res)=>{
    res.send("Welcome");
})
app.listen(4500);