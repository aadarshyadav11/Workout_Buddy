const express = require('express')  // importing express module
require('dotenv').config()  // load environment variable
const mongoose = require('mongoose')   // importing mongoose module
const cors = require('cors')



const workoutsRouter = require('./routes/workout.js')
// creating an express application
const app = express();

//middleware to pass JSON bodies
// this allows us to handle JSON data sent in requests 
app.use(cors())
app.use(express.json())

// middleware
// app.use((req,res,next) => {
//     console.log(req.method, req.url);      // req.path also can be taken for same as req.url
//     next();
    
// })

app.use('/api/workouts', workoutsRouter)

// Routes
app.get('/', (req,res) => {
    res.json({
        message: "Welcome to our App"
    })
})

// connect to database 
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("DB connected successfully");
}).catch((error) => {
    console.error(error);
})

// port number
const PORT = process.env.PORT;

// application listening
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})