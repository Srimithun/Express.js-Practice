const express = require("express");
const app = express();

//middleware
app.use(express.json());

app.post("/health-checkup", function(req, res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    
    res.send("The number of kidneys is "+kidneyLength);
})

//global catches or called as error handling middleware
app.use(function(err,req,res,next){
    res.json({
        msg: "Sorry something is wrong"
    })
})


app.listen(3000);












// const express = require("express");
// const app = express();


// app.get("/health-checkup", function(req,res) {
//     const kidneyId = req.query.kidenyId;
//     const username = req.headers.username;
//     const password= req.headers.password;

//     if(!(username === "srimithun" && password === "pass")){

//         res.status(400).json({
//             msg: "Somethings up with your inputs"
//         });

//         if(kidneyId!=1 || kidneyId!=2)
//         {
//             res.json({
//                 msg: "Your kidneys are fine!"
//             })
//         }
//     }
//     res.json({
//         msg: "Your kidneys are fine!"
//     })

// });
// app.listen(3000);