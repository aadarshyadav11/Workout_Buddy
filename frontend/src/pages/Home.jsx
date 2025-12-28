// import React, { useState, useEffect } from 'react'
import React, { useEffect, useContext } from 'react'


// component imports
import Workoutdetails from '../components/Workoutdetails'
import WorkoutForm from '../components/WorkoutForm';
import { WorkoutsContext } from '../context/WorkoutsContext';


const Home = () => {

    // useState
    // const [workouts, setWorkouts] = useState([]);

    const { workouts, dispatch} = useContext(WorkoutsContext)

    // fetching data from database
    useEffect(() => {
        //method 1
        // fetch(`${import.meta.env.VITE_API_URL}/api/workouts`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setWorkouts(Array.isArray(data) ? data : []);
        //     })
        //     .catch((error) => {
        //         console.error(error)
        //     });


        // method 2
        const fetchWorkouts = async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/workouts`)
            const json = await res.json()

                if(res.ok){
                    // useState
                    // setWorkouts(Array.isArray(json) ? json : [])

                    dispatch({type: "SET_WORKOUTS", payload: json})
                } 
        }
        fetchWorkouts()
        }, [dispatch])


  return (
    <div className="home"> 
        <div className='workouts'>
        {/* <h2>Workout List</h2>
        {workouts === null || workouts.length === 0 && <p>No workouts found</p>}
            {(workouts || []).map((workout) => (
                // <div key={workout._id} className='workouts'>
                //     <p>{workout.title}</p>
                //     <p><strong>Reps : </strong>{workout.reps}</p>
                //     <p><strong>Load (in Kg): </strong>{workout.load}</p> 
                // </div>  
                <WorkoutDetails key={workout._id} workout={workout} />
            ))
        } */}

        {
            workouts && workouts.map((workout) => (
                // <p key={workout._id}>{workout.title}</p>
                <Workoutdetails key={workout._id} workout={workout} />
            ))
        }
        </div>
        <WorkoutForm/>
    </div>
  )
}

export default Home  