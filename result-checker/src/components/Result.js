import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "./Result.css";

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
    // <body>
    //   <div classNameName="dash">
    //     <div classNameName="main">
    //       <div classNameName="main__col-1">
    //         <div>
    //           <h2 classNameName="main__heading">
    //             <span classNameName="span-head">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="#fff"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   stroke-width="2"
    //                   d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    //                 />
    //               </svg>
    //             </span>{" "}
    //             Abubaker Saeed
    //           </h2>
    //           <p classNameName="main__desc">
    //             At Redeemer's university, we have lot of events that take lace
    //             on Redeemer's University campus.
    //           </p>
    //           <p classNameName="main__sub">
    //             <span>Profile Collaborators:</span>{" "}
    //             <span>Cloud Strife & Jack Sparrow</span>
    //           </p>
    //         </div>

    //         <div classNameName="main__list-heading-wrap">
    //           <h2 classNameName="main__list-heading ss-heading">Recently Visit</h2>
    //           <a href="#" classNameName="ss-show">
    //             show all
    //           </a>
    //         </div>

    //         <ul classNameName="main__list">
    //           <li classNameName="main__list-item">
    //             <div>
    //               <p classNameName="main__list-content">Center Point</p>
    //             </div>
    //           </li>

    //           <li classNameName="main__list-item">
    //             <div classNameName="main__list-content-wrap">
    //               <p classNameName="main__list-content">Masmak Fortress</p>
    //               <p classNameName="main__list-sub">My Favorite</p>
    //             </div>
    //           </li>

    //           <li classNameName="main__list-item">
    //             <div classNameName="main__list-item-image">
    //               <img
    //                 src="https://images.unsplash.com/photo-1470218091926-22a08a325802?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=40"
    //                 alt="dd"
    //               />
    //             </div>
    //             <div classNameName="main__list-content-wrap">
    //               <p classNameName="main__list-content">Wadi Namar Waterfall</p>
    //               <p classNameName="main__list-sub">Relaxing</p>
    //             </div>
    //           </li>

    //           <li classNameName="main__list-item">
    //             <div classNameName="main__list-content-wrap">
    //               <p classNameName="main__list-content">Wadi Hanifah</p>
    //               <p classNameName="main__list-sub">At Last</p>
    //             </div>
    //           </li>

    //           <li classNameName="main__list-item">
    //             <div classNameName="main__list-content-wrap">
    //               <p classNameName="main__list-content">Heet Cave</p>
    //               <p classNameName="main__list-sub">Loved</p>
    //             </div>
    //           </li>

    //           <li classNameName="main__list-item">
    //             <div classNameName="main__list-item-image">
    //               <img
    //                 src="https://images.unsplash.com/photo-1575279146056-963c4a35627b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=40"
    //                 alt="tt"
    //               />
    //             </div>
    //             <div classNameName="main__list-content-wrap">
    //               <p classNameName="main__list-content">
    //                 Janadriyah Cultural & Heritage Festival
    //               </p>
    //               <p classNameName="main__list-sub">Cold</p>
    //             </div>
    //           </li>
    //         </ul>
    //       </div>

    //       <div classNameName="main__col-2">
    //         <div classNameName="main__cards-container">
    //           <div classNameName="main__cards-container-heading-wrap">
    //             <h2 classNameName="main__cards-container-heading ss-heading">
    //               Traveling Plans
    //             </h2>
    //             <a href="#" classNameName="ss-show">
    //               show all
    //             </a>
    //           </div>

    //           <ul classNameName="main__cards">
    //             <li classNameName="main__card">
    //               <div classNameName="main__card-image-container">
    //                 <img
    //                   src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=140&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=220"
    //                   alt="qwe"
    //                   classNameName="main__card-image"
    //                 />
    //               </div>
    //               <h3 classNameName="main__card-heading">Daman-e-Koh</h3>
    //               <p classNameName="main__card-heading-sub">Pakistan</p>
    //               <p classNameName="main__card-heading-type">Visit</p>
    //             </li>

    //             <li
    //               classNameName="main__card"
    //               // style="--hue: 250"
    //             >
    //               <div classNameName="main__card-image-container">
    //                 <img
    //                   src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=140&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=220"
    //                   alt="qw"
    //                   classNameName="main__card-image"
    //                 />
    //               </div>
    //               <h3 classNameName="main__card-heading">Mahodand Lake</h3>
    //               <p classNameName="main__card-heading-sub">Pakistan</p>
    //               <p classNameName="main__card-heading-type">Visit</p>
    //             </li>

    //             <li
    //               classNameName="main__card"
    //               // style="--hue: 231;"
    //             >
    //               <div classNameName="main__card-image-container">
    //                 <img
    //                   src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=140&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=220"
    //                   alt="err"
    //                   classNameName="main__card-image"
    //                 />
    //               </div>
    //               <h3 classNameName="main__card-heading">London</h3>
    //               <p classNameName="main__card-heading-sub">England</p>
    //               <p classNameName="main__card-heading-type">Work</p>
    //             </li>
    //           </ul>

    //           <div classNameName="main__cards-pagination">
    //             <span classNameName="ss-dots">
    //               <span></span>
    //               <span></span>
    //               <span></span>
    //             </span>
    //             <div classNameName="main__cards-buttons">
    //               <button classNameName="btn">
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   stroke="currentColor"
    //                 >
    //                   <path
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     d="M15 19l-7-7 7-7"
    //                   />
    //                 </svg>
    //               </button>
    //               <button>
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   stroke="currentColor"
    //                 >
    //                   <path
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     d="M9 5l7 7-7 7"
    //                   />
    //                 </svg>
    //               </button>
    //             </div>
    //           </div>
    //         </div>

    //         <div classNameName="main__crossing-container">
    //           <div classNameName="main__crossing-image">
    //             <img
    //               src="https://images.unsplash.com/photo-1595064085577-7c2ef98ec311?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=70&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=70"
    //               alt="rre"
    //             />
    //           </div>
    //           <div classNameName="main__crossing-current">
    //             <p classNameName="main__crossing-upper">Now crossing</p>
    //             <h3 classNameName="main__crossing-heading">Center Point</h3>
    //           </div>
    //         </div>

    //         <div classNameName="main__discover">
    //           <div classNameName="main__discover-heading-container">
    //             <h3 classNameName="main__discover-heading ss-heading">
    //               Discover More Places
    //             </h3>
    //             <a href="#" classNameName="ss-show">
    //               show all
    //             </a>
    //           </div>

    //           <ul classNameName="main__discover-places">
    //             {result.map((res) => (
    //               <li classNameName="main__discover-place">
    //                 <h4 classNameName="main__discover-place-heading">
    //                   {res.courseCode}
    //                 </h4>
    //                 <p classNameName="main__discover-place-sub">{res.Grade}</p>
    //                 <div classNameName="main__discover__more">
    //                   <div classNameName="main__discover__more-svg">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 24 24"
    //                     >
    //                       <defs>
    //                         <linearGradient
    //                           id="myGradient1"
    //                           gradientTransform="rotate(20)"
    //                         >
    //                           <stop offset="0%" stop-color="hsl(0, 60%, 50%)" />
    //                           <stop
    //                             offset="50%"
    //                             stop-color="hsl(20, 60%, 50%)"
    //                           />
    //                         </linearGradient>
    //                       </defs>
    //                       <path
    //                         d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
    //                         fill="url(#myGradient1)"
    //                       />
    //                     </svg>
    //                   </div>
    //                   <span classNameName="ss-dots">
    //                     <span></span>
    //                     <span></span>
    //                     <span></span>
    //                   </span>
    //                 </div>
    //               </li>
    //             ))}

    //             <div classNameName="main__discover-right">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   stroke-width="2"
    //                   d="M9 5l7 7-7 7"
    //                 />
    //               </svg>
    //             </div>
    //           </ul>
    //         </div>

    //         <footer classNameName="main__footer">
    //           <a href="#" classNameName="main__footer-more ss-show">
    //             ...more{" "}
    //             <span>
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   stroke-width="2"
    //                   d="M19 9l-7 7-7-7"
    //                 />
    //               </svg>
    //             </span>
    //           </a>

    //           <div classNameName="main__info">
    //             <a
    //               href="https://twitter.com/AbubakerSaeed96/status/1329417170368016385"
    //               target="_blank"
    //               rel="noreferrer noopener"
    //               classNameName="main__info-link"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="24"
    //                 height="24"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 classNameName="feather feather-twitter"
    //               >
    //                 <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    //               </svg>
    //             </a>
    //             <a
    //               href="https://github.com/AbubakerSaeed/dashboard-ui-n20"
    //               target="_blank"
    //               rel="noreferrer noopener"
    //               classNameName="main__info-link"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="24"
    //                 height="24"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 classNameName="feather feather-github"
    //               >
    //                 <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    //               </svg>
    //             </a>
    //             <a
    //               href="https://dribbble.com/shots/14615615-Dashboard-UI"
    //               target="_blank"
    //               rel="noreferrer noopener"
    //               classNameName="main__info-link"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="24"
    //                 height="24"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 classNameName="feather feather-dribbble"
    //               >
    //                 <circle cx="12" cy="12" r="10"></circle>
    //                 <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
    //               </svg>
    //             </a>

    //             <p classNameName="main__cp">
    //               Copyright &copy;{" "}
    //               <a
    //                 href="https://twitter.com/AbubakerSaeed96"
    //                 target="_blank"
    //                 rel="noreferrer noopener"
    //                 classNameName="main__info-link"
    //               >
    //                 Abubaker Saeed.
    //               </a>
    //             </p>

    //             <p classNameName="main__cr">
    //               <a
    //                 href="https://colorpick.vercel.app"
    //                 target="_blank"
    //                 rel="noreferrer noopener"
    //               >
    //                 <img
    //                   src="https://colorpick.vercel.app/assets/white-with-name.png"
    //                   alt=""
    //                   height="50rem"
    //                 />
    //               </a>
    //             </p>
    //           </div>
    //         </footer>
    //       </div>
    //     </div>
    //   </div>
    // </body>

    <div>
      <div id="root">
        <div className="container pt-5">
          <div className="row align-items-stretch">
            {result.map((res) => (
              <div className="c-dashboardInfo col-lg-3 col-md-6">
                <div className="wrap">
                  <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                    {res.courseCode}
                    <svg
                      className="MuiSvgIcon-root-19"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      role="presentation"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                    </svg>
                  </h4>
                  <span className="hind-font caption-12 c-dashboardInfo__count">
                    {res.Grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
