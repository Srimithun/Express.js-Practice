const express = require("express")
const app = express();
const users = [{
    name : 'Jhon',
    kidneys : [{
        healthy : false
    },{
        healthy : true
    }]
}]
app.use(express.json());

app.get("/",function(req,res){
    const Jhonkidneys = users[0].kidneys;
    const numberOfKidneys = Jhonkidneys.length;
    let healthyKidneys = 0;
    for(let i=0;i<Jhonkidneys.length;i++)
    {
        if(Jhonkidneys[i].healthy)
        healthyKidneys = healthyKidneys + 1;
    }

    const unhealthyKidenys = numberOfKidneys - healthyKidneys;
    res.json({
        numberOfKidneys,
        healthyKidneys,
        unhealthyKidenys
    })
})
app.post("/",function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/",function(req, res){
    for(let i=0;i<users[0].kidneys.length;i++)
    {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/",function(req,res){
    const newKidneys = [];
    for(let i=0;i<users[0].kidneys.length;i++)
    {
        if(users[0].kidneys[i].healthy)
        {
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg:"deleted"
    })
})


app.listen(3000);