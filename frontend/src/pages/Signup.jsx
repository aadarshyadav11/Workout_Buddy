import { useState } from "react"
import { useSignup } from "../components/useSignup";


const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const {signup, error, isLoading} = useSignup(); 

    const handleSubmit = async (e) => {
        e.preventDefault()

        // console.log(email, password);
        await signup(email, password)
        
    }

    return(
        <form className="signup" onSubmit={handleSubmit}>
            <h4>Sign Up</h4>

            <label htmlFor="email">Email : </label>
            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />

            <label htmlFor="password">Password : </label>
            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />

            <button disabled={isLoading}>Sign Up</button>
            {error && <div className="error">{error}</div>}

        </form>

    )
}

export default Signup