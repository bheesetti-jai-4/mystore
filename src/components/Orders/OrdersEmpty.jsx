import { Link } from "react-router-dom";

function OrdersEmpty() {
  return (
    <div className="container text-center mt-5  ">
      <div className="row justify-content-center">
        <div className="col-md-6  ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" // Placeholder for empty orders
            alt="No Orders"
            className="img-fluid mb-3"
            style={{ maxWidth: "150px" }}
          />
          <h2 className="text-danger">No Orders Found</h2>
          <p className="text-muted">Looks like you haven’t placed any orders yet.</p>
          <Link to="/" className="btn btn-primary">
            Start Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrdersEmpty;
