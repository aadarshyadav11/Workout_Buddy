import { useReducer } from 'react'
import { WorkoutsReducer } from './WorkoutsReducer';
import { WorkoutsContext } from './WorkoutsContext';

const initialState = {
    workouts : []
}

export const WorkoutsProvider = ({children}) => {
    const [state, dispatch] = useReducer(WorkoutsReducer, initialState);

    return( 
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutsContext.Provider>
    )
}