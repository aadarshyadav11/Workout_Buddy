import React from 'react'
import {useState, useContext} from 'react'
import { WorkoutsContext } from '../context/WorkoutsContext'

const WorkoutForm = () => {

    
    const [title, setTitle] = useState('')
    const [reps, setReps] = useState('')
    const [load, setLoad] = useState('')
    const [error, setError] = useState(null)
    const [emptyField, setEmptyField] = useState([])

    const { dispatch } = useContext(WorkoutsContext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, reps, load}

        if(!title || !reps || !load){
            setError("Please fill all the fields!");
        }
        // Client-side validation
         const missingFields = [];
        if(!title) missingFields.push('title');
        if(!reps) missingFields.push('reps');
        if(!load) missingFields.push('load');

        if (missingFields.length > 0) {
            setEmptyField(missingFields) // Stop the function here if validation fails
            return;
        }

        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/workouts`, {
            method : 'POST',
            body: JSON.stringify(workout),
            headers :{
                'Content-Type': 'application/json' 
            }
        })

        const json = await response.json();

        if(!response.ok){
            setError(json.error)
            setEmptyField(json.emptyField)
            // console.log(json.error);
            
        }
        else{
            dispatch({type: "CREATE_WORKOUT", payload: json})
            setError(null)
            setTitle('')
            setReps('')
            setLoad('')
            setEmptyField([])
            console.log("New Workout Added Successfully", json)
            
        }


    }

  return (
    <div>
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>

            <label htmlFor="title">Exercise Title : </label>
            <input type="text" id='title' value={title} onChange={(e) => {setTitle(e.target.value)}} 
            className={emptyField.includes('title') ? 'error' : ''}
            />

            <label htmlFor="reps">Reps : </label>
            <input type="number" id='reps' value={reps} onChange={(e) => {setReps(e.target.value)}} 
            className={emptyField.includes('reps') ? 'error' : ''}
            />

            <label htmlFor="load">Load (in Kg's) : </label>
            <input type="number" id='load' value={load} onChange={(e) => {setLoad(e.target.value)}} 
            className={emptyField.includes('load') ? 'error' : ''}
            />

            <button>Add Workout</button>
            {error && <div className='error'>{error}</div>} 
        </form> 
    </div>
  )
}

export default WorkoutForm