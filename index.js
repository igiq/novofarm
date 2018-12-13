var express = require('express');


var app = express();



app.set("view engine", "ejs");
app.use(express.static(__dirname+'/public'));

console.log(__dirname)

app.get('/',function(req,res){
    res.render ('landing')
})
app.get('/products',function(req,res){
    res.render('products')
})
app.get('/about',function(req,res){
    res.render('about')
})

app.listen(7000,function(){
    console.log('online')
})

