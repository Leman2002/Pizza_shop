import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg'
import { Sidebar } from "../Sidebar";
import {
  Nav,
  NavLink,
  NavIcon,
  Bars,
  Cart,
  Products,
  Home,
  ProductQuantities,
  LogoutButton,
  LoginWithGoogle,
  GoogleLogo,
} from "./NavbarElements";
import ReactTooltip from "react-tooltip";

import Modal from "react-modal";
const Navbar = () => {
  const { totalQuantities } = useSelector((state) => state.CartReducer);
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setOpenModal] = useState(false);

  // const [userProfile, setUserProfile] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserReducer);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    }
    // return () => {};
  }, [dispatch]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };



  const customStyles = {
    content: {
      border: "none",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }

  return (
    <Nav>
      <NavLink to="/">
          <img src={logo} alt="" />
      </NavLink>

      <NavIcon>
        <Link to="/">
          {" "}
          <Home data-tip="Home" />
          <ReactTooltip place="bottom" type="dark" effect="solid" />
        </Link>

        <Link to="/products">
          {" "}
          <Products data-tip="Products" />
          <ReactTooltip place="bottom" type="dark" effect="solid" />
        </Link>
        <Link to="/cart">
          {" "}
          <Cart data-tip="Cart" />
          <ReactTooltip place="bottom" type="dark" effect="solid" />
          <ProductQuantities data-tip="Cart">
            {totalQuantities}
          </ProductQuantities>
          <ReactTooltip place="bottom" type="dark" effect="solid" />
        </Link>

        <Bars onClick={toggle} data-tip="Menu" data-for="menu" />
        <ReactTooltip place="bottom" type="dark" id="menu" effect="solid" />
        {user ? (
          <div>
            {/* <h3 >{user.displayName}</h3> */}

            <img
              data-tip="Logout"
              data-for="logout"
              onClick={openModal}
              src={user.photoURL}
              alt=""
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
            <ReactTooltip
              id="logout"
              place="bottom"
              type="dark"
              effect="solid"
            />
          </div>
        ) : (
          ""
        )}
        
      </NavIcon>
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        style={{ fontWeight: "400 !important" }}
      />
    </Nav>
  );
};

export default Navbar;
