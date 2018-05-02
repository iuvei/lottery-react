const express=require('express')
const bodyParser=require('body-parser');
const cookieParser = require('cookie-parser');
const path=require('path');
const app=express();
app.use(express.static('dist'));
const filePath=path.join(__dirname+'/../dist/index.html');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.get('/',function(req,res){
    res.sendFile(filePath);
});
app.get('/getCashOrder',function(req,res){
    res.json({code:0,num:4});
})
var server=app.listen(3000,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log(`host:${host} port:${port}restart...`);
});