const express = require('express')
var cors = require('cors')

const app = express()
const router = require('./Router/User')
app.use(express.json())
app.use(cors())

/// IMPORT OUR ROUTER 
const UserRouter = require('./Router/User')
const FormateurRouter = require('./Router/Formateurs')
const StudentRouter = require('./Router/Student')
const SubjectRouter = require('./Router/Subject')
const QuestionRouter = require('./Router/Question')
const QuizRouter = require('./Router/Quiz')


/// OUR ROUTERS 
app.use('/api/user', UserRouter)
app.use('/api/formateur', FormateurRouter)
app.use('/api/student', StudentRouter)
app.use('/api/subject', SubjectRouter)
app.use('/api/question', QuestionRouter)
app.use('/api/quiz', QuizRouter)


app.get('/', (req, res) => {
    res.send({
        message:"welcome in my api!"
    })
})
const listener = app.listen(process.env.PORT || 8080, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})