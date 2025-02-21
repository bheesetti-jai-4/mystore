import not404 from "/notfound/4042.jpg";

function NotFound() {
  return (
    <div className="text-center mt-4">
      <h1 className="text-danger">404 - Not Found</h1>
      <img src={not404} alt="Not Found" style={{ width: "30rem" ,height: "30rem" }} />
    </div>
  );
}

export default NotFound;
