import { useState } from "react"
import { useLogin } from "../components/useLogin"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, isLoading, error} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log(email, password);
        await login(email, password)
        
    }

    return(
        <form className="login" onSubmit={handleSubmit}>
            <h4>Login</h4>

            <label htmlFor="email">Email : </label>
            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />

            <label htmlFor="password">Password : </label>
            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />

            <button disabled={isLoading}>Login</button>
            {error && <div className="error">{error}</div>} 
        </form>
    )
}

export default Login