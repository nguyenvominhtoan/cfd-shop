import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../config";
import { useAuthen } from "./AuthenContext";

const Header = () => {
  const { setIsAuthenModalOpen, isAuthenModalOpen, profileInfo, onLogOut } =
    useAuthen();
  console.log("first", profileInfo);
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-left">
            <a href="tel:0989596912">
              <i className="icon-phone" /> Hotline: 098 9596 912{" "}
            </a>
          </div>
          <div className="header-right">
            {/* Not LogIn */}
            {/* <ul className="top-menu top-link-menu">
              <li>
                <a
                  href="#signin-modal"
                  // data-toggle="modal"
                  // className="top-menu-login"
                  onClick={() => setIsAuthenModalOpen(true)}
                >
                  <i className="icon-user" />
                  {profileInfo?.name || profileInfo.email}
                </a>
              </li>
            </ul> */}
            {profileInfo.id ? (
              <ul class="top-menu">
                <li>
                  <a href="#" class="top-link-menu">
                    {profileInfo?.name || profileInfo.email}
                  </a>
                  <ul>
                    <li>
                      <ul>
                        <li>
                          <Link to={PATHS.DASHBOARD}>Account Details</Link>
                        </li>
                        <li>
                          <Link to={PATHS.DASHBOARD}>Your Orders</Link>
                        </li>
                        <li>
                          <Link to={PATHS.DASHBOARD}>
                            Wishlist <span>(3)</span>
                          </Link>
                        </li>
                        <li>
                          <a href="#" onClick={onLogOut}>
                            Sign Out
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            ) : (
              <ul className="top-menu top-link-menu">
                <li>
                  <a
                    href="#signin-modal"
                    // data-toggle="modal"
                    // className="top-menu-login"
                    onClick={() => setIsAuthenModalOpen(true)}
                  >
                    <i className="icon-user" />
                    Login & Register
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="header-middle sticky-header">
        <div className="container">
          <div className="header-left">
            <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars" />
            </button>
            <Link to={PATHS.HOME} className="logo">
              <img src="assets/images/logo.svg" alt="Molla Logo" width={160} />
            </Link>
          </div>
          <nav className="main-nav">
            <ul className="menu">
              <li className="active">
                <Link to={PATHS.HOME}>Home</Link>
              </li>
              <li>
                <Link to={PATHS.ABOUT}>About Us</Link>
              </li>
              <li>
                <Link to={PATHS.PRODUCT}>Product</Link>
              </li>
              <li>
                <Link to={PATHS.BLOG}>Blog</Link>
              </li>
              <li>
                <Link to={PATHS.CONTACT}>Contact Us</Link>
              </li>
            </ul>
          </nav>
          <div className="header-right">
            <div className="header-search">
              <a
                href="#"
                className="search-toggle"
                role="button"
                title="Search"
              >
                <i className="icon-search" />
              </a>
              <form action="#" method="get">
                <div className="header-search-wrapper">
                  <label htmlFor="q" className="sr-only">
                    Search
                  </label>
                  <input
                    type="search"
                    className="form-control"
                    name="q"
                    id="q"
                    placeholder="Search in..."
                    required
                  />
                </div>
              </form>
            </div>
            <div className="dropdown cart-dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                <i className="icon-shopping-cart" />
                <span className="cart-count">2</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-cart-products">
                  <div className="product">
                    <div className="product-cart-details">
                      <h4 className="product-title">
                        <a href="product-detail.html">Beige knitted</a>
                      </h4>
                      <span className="cart-product-info">
                        <span className="cart-product-qty">1</span> x $84.00{" "}
                      </span>
                    </div>
                    <figure className="product-image-container">
                      <a href="product-detail.html" className="product-image">
                        <img
                          src="assets/images/products/cart/product-1.jpg"
                          alt="product"
                        />
                      </a>
                    </figure>
                    <a href="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close" />
                    </a>
                  </div>
                  <div className="product">
                    <div className="product-cart-details">
                      <h4 className="product-title">
                        <a href="product-detail.html">Blue utility</a>
                      </h4>
                      <span className="cart-product-info">
                        <span className="cart-product-qty">1</span> x $76.00{" "}
                      </span>
                    </div>
                    <figure className="product-image-container">
                      <a href="product-detail.html" className="product-image">
                        <img
                          src="assets/images/products/cart/product-2.jpg"
                          alt="product"
                        />
                      </a>
                    </figure>
                    <a href="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close" />
                    </a>
                  </div>
                </div>
                <div className="dropdown-cart-total">
                  <span>Total</span>
                  <span className="cart-total-price">$160.00</span>
                </div>
                <div className="dropdown-cart-action">
                  <a href="cart.html" className="btn btn-primary">
                    View Cart
                  </a>
                  <a href="checkout.html" className="btn btn-outline-primary-2">
                    <span>Checkout</span>
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
