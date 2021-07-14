import React from "react";
import Rocket from '../../assets/img/rocket.svg'
import Logo from '../../assets/img/logo.jpeg'

export default function Header() {
  return (
    <header className="masthead text-white text-center">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5 mt-4" data-aos="zoom-out" data-aos-duration="800">
            <img src={Logo} align="center" className="img-fluid" alt="..." />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-2" data-aos="zoom-out" data-aos-duration="800">
            <img src={Rocket} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-6 mt-5">
            <div className="mt-5">
              <h3 className="text-white text-center" data-aos="zoom-out" data-aos-duration="800">
                HackRx is the Annual Hackathon hosted by Bajaj Finserv where you
                get a stage for competing against the brightest of geeks, while
                being mentored by top leaders from the industry for developing
                solutions that matter!
              </h3>
              <div className="typewriter mt-5">
                <h2>Welcome To HackJnu 2.0&nbsp;&nbsp;&nbsp;&nbsp;</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 mt-md-5" data-aos="zoom-out">
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
