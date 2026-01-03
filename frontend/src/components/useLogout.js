import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"
import { WorkoutsContext } from "../context/WorkoutsContext";




export const useLogout = () => {

    const {dispatch} = useContext(AuthContext);
    const {dispatch: workoutsDispatch} = useContext(WorkoutsContext)

    const logout = () => {
        //remove user from local storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
    }

    return {logout}


}