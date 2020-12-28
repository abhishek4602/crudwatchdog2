const express = require ('express')
const mongoose= require ('mongoose')
// const favicon = require('express-favicon');
const Visitor= require('./models/visitor')
var favicon = require('serve-favicon')
var path = require('path')
//db password= dV9ebXYfpnxYi8D
//heroku password = UEcbQ;P7`:~p~jA (doesnt include '=')
const app=express()

// app.use(favicon(__dirname + './assets/favicon.png'));
app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')))
mongoose
.connect('mongodb+srv://Abhishek:dV9ebXYfpnxYi8D@cluster0.xep43.mongodb.net/test?retryWrites=true&w=majority',
    {
    useNewUrlParser:true,
    useUnifiedTopology:true
    }
)
.then(()=>{console.log('Connection is M Successful');}); 
app.use(express.json());
var bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors())
//app.use(express.json())
 // parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse the raw data
app.use(bodyParser.raw());
// parse text
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/putdata',async(req,res)=>{
    
    console.log('Got body:', req.body); 
    const visitor= new Visitor({
        nameVisitor : req.body.nameVisitor,
        tempVisitor : req.body.tempVisitor,
        destinationFlatVisitor : req.body.destinationFlatVisitor,
        vehicleNumberVisitor : req.body.vehicleNumberVisitor,
        timeStamp : req.body.timeStamp,
        visitorType : req.body.visitorType
        })
        
         console.log(JSON.stringify(req.body))
         try{
            const v1= await visitor.save()
            res.json(v1)
        }catch(Err){console.log(Err)}
})

const watchdogrouter_2=require('./routers/watchdogrouter')
app.use('/watchdog',watchdogrouter_2)

app.listen(process.env.PORT ||9000,() => {console.log('Success 8000')})