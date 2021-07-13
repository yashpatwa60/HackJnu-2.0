import React from "react";
import P3 from "../../assets/img/prizeWorth/2.svg";
import P1 from "../../assets/img/prizeWorth/1.svg";
import P2 from "../../assets/img/prizeWorth/Team of tiny office people employees winning gold cup [Converted]-01.svg";

export default function Prize() {
  return (
    <>
      <div className="container mt-4 mb-3" id="prize_section">
        <h3 className="headingMain5" data-aos="flip-up">Prizes Worth 10,00,000 INR</h3>
        <p className="card-text mt-1 d-flex justify-content-center text-center">
          A chance to win Internships / Full Time Roles at Bajaj Finserv
        </p>
        <div className="row wrapper row-cols-1 row-cols-md-3 g-4">
          <div className="col first">
            <div className="card border-0 prizeCard" data-aos="zoom-in">
              <div className="d-flex justify-content-center">
                <img src={P1} style={{ maxWidth: "80%", maxHeight: "80%" }} className="card-img-top" alt="..." />
              </div>
              <div className="card-body mt-3">
                <h5 className="card-title d-flex justify-content-center">
                  Second Prize - 50,000 INR
                </h5>
              </div>
            </div>
          </div>
          <div className="col second">
            <div className="card border-0" data-aos="zoom-in">
              <div className="d-flex justify-content-center">
                <img src={P2} style={{ maxWidth: "80%", maxHeight: "80%" }} className="card-img-top" alt="..." />
              </div>
              <div className="card-body mt-3">
                <h5 className="card-title d-flex justify-content-center">
                  First Prize - 1,00,000 INR
                </h5>
              </div>
            </div>
          </div>
          <div className="col third">
            <div className="card border-0 prizeCard3" data-aos="zoom-in">
              <div className="d-flex justify-content-center">
                <img src={P3} style={{ maxWidth: "80%", maxHeight: "80%" }} className="card-img-top" alt="..." />
              </div>
              <div className="card-body mt-3">
                <h5 className="card-title d-flex justify-content-center">
                  Third Prize - 25,000 INR
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}