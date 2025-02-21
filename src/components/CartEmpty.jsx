import { Link } from "react-router-dom";

function CartEmpty() {
  return (
    <div className="container text-center mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/102/102661.png" // Empty cart image
            alt="Empty Cart"
            className="img-fluid mb-3"
            style={{ maxWidth: "150px" }}
          />
          <h2 className="text-danger">Your Cart is Empty</h2>
          <p className="text-muted">Looks like you haven&lsquo;t added anything yet.</p>
          <Link to="/" className="btn btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartEmpty;
