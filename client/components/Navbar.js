import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../app/store';



const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const cartItemsCount = useSelector((state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0)
);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/home");
  };
  const checkCart = () => {
    navigate("/cart");
  };

  return (
    <div>
      <h1 id="title">Leeroy Jenkins Phone-Matics: LET'S DO THIS!</h1>
      <img
              src="https://images.nightcafe.studio/jobs/4VNesd1DbkFxnBkR4hq4/4VNesd1DbkFxnBkR4hq4--1--30i6d.jpg?tr=w-1600,c-at_max"
              id="corner-pic"
              alt="example"
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                width: "220px",
                height: "241px",
              }}
            />
      <nav>
        {isLoggedIn ? (
          <div className="navbar-container">
            <div id="div-nav-links">
              <Link to="/home">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/real-estate-app-2140409-1800656.png"
                    alt="Home"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <span>Home</span>
                </div>
              </Link>
              <Link to="/cart" onClick={() => navigate("/cart")}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/mobile-shopping-2363647-1972214.png"
                    alt="Cart"
                    style={{ width: "50px", height: "50px" }}
                  />
                  {cartItemsCount > 0 && <span>{cartItemsCount}</span>}
                  <span>View Cart</span>
                </div>
              </Link>
                <Link className="logout-button" onClick={logoutAndRedirectHome}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="https://cdn.iconscout.com/icon/premium/png-256-thumb/logout-mobile-4016691-3320991.png"
                      alt="logout"
                      style={{ width: "50px", height: "50px" }}
                    />
                    {cartItemsCount > 0 && <span>{cartItemsCount}</span>}
                    <span>Log Out</span>
                  </div>
                </Link>
            </div>
            <p id="navbar-title">
              {" "}
              Get all the newest and retro classic phones here, ya Jenkins
            </p>
          </div>
        ) : (
          <div className="navbar-container">
            <div id="div-nav-links">
              {/* The navbar will show these links before you log in */}
              <Link to="/home">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/real-estate-app-2140409-1800656.png"
                    alt="Home"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <span>Home</span>
                </div>
              </Link>
              <Link to="/login">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://static.thenounproject.com/png/1027948-200.png"
                    alt="Login"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <span>Login</span>
                </div>
              </Link>
              <Link to="/signup">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/smartphone-3001887-2496252.png"
                    alt="Sign Up"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <span>Sign Up</span>
                </div>
              </Link>
              <Link to="/cart" onClick={() => navigate("/cart")}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/mobile-shopping-2363647-1972214.png"
                    alt="Cart"
                    style={{ width: "50px", height: "50px" }}
                  />
                  {cartItemsCount > 0 && <span>{cartItemsCount}</span>}
                  <span>View Cart</span>
                </div>
              </Link>
            </div>
            <p id="navbar-title">
              Get all the newest and retro classic phones here, ya Jenkins
            </p>
            <img
              src="https://images.nightcafe.studio/jobs/4VNesd1DbkFxnBkR4hq4/4VNesd1DbkFxnBkR4hq4--1--30i6d.jpg?tr=w-1600,c-at_max"
              id="corner-pic"
              alt="example"
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                width: "220px",
                height: "241px",
              }}
            />
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
