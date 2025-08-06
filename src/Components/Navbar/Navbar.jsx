import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import sun from "../../assets/brightness-high-fill.svg";
import moon from "../../assets/moon-stars-fill.svg";
import cartIcon from "../../assets/cart2.svg";
import "../Navbar/Navbar.css";
import { myContext } from "../../Pages/Context/ContextProvider/ContextMain";

function Navbar() {
  const { theme, setTheme, cart } = useContext(myContext);

  const handelTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    <div className="main">
      <header className="position-sticky top-0 ">
        <nav
          className="navbar navbar-expand-lg "
          style={{
            backgroundColor: theme == "light" ? "#DCDCDC" : "#232323",
          }}
        >
          <div className="container-fluid">
            <Link
              className="navbar-brand"
              to={"/"}
              style={{ color: theme == "light" ? "" : "white" }}
            >
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/"}
                    style={{ color: theme == "light" ? "" : "white" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={"/products"}
                    style={{ color: theme == "light" ? "" : "white" }}
                  >
                    Products
                  </Link>
                </li>
              </ul>
              <Link to="/cart">
                <div
                  className="d-flex mx-4 px-1 align-items-center rounded"
                  style={{
                    backgroundColor: theme == "light" ? "" : "gray",
                    color: theme == "light" ? "" : "white",
                  }}
                >
                  <img src={cartIcon} alt="" />
                  <p className="bg-danger px-1 rounded ms-1">{cart.length} </p>
                </div>
              </Link>
              <div className="d-flex w-100 mx-3 align-items-center">
                <input
                  className="form-control w-50"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  style={{ color: theme == "light" ? "" : "white" }}
                >
                  Search
                </button>
              </div>
              <button
                className="btn m-1"
                onClick={handelTheme}
                style={{
                  backgroundColor: theme == "light" ? "darkgray" : "white",
                }}
              >
                <img src={theme == "light" ? moon : sun} alt="" />
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default Navbar;
