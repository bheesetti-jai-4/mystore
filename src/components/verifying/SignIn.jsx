


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";


// function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const [number,setnumber] = useState(3)

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if(number === 0){
//       alert("Username : system@gmail.com \n Password : system")
//       setnumber(3)
//       return
//     }

//     // Dummy validation (Replace with actual authentication logic)
//     if (email === "system@gmail.com" && password === "system") {

//       alert("Login Successful!");
//       navigate("/home"); // Redirect to home page
//     } else {
//       setnumber((val) => val-1 )
//       alert(`Invalid Credentials ==  ${number} Left `);

//     }
//   };

//   // Dummy functions for social login buttons
//   const handleGoogleLogin = () => {
//     alert("Google Login Successful! (Dummy)");
//     navigate("/home");
//   };

//   const handleGithubLogin = () => {
//     alert("GitHub Login Successful! (Dummy)");
//     navigate("/home");
//   };

//   const handleFacebookLogin = () => {
//     alert("Facebook Login Successful! (Dummy)");
//     navigate("/home");
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="card p-4 shadow-lg" style={{ width: "500px" }}>
//         <h3 className="text-center mb-4">Login</h3>
//         <form onSubmit={handleLogin}>
//           <div className="mb-3">
//             <label className="form-label">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary w-100">
//             Login
//           </button>
//         </form>

//         <div className="text-center mt-3">
//           <small>
//             Don&#39;t have an account? <a className="text-danger " style={{ cursor: "pointer" }} onClick={()=>navigate("/signup")} >Sign Up</a>
//           </small>
//         </div>

//         {/* Social login buttons */}
//         <div className="d-flex flex-column align-items-center mt-4">
//           <button onClick={handleGoogleLogin} className="btn btn-danger w-100 mb-2">
//             Login with Google
//           </button>
//           <button onClick={handleGithubLogin} className="btn btn-dark w-100 mb-2">
//             Login with GitHub
//           </button>
//           <button onClick={handleFacebookLogin} className="btn btn-primary w-100">
//             Login with Facebook
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignIn;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { login, logout } from "../store"; // Import Redux actions
import "bootstrap/dist/css/bootstrap.min.css";
import { login, logout } from "../../Store/AllStore";
import Footer from "../Footer";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isauthenicate);
  const username = useSelector((state) => state.auth.user);
  
  const [number,setnumber] = useState(3)

  const handleLogin = (e) => {
    e.preventDefault();
    if(number === 0){
            alert("Username : system@gmail.com \n Password : system")
            setnumber(3)
            return
      }

    if (email === "system@gmail.com" && password === "system") {
      dispatch(login(email)); // Save user in Redux and localStorage
      alert("Login Successful!");
      navigate("/home"); // Redirect to home
    } else {
      setnumber((val) => val-1 )
      alert(`Invalid Credentials ==  ${number} Left `);

    }
  };

  const handleLogout = () => {
    dispatch(logout()); // Clear user from Redux and localStorage
    alert("Logged Out!");
    navigate("/login");
  };

  return (
    <>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "500px" }}>
        <h3 className="text-center mb-4">
          {isAuthenticated ? `Welcome, ${username}` : "Login"}
        </h3>

        {isAuthenticated ? (
          <button onClick={handleLogout} className="btn btn-danger w-100">
            Logout
          </button>
        ) : (
          <>
            <form onSubmit={handleLogin}>
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
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>

            <div className="text-center mt-3">
              <small>
                Don&#39;t have an account?{" "}
                <a
                  className="text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </a>
              </small>
            </div>
          </>
        )}
      </div>
    </div>
    {/* footer */}
    <Footer/>
    </>
  );
}

export default SignIn;

