import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Account() {
  const navigate = useNavigate();
  
  const isAuthenticated = useSelector((state) => state.auth.isauthenicate);
  const username = useSelector((state) => state.auth.user);

  return (
    <>
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-primary text-center mb-4">Account Details  {isAuthenticated ? `Welcome =>  ${username}` : "Login"} </h2>


        <div className="row text-center">
          {/* Orders Section */}
          <div className="col-md-6 mt-3">
            <div className="card p-3 shadow-sm">
              <h5 className="text-dark">📦 Your Orders</h5>
              <p className="text-muted">Check and manage your past purchases</p>
              <button className="btn btn-dark w-100" onClick={() => navigate("/order")}>
                View Orders
              </button>
            </div>
          </div>

          {/* Coupons Section */}
          <div className="col-md-6 mt-3">
            <div className="card p-3 shadow-sm">
              <h5 className="text-dark">🎟 Coupon Details</h5>
              <p className="text-muted">Find the latest discounts & offers</p>
              <button className="btn btn-primary w-100" onClick={() => navigate("/coupon")}>
                View Coupons
              </button>
            </div>
          </div>
           {/* Coupons Section */}
           <div className="col-md-6 mt-3">
            <div className="card p-3 shadow-sm">
              <h5 className="text-dark">📞  Contact Details</h5>
              <p className="text-muted">Enter your contact details</p>
              <button className="btn btn-danger w-100" onClick={() => navigate("/contact")}>
                View Coupons
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    {/* footer */}
    <Footer/>
    </>
  );
}

export default Account;
