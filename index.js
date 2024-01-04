var express=require("express")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")

const app=express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/Database')
var db=mongoose.connection
db.on('error',()=> console.log("Error in Connecting to Database"))
db.once('open',()=> console.log("Connected to Database"))

app.post("/sign_up",(req,res) => {
    var fullName= req.body.fullName
    var username=req.body.username
    var email=req.body.email
    var phoneNumber=req.body.phoneNumber
    var gender=req.body.gender
    var password=req.body.password


    var data={
        "fullName":fullName,
        "username":username,
        "email":email,
        "phoneNumber":phoneNumber,
        "password":password,
        "gender":gender,
        "age":age,

    }
    db.collection('users').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted Succesfully")
    })
    return res.redirect('signup_successful.html')
})

app.get("/",(req,res) => {
    res.set({
        "Allow-acces-Allow-Origin":'*'
    })
    return res.redirect('index.html')
}).listen(8000);

console.log("Listening on port 8000")