import React, { useContext } from 'react'
import { WorkoutsContext } from '../context/WorkoutsContext'


// importing date-fns module
import {formatDistanceToNow} from 'date-fns'
import { AuthContext } from '../context/AuthContext'

const Workoutdetails = ({workout}) => {

  const {dispatch} = useContext(WorkoutsContext);
  const {user} = useContext(AuthContext)

  const handleClick = async () => {

      if(!user){
        return
      }
      
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/workouts/${workout._id}`, {
        method: 'DELETE',
        headers: {
          'Authorization' : `Bearer ${user.token}` 
        }
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
