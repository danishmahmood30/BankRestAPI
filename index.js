var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./src/routes/routes')
var mongoose = require('mongoose')


var app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/bankdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) 

routes(app)
app.get('/',(req,res)=>{
    res.send("Server working correctly")
    req.body("hiiii")
})

app.listen(4000, ()=>{
    console.log("Listening on port 4000")
})