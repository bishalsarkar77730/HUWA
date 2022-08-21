import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/Slices/userSlice";
import "./UserProfile.css";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to Delete Your Account")) {
      await axios.delete(`/user/${currentUser._id}`);
      await axios.post("/auth/signout");
      dispatch(logout());
      navigate("/signin");
    } else {
      alert("Cancel Deletion");
      navigate("/");
    }
  };

  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resdata = await axios.get(`/user/${currentUser._id}`);
        setUserdata(resdata.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentUser]);
  return (
    <>
      <div id="card">
        <img
          alt="user"
          id="userImage"
          src="https://xsgames.co/randomusers/assets/avatars/pixel/48.jpg"
        ></img>
        <i className="fa fa-gamepad" id="badge"></i>
        <h4 id="playerName">{userdata.username}</h4>
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
              {userdata.firstname} {userdata.lastname}
            </li>
            <li>+91-{userdata.number}</li>
            <li>{userdata.address}</li>
            <li>{userdata.adharnum}</li>
            <li>{userdata.Sallaryaspect}</li>
            <li>{userdata.employment}</li>
            <li>{userdata.proffession}</li>
            <li>{userdata.role}</li>
          </ul>
        </div>
        <div className="buttonss" style={{ display: "flex" }}>
          <Link
            id="contactBtn"
            to="/Edit-profile"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Edit
          </Link>
          <button id="contactBtn" onClick={handleDelete}>
            Delete Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
