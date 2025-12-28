const express = require('express')
const Workout = require('../models/workoutModel.js')

const {getAllWorkouts, getWorkoutByID, createNewWorkout, deleteWorkoutById, updateWorkoutById} = require('../controllers/workoutControlller.js')

const router = express.Router();

/**
 * Route: /api/workouts
 * Method: GET
 * Description: get all workouts
 * Access: public
 * Parameter: None
 */

router.get('/', getAllWorkouts)

/**
 * Route: /api/workouts/:id
 * Method: GET
 * Description: get a single workouts doc
 * Access: public
 * Parameter: id
 */

router.get('/:id', getWorkoutByID)

/**
 * Route: /api/workouts
 * Method: POST
 * Description: create a new workouts doc
 * Access: public
 * Parameter: none
 */

router.post('/', createNewWorkout)

/**
 * Route: /api/workouts/:id
 * Method: DELETE
 * Description: delete a workouts docs by their ID
 * Access: public
 * Parameter: id
 */

router.delete('/:id', deleteWorkoutById)

/**
 * Route: /api/workouts/:id
 * Method: PATCH
 * Description: update a workouts docs by their ID
 * Access: public
 * Parameter: id
 */

router.patch('/:id', updateWorkoutById)

module.exports = router;