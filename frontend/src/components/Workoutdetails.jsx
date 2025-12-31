import React, { useContext } from 'react'
import { WorkoutsContext } from '../context/WorkoutsContext'

// importing date-fns module
import {formatDistanceToNow} from 'date-fns'

const Workoutdetails = ({workout}) => {

  const {dispatch} = useContext(WorkoutsContext);

  const handleClick = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/workouts/${workout._id}`, {
        method: 'DELETE'
      })

      const json = await res.json();

      if(res.ok){
         dispatch({type : 'DELETE_WORKOUT', payload: json})
      }
  }

  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Reps : </strong> {workout.reps}</p>
        <p><strong>Load (in kg) : </strong> {workout.load}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>

    </div>
  )
}

export default Workoutdetails
