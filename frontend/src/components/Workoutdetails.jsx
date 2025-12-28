import React from 'react'

const Workoutdetails = ({workout}) => {
  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Reps : </strong> {workout.reps}</p>
        <p><strong>Load (in kg) : </strong> {workout.load}</p>
        <p>{workout.createdAt}</p>

    </div>
  )
}

export default Workoutdetails
