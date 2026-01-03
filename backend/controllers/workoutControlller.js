const mongoose = require('mongoose')
const Workout = require('../models/workoutModel')


// get all workouts
exports.getAllWorkouts = async (req, res) => {
    const user_id = req.user._id
    try{
        const workouts = await Workout.find({user_id}).sort({createdAt: -1})

        if(!workouts){
        return res.status(404).json({
            success: false,
            message : "Workouts not found"
            }) 
        }
        res.status(200).json(workouts)
    }
    catch(error){
        res.status(500).json({message: error.message})
    } 
}

// get a workout by its ID
exports.getWorkoutByID = async (req,res) => {
    const {id} = req.params;

    //validate the ID formate first
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({messsage: `Invalid Id! Please enter valid Id.`})
    }

    // if valid, proceed with DB query
    try{
        const workout = await Workout.findById(id);
        // check if workout found with that valid ID
        if(!workout){
            return res.status(404).json({
                success: false,
                message: `Workouts not found for ID ${id}`
            })
        }
        res.status(200).json(workout)
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}

// create a new workout
exports.createNewWorkout = async(req,res) => {
    const {title, reps, load} = req.body;


    if(!title || !reps || !load){
        return res.status(400).json({
            message : "Please provide all the required details"
        })
    }
    try{
        const user_id = req.user._id
        const workout = await Workout.create({title, reps, load, user_id});
        // Workout.save();
        // const allWorkouts = await Workout.find();
        // if(!allWorkouts){
        //     return res.status(404).json({message : error.message});
        // }
        res.status(201).json(workout)
    }
    catch(error){
        return res.status(500).json({message : error.message});
    }   
}


// delete a workout by its ID
exports.deleteWorkoutById = async(req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error : "Invalid Input! Please enter details in correct formate"});
    }

    const workout = await Workout.findOneAndDelete({_id : id});
    if(!workout){
        return res.status(404).json({
            message : "Workout not found"
        })
    }
    res.status(200).json(workout)
} 

// update workout by its ID
exports.updateWorkoutById = async(req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            error : "Invalid Input! Enter coreect formate"
        })
    }

    const workout = await Workout.findOneAndUpdate({_id:id}, {...req.body}, {new : true});

    if(!workout){
        return res.status(404).json({
            message : "Workout not found"
        })
    }
    res.status(200).json({
        success : true,
        message : "workout updated successfully",
        workout : workout
    })
}