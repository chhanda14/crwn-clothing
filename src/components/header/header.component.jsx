import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// import "./header.styles.scss";

import styles from "./header.module.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectcartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = ({ currentUser, hidden }) => (
  <div className={styles.header}>
    <div></div>
    <Link className={styles.logo} to="/">
      <Logo className="logo" />
    </Link>
    <div className={styles.options}>
      <Link className={styles.option} to="/shop">
        SHOP
      </Link>
      <Link className={styles.option} to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className={styles.option} onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className={styles.option} to="/signin">
          Sign In
        </Link>
      )}

      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectcartHidden,
});

export default connect(mapStateToProps)(Header);
