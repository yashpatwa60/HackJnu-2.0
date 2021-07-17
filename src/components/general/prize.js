import React from "react";
import NP1 from "../../assets/img/prizeWorth/undraw_winners_ao2o.svg";
import NP2 from "../../assets/img/prizeWorth/undraw_Gift_re_qr17.svg";
import NP3 from "../../assets/img/prizeWorth/undraw_Gifts_re_97j6.svg";

export default function Prize() {
  return (
    <>
      <div className="container mt-5 mb-3" id="prize_section">
        <h3 className="headingMain5" data-aos="flip-up">Prizes Worth</h3>
        <div className="row wrapper row-cols-1 row-cols-md-3 g-4 mt-3">
          <div className="col first">
            <div className="card border-0 prizeCard" data-aos="zoom-in">
              <div className="d-flex justify-content-center">
                <img src={NP2} style={{ maxWidth: "80%", maxHeight: "80%" }} className="card-img-top" alt="..." />
              </div>
              <div className="card-body mt-3">
                <h5 className="card-title d-flex justify-content-center">
                  Second Prize - 10,000 INR
                </h5>
              </div>
            </div>
          </div>
          <div className="col second">
            <div className="card border-0" data-aos="zoom-in">
              <div className="d-flex justify-content-center">
                <img src={NP1} style={{ maxWidth: "80%", maxHeight: "80%" }} className="card-img-top" alt="..." />
              </div>
              <div className="card-body mt-3">
                <h5 className="card-title d-flex justify-content-center">
                  First Prize - 15,000 INR
                </h5>
              </div>
            </div>
          </div>
          <div className="col third">
            <div className="card border-0 prizeCard3" data-aos="zoom-in">
              <div className="d-flex justify-content-center">
                <img src={NP3} style={{ maxWidth: "70%", maxHeight: "70%" }} className="card-img-top" alt="..." />
              </div>
              <div className="card-body mt-3">
                <h5 className="card-title d-flex justify-content-center">
                  Third Prize - 5,000 INR
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}