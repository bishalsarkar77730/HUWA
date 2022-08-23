import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlecontact = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/contactus", {
        name,
        email,
        message,
      });
      alert(res.data.message)
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="Homepage">
        <header id="welcome-section">
          <div className="forest" />
          <div className="silhouette" />
          <div className="moon" />
          <div className="container">
            <h1>
              <span className="line">Huwa -- We Take</span>
              <span className="line">Care of YOur Salary</span>
              <span className="line">
                <span className="color">&</span> Employment.
              </span>
            </h1>
          </div>
        </header>
        <section id="about">
          <div className="wrapper">
            <article>
              <div className="title">
                <h3>What We DO For You?</h3>
                <p className="separator" />
              </div>
              <div className="desc full">
                <h4 className="subtitle">We Are Huwa Family.</h4>
                <p>As a family we take care of you and Your Employment.</p>
                <p>
                  WE take care of your Salary. if any company is doing Fraud
                  with You and You are register with us as a family member We
                  will take action agains the Company and Do what ever and
                  recover your all your Money. and we will also Prove a good
                  assistence to get a Job With contacting Our Conected
                  Company's.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section id="contact">
          <div className="container">
            <div className="heading-wrapper">
              <div className="heading">
                <p className="title">
                  Want to <br />
                  contact me?
                </p>
                <p className="separator" />
                <p className="subtitle">Please, send an email to {""}</p>
              </div>
            </div>
            <form id="contact-form" action="#">
              <input
                className="homeContact"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
              />
              <input
                className="homeContact"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
              <textarea
                placeholder="Message"
                type="text"
                onChange={(e) => setMessage(e.target.value)}
              />
              <input className="button" onClick={handlecontact} type="submit" />
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
