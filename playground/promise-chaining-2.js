require('../src/db/mongoose')
const Task = require('../src/models/tasks')

// 5ebeaf710fbc5cb18dfa4135

// Task.findByIdAndDelete('5ebeaf710fbc5cb18dfa4135').then((task) =>{
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) =>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})
    return count 
}

deleteTaskAndCount("5ebaae72b1078af4e4f478b4").then((count) => {
    console.log(count)
}).catch((e) =>{
    console.log(e)
})