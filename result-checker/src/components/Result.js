import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "./Result.css";
import profile_image from "../images/prof.png";

function Result() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    //   fetch initial data - but it's protected! Use axiosWithAuth to send the token on the header of the request

    axiosWithAuth()
      .get(`/result`)
      .then((response) => {
        console.log(`JUJU`, response.data);
        setResult(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // ☝️ The empty dependency array prevents infinite loops
  // It fires the effect hook on the first component mount
  console.log(result);

  return (
    <React.Fragment>
      <header>
        <label for="check">
          <i className="fas fa-bars" id="sidebar_btn"></i>
        </label>
        <div className="left_area">
          <h3>
            Student <span>Portal</span>
          </h3>
        </div>
        <div className="right_area">
          <a href="/" className="logout_btn">
            Logout
          </a>
        </div>
      </header>

      <div className="mobile_nav">
        <div className="nav_bar">
          <img
            src={profile_image}
            className="mobile_profile_image"
            alt=""
          />
          <i className="fa fa-bars nav_btn"></i>
        </div>
        <div className="mobile_nav_items">
         <a href="/">
            <i className="fas fa-desktop"></i>
            <span>Dashboard</span>
          </a>
         <a href="/">
            <i className="fas fa-cogs"></i>
            <span>Components</span>
          </a>
         <a href="/">
            <i className="fas fa-table"></i>
            <span>Tables</span>
          </a>
         <a href="/">
            <i className="fas fa-th"></i>
            <span>Forms</span>
          </a>
         <a href="/">
            <i className="fas fa-info-circle"></i>
            <span>About</span>
          </a>
         <a href="/">
            <i className="fas fa-sliders-h"></i>
            <span>Settings</span>
          </a>
        </div>
      </div>

      <div className="sidebar">
        <div className="profile_info">
          <img src={profile_image} className="profile_image" alt="" />
          <h4>Jessica</h4>
        </div>
       <a href="/">
          <i className="fas fa-desktop"></i>
          <span>Dashboard</span>
        </a>
       <a href="/">
          <i className="fas fa-cogs"></i>
          <span>Components</span>
        </a>
       <a href="/">
          <i className="fas fa-table"></i>
          <span>Tables</span>
        </a>
       <a href="/">
          <i className="fas fa-th"></i>
          <span>Forms</span>
        </a>
       <a href="/">
          <i className="fas fa-info-circle"></i>
          <span>About</span>
        </a>
       <a href="/">
          <i className="fas fa-sliders-h"></i>
          <span>Settings</span>
        </a>
      </div>

      <div className="content">
        {result.map((res) => (
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2 className="course">Course:{res.courseCode}</h2>
              </div>
              <div className="flip-card-back">
                <h1 className="grade">Grade:{res.Grade}</h1>
                <p className="score">Raw Score:{res.rawScore}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Result;
