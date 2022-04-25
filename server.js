require('dotenv').config()
var express = require("express")
var app = express()
var cors = require("cors")
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoute");
let userRoute = require("./routes/userRoute");

// test and listen to the port
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// using cors (cross-origin resource sharing)
app.use(cors())

// automatically find /api/projects
app.use('/api/projects',projectRoutes)

app.use('/api/user',userRoute)

// addNumbers
const addNumbers = (number1, number2) => {
    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var result = (num1 + num2) || null; // if the numbers can be added together, add them together as summation. If not, return it as null
    return result;
}

// get API
app.get('/addTwoNumbers/:firstNumber/:secondNumber',(req,res) => {
    var number1 = req.params.firstNumber;
    var number2 = req.params.secondNumber;
    var result = addNumbers(number1,number2)
    // if the result is null, return statusCode 400
    if(result == null) {
        res.json({result: result, statusCode: 400}).status(400)    
    }
    // else return statusCode 200
    else {res.json({result: result, statusCode: 200}).status(200)}
})

// const cardList = [    
//     {
//         title: "Orange",
//         image: "images/orange_cut.png",
//         link: "About Orange",
//         description: "An orange is a fruit of various citrus species in the family Rutaceae."
//      },
//     {
//        title: "Lime",
//        image: "images/lime_cut.png",
//        link: "About Lime",
//        description: "A lime is a citrus fruit, which is typically round, green in color and contains acidic juice vesicles."
//     },
// ]

// define the port as 3000
var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: "+port)
    console.log("press Ctrl + C to quit")
    // createCollection("fruits")
})