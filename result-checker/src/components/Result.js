import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "./Result.css";
// import profile_image from "../images/prof.png";

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
          <img src="prof.png" className="mobile_profile_image" alt="" />
          <i className="fa fa-bars nav_btn"></i>
        </div>
        <div className="mobile_nav_items">
          <a href="/">
            <i className="fas fa-desktop"></i>
            <span>Dashboard</span>
          </a>
          <a href="/">
            <i className="fas fa-cogs"></i>
            <span>Timetable</span>
          </a>
          <a href="/">
            <i className="fas fa-table"></i>
            <span>Assignments</span>
          </a>
          <a href="/">
            <i className="fas fa-th"></i>
            <span>Forms</span>
          </a>
          <a href="/">
            <i className="fas fa-info-circle"></i>
            <span>Departmental News</span>
          </a>
          <a href="/">
            <i className="fas fa-sliders-h"></i>
            <span>Settings</span>
          </a>
        </div>
      </div>

      <div className="sidebar">
        <div className="profile_info">
          <img 
          src="prof.png"
          className="profile_image" alt="" />
          <h4>Jessica</h4>
        </div>
        <a href="/">
          <i className="fas fa-desktop"></i>
          <span>Dashboard</span>
        </a>
        <a href="/">
          <i className="fas fa-cogs"></i>
          <span>Announcement</span>
        </a>
        <a href="/">
          <i className="fas fa-table"></i>
          <span>TimeTable</span>
        </a>
        <a href="/">
          <i className="fas fa-th"></i>
          <span>Forms</span>
        </a>
        <a href="/">
          <i className="fas fa-info-circle"></i>
          <span>Assignments</span>
        </a>
        <a href="/">
          <i className="fas fa-sliders-h"></i>
          <span>Settings</span>
        </a>
      </div>

      <div className="content">
        <div className="semester">
          <span className="semester-desc">
            Semester: <span className="gpa">Harmattan</span>
          </span>
          <span className="semester-desc">
            Level: <span className="gpa">400</span>
          </span>
          <span className="semester-desc">
            CGPA: <span className="gpa">3.62</span>
          </span>
        </div>

        <table>
          <thead>
            <tr>
              {" "}
              <th>S/N</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Grade</th>
              <th>Raw Score</th>
            </tr>
          </thead>
          {result.map((res) => (
            <tbody>
              <tr>
                <td className="serial">{res.id}</td>
                <td>{res.courseCode}</td>
                <td>{res.courseTitle}</td>
                <td>{res.Grade}</td>
                <td>{res.rawScore}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </React.Fragment>
  );
}

export default Result;
