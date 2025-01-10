import { useState } from "react";
import "./login.css"
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
<section className="login"  onSubmit={handleSubmit}>
    <div className="form-container">
        <h1>Login to Your Account</h1>
        <form action="submit-login.php" method="POST">
            <div className="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required placeholder="Enter your email" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required placeholder="Enter your password" onChange={handleChange}/>
            </div>
            <button type="submit" className="submit-btn">Login</button>
            <p>Don't have an account? <a href="signup.html">Sign up here</a></p>
        </form>
    </div>
</section>);}

export default Login;
