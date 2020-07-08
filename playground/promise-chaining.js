require('../src/db/mongoose')
const User = require('../src/models/user')

// 5ebb04453d19ad5720a36ab2

User.findByIdAndUpdate('5ebb04453d19ad5720a36ab2', {age: 1}).then((user) =>{
    console.log(user)
    return User.countDocuments({ age: 1})
}).then((result) =>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})

const updateAgeAndCount = async (id,age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5ebb04453d19ad5720a36ab2', 3).then((count) =>{
    console.log(count)
}).catch((e)=> {
    console.log(e)
})