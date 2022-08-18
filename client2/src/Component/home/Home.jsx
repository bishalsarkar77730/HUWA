import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
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
                WE take care of your Salary. if any company is doing Fraud with
                You and You are register with us as a family member We will take
                action agains the Company and Do what ever and recover your all
                your Money. and we will also Prove a good assistence to get a
                Job With contacting Our Conected Company's.
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
            <input placeholder="Name" name="name" type="text" required />
            <input placeholder="Email" name="email" type="email" required />
            <textarea placeholder="Message" type="text" name="message" />
            <input
              className="button"
              id="submit"
              value="Submit"
              type="submit"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
