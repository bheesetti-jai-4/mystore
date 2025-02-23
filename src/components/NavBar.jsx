import "../Allcssfiles/NavBar.css"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Store/AllStore";
import { useState } from "react";

function NavBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products);
  const cartData = useSelector((state) => state.cart);
  
  const totalCart = cartData.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const isAuthenticated = useSelector((state) => state.auth.isauthenicate);

  const allItems = [
    ...(Array.isArray(allProducts.mobiles) ? allProducts.mobiles : []),
    ...(Array.isArray(allProducts.mensfashion) ? allProducts.mensfashion : []),
    ...(Array.isArray(allProducts.womensfashion) ? allProducts.womensfashion : []),
    ...(Array.isArray(allProducts.kidsfashion) ? allProducts.kidsfashion : []),
    ...(Array.isArray(allProducts.electronics) ? allProducts.electronics : []),
    ...(Array.isArray(allProducts.furnitures) ? allProducts.furnitures : []),
    ...(Array.isArray(allProducts.tops) ? allProducts.tops : []),
  ];

  const filterProducts = allItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-light" onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
          MyStore
        </a>

        {/* Mobile Toggle Button - Fixing the Button Issue */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="search-container position-relative w-50 mx-auto">
            <form className="d-flex">
              <input
                type="text"
                placeholder="Search products, brands & more..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-control me-2"
                aria-label="Search"
              />
              <button type="button" className="btn btn-outline-success">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>

            {search && (
              <div className="search-results position-absolute bg-white w-100 p-2 rounded shadow mt-1">
                {filterProducts.length > 0 ? (
                  filterProducts.map((data, index) => (
                    <p key={index} className="m-1">{data.name}</p>
                  ))
                ) : (
                  <p className="m-1 text-danger">No results found</p>
                )}
              </div>
            )}
          </div>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <a className="nav-link text-light" onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
                <FontAwesomeIcon icon={faHouse} /> Home
              </a>
            </li>
            <li className="nav-item mx-2 position-relative">
              <a className="nav-link text-light" onClick={() => navigate("/cart")} style={{ cursor: "pointer" }}>
                <FontAwesomeIcon icon={faCartShopping} /> Cart
                {totalCart > 0 && <span className="badge bg-danger ms-1">{totalCart}</span>}
              </a>
            </li>

            {isAuthenticated ? (
              <li className="nav-item mx-2">
                <a className="nav-link text-light" onClick={() => { dispatch(logout()); alert("You have logged out"); }} style={{ cursor: "pointer" }}>
                  <FontAwesomeIcon icon={faUser} /> Logout
                </a>
              </li>
            ) : (
              <li className="nav-item mx-2">
                <a className="nav-link text-light" onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
                  <FontAwesomeIcon icon={faUser} /> Login
                </a>
              </li>
            )}

            <li className="nav-item mx-2">
              <a className="nav-link text-light" onClick={() => navigate("/account")} style={{ cursor: "pointer" }}>
                <FontAwesomeIcon icon={faUser} /> Account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
