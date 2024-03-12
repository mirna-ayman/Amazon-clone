import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/GlobalContext";
import Logo from "../images/header-logo.png";
import searchIcon from "../images/icons/searchIcon.png";
import shoppingCart from "../images/icons/shopping-cart.png";
import { auth } from "../firebase";
import "./Header.css";

const Header = () => {
  const { user, basket } = useAuth();
  const handleAuthentication = () => {
    auth.signOut();
  };
  return (
    <div expand="lg" className="header">
      <div className="logo-div">
        <Link to="/">
          <img className="header-logo" src={Logo} alt="logo-img" />
        </Link>
      </div>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img className="header-searchIcon" src={searchIcon} alt="search-icon" />
      </div>
      <div className="header-nav">
        <Link className="logo" to={!user && "/login"}>
          <div className="header-option" onClick={handleAuthentication}>
            <span className="header-optionLineOne email">
              Hello {user ? `${user.email}` : "Guest"}
            </span>
            <span className="header-optionLineTwo email2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link className="logo" to={basket.length > 0 && "/payment"}>
          <div className="header-option">
            <span className="header-optionLineOne">Payment</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link className="logo" to={basket.length > 0 && "/checkout"}>
          <div className="header-optionBasket">
            <img className="image" src={shoppingCart} alt="" />
            <span className="header-optionLineTwo header-basketCount">
              {/* {basket?.length} */}
              {user ? basket.length : 0}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
