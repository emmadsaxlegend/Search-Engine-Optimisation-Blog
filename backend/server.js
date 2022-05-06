const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const blog_Routes = require('./routes/blogRoute');
const auth_Routes = require('./routes//authRoute');

require ('dotenv').config()


//Create our app
const app = express()

//Connect Mongodb
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_LOCAL,()=>{
    console.log('DB connected')
});

//Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

//cors
app.use(cors())

// Routes Middleware
app.use('/api', blog_Routes)
app.use('/api', auth_Routes)

//port
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})