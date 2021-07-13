import React from "react";
import headImg from "../../assets/img/head.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 400,
  easeing: 'ease',
});
AOS.refresh();
export default function Header() {
  return (
    <header className="masthead text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <div className="topImg" data-aos="zoom-in-up">
          <img src={headImg} className="img-fluid rounded-start" aria-hidden="true" style={{ width: 50 + "%", height: 50 + "%" }} alt="..." />
        </div>
        <div className="">
          <h3>
            HackRx is the Annual Hackathon hosted by Bajaj Finserv
            where you get a stage for competing against the
            brightest of geeks, while being mentored by top leaders
            from the industry for developing solutions that matter!
          </h3>
        </div>
        <div className="mt-n5" style={{ marginRight: 20 + "px", marginLeft: 20 + "px" }}>
          <div className="typewriter">
            <h2>IDEATE.CO-CREATE.IMPACT&nbsp;&nbsp;&nbsp;&nbsp;</h2>
          </div>
        </div>
        <div className="mt-2 mt-md-3" data-aos="zoom-out">
          <a target="_blank" href="https://www.surveymonkey.com/r/hackrx_reg">
            <button type="button" className="btn registerBtn">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-1"><h2>1.</h2></div>
                <div className="col">Register for HackRx 2.0</div>
              </div>
            </button>
          </a>

          <a target="_blank" href="./downloads/pitch_deck_template.ppt">
            <button type="button" className="btn registerBtn mt-2 mt-md-0">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-1"><h2>2.</h2></div>
                <div className="col">
                  Download Pitch Deck Template
                </div>
              </div>
            </button>
          </a>

          <a target="_blank" href="https://www.surveymonkey.com/r/hackrx_pitch_deck">
            <button type="button" className="btn registerBtn mt-2 mt-md-0">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-1"><h2>3.</h2></div>
                <div className="col">Submit Your Pitch Deck</div>
              </div>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
