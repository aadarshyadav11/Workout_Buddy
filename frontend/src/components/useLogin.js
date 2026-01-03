import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export const useLogin = () => {

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useContext(AuthContext);

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users/login`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await res.json()

        if(!res.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(res.ok){
            // save the user to browsers local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update global auth context
            dispatch({type : 'LOGIN', payload: json})

            setIsLoading(false)
        }


    }

    return {login, isLoading, error}
}