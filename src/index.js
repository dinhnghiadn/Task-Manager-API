const express = require('express')
require('./db/mongoose')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')
// const main = async () => {
//     const task = await Task.findById('62c7ddb624be021c948ccea0')
//     await task.populate('owner').execPopulate() //populate data from relationship (owner-user)
//     console.log(task.owner)
//     const user = await User.findById('62c7f9ad41f47c121c0ad1c2')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()
