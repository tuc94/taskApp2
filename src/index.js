const express = require('express');
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/tasks')
const userRoute = require('./routers/user')
const taskRoute = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req,res,next) =>{
//     if(req.method === "GET"){
//         res.send('GET Requests are disabled')
//     }else{
//         next()
//     }
// })

// app.use((req,res,next) =>{
//     res.status(503).send()
// })

app.use(express.json())
app.use(userRoute)
app.use(taskRoute)



app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
})

const pet = {
    name: "Hal"
}

pet.toJSON = function () {
    return {}
}


const main = async () =>{
    // const task = await Task.findById('5eed1329b22c3483fb1f5ad5')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    // const tasks = await Task.find({owner: "5eed123ab4d42782bca1eea8"})
    // console.log(tasks)
}

main()