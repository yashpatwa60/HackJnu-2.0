import React from "react";
import Rocket from '../../assets/img/rocket.svg'
import Logo from '../../assets/img/logo.jpeg'

export default function Header() {
  return (
    <header className="masthead text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <div className="row mt-5 ">
          <div className="col-md-4"></div>
          <div className="col-md-5">
            <img src={Logo} align="center" className="img-fluid" alt="..." />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-2">
            <img src={Rocket}  alt="..." />
          </div>
          <div className="col-md-6 mt-5">
            <div className="mt-5">
              <h4 className="text-white text-center mt-5">
                HackRx is the Annual Hackathon hosted by Bajaj Finserv where you
                get a stage for competing against the brightest of geeks, while
                being mentored by top leaders from the industry for developing
                solutions that matter!
              </h4>
              <div className="typewriter mt-5">
                <h2>Welcome To HackJnu 2.0&nbsp;&nbsp;&nbsp;&nbsp;</h2>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-5"
          style={{ marginRight: 20 + "px", marginLeft: 20 + "px" }}
        ></div>
        <div className="mt-2 mt-md-3" data-aos="zoom-out">
          <a target="_blank" href="https://www.surveymonkey.com/r/hackrx_reg">
            <button type="button" className="btn registerBtn">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-1">
                  <h2>1.</h2>
                </div>
                <div className="col">Register for HackRx 2.0</div>
              </div>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
