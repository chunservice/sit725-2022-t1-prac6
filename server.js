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