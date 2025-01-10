import { useState } from "react";
function Login(){

const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

    return(
        <section className="signup"  onSubmit={handleSubmit}>
    <div className="form-container">
        <h1>Create an Account</h1>
        <form action="submit-signup.php" method="POST">
            <div className="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required placeholder="Choose a username" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required placeholder="Enter your email" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required placeholder="Create a password" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" required placeholder="Confirm your password" onChange={handleChange}/>
            </div>
            <button type="submit" className="submit-btn">Sign Up</button>
            <p>Already have an account? <a href="login.html">Login here</a></p>
        </form>
    </div>
</section>
    );}

    export default Login