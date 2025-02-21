import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useSelector } from "react-redux";
import Footer from "../Footer";


function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  
  // const isauthenicate = useSelector((state) => state.auth.isauthenicate);

  // Handle sign up (dummy validation)
  const handleSignUp = (e) => {
    e.preventDefault();

    // Dummy validation (You can replace this logic with actual sign up logic)
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else if (email === "user@example.com" && username === "user") {
      alert("Sign Up Successful!");
      navigate("/home"); // Redirect to home page after sign up
    } else {
      alert("Sign Up Failed");
    }
  };

  // Dummy functions for social sign up buttons
  const handleGoogleSignUp = () => {
    alert("Google Sign Up Successful! (Dummy)");

    navigate("/home");
  };

  const handleGithubSignUp = () => {
    alert("GitHub Sign Up Successful! (Dummy)");
    navigate("/home");
  };

  const handleFacebookSignUp = () => {
    alert("Facebook Sign Up Successful! (Dummy)");
    navigate("/home");
  };

  return (
    <>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "500px" }}>
        <h3 className="text-center mb-4">Sign Up</h3>
        <form onSubmit={handleSignUp}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            Already have an account? <a className="text-danger " style={{ cursor: "pointer" }} onClick={()=>{navigate("/login")}}>Login</a>
          </small>
        </div>

        {/* Social sign up buttons */}
        <div className="d-flex flex-column align-items-center mt-4">
          <button onClick={handleGoogleSignUp} className="btn btn-danger w-100 mb-2">
            Sign Up with Google
          </button>
          <button onClick={handleGithubSignUp} className="btn btn-dark w-100 mb-2">
            Sign Up with GitHub
          </button>
          <button onClick={handleFacebookSignUp} className="btn btn-primary w-100">
            Sign Up with Facebook
          </button>
        </div>
      </div>
    </div>
    {/* footer */}
    <Footer/>
    </>
  );
}

export default SignUp;
