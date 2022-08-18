import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Adminprofile.css";

const AdminProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const proff = currentUser.proffession;
  const proff2 = proff.toString(", ");

  return (
    <>
      <div id="card">
        <img
          alt="user"
          id="userImage"
          src="https://xsgames.co/randomusers/assets/avatars/pixel/48.jpg"
        ></img>
        <i className="fa fa-gamepad" id="badge"></i>
        <h4 id="playerName">{currentUser.username}</h4>
        <div id="states">
          <ul id="info">
            <li>Full name</li>
            <li>Contact</li>
            <li>Address</li>
            <li>Adhar num.</li>
            <li>Sallary Aspect</li>
            <li>Current Employment</li>
            <li>Proffession</li>
            <li>Role</li>
          </ul>
          <ul id="values">
            <li>
              {currentUser.firstname} {currentUser.lastname}
            </li>
            <li>+91-{currentUser.number}</li>
            <li>{currentUser.address}</li>
            <li>{currentUser.adharnum}</li>
            <li>{currentUser.Sallaryaspect}</li>
            <li>{currentUser.employment}</li>
            <li>{proff2}</li>
            <li>{currentUser.role}</li>
          </ul>
        </div>
        <Link
          id="contactBtn"
          to="/Admin-Edit"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Edit
        </Link>
      </div>
    </>
  );
};

export default AdminProfile;
