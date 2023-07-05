import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import cardiogram from "../assets/cardiogram.png"
import styles from "../styles/NavBar.module.css";
import NavLink from "react-router-dom/NavLink";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      //console.log(err);
    }
  };

  const addPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/posts/create"
    >
      <i className="far fa-plus-square"></i>New post
    </NavLink>
  );

  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/feed"
      >
        <i className="fas fa-stream"></i>Feed
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/liked"
      >
        <i className="fas fa-heart"></i>Liked
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/moods"
      >
        <i className="fa-sharp fa-solid fa-masks-theater"></i>Moods
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={cardiogram} alt="logo" height="70" className="d-inline" />
            <h2 className={`d-none d-sm-inline ${styles.BrandName}`}><b>B</b>eat<b>B</b>uddies</h2>

          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fas fa-home"></i>Home
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;