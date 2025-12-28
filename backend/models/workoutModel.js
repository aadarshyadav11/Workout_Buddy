const mongoose = require('mongoose')

const WorkoutSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    reps:{
        type: Number,
        required:true
    },
    load:{
        type: Number,
        required: true
    }
},
{timestamps: true}
)

// exporting this module by "Workouts" collection name
module.exports = mongoose.model("Workouts", WorkoutSchema)