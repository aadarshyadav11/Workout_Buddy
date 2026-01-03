import { useReducer, useEffect} from 'react'
import { AuthReducer } from './AuthReducer';
import { AuthContext } from './AuthContext';


const initialState = {
    user : null
}

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))

        if(user){
            dispatch({type: 'LOGIN', payload: user})
        }
    }, [])

    console.log('AuthContext state: ', state)

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
    
}