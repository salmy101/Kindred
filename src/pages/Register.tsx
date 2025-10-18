import { useState } from "react"
import { supabase } from "../../src/helper/supabaseClient"
import { Link } from "react-router-dom"

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("")

    const handleSubmit = async (event: React.FormEvent) => { 
        event.preventDefault();
        setMessage("")

        const {data, error} = await supabase.auth.signUp({ //supabase auth method to register user
            email: email,
            password: password, //hashing and storing the password securely is handled by Supabase
        });
        if(error) {
            setMessage(error.message)
            return;
        }

        if(data){
            setMessage("User account created")
        }
        setEmail("")
        setPassword("")
    }

  return (
    <div>
        <h2>Register</h2>
        <br></br>
        {message && <span>{message}</span>} {/* ternary operator to display message, if we have one and it exists, display in span tag */}
        <form onSubmit={handleSubmit}>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                required
            />
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
            />
            <button className="btn btn-ghost"type="submit">Register</button>
        </form>
        <span className="redirect-link mt-6">
            Already have an account? <Link to="/login">Login Here</Link>
        </span>
    </div>
     
  )
}

export default Register