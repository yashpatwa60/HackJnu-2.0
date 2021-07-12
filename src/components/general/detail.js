import React from "react";

export default function Detail() {
  return (
    <div className="container">
      <div
        className="card cardStyle mx-auto ms-2 me-2 aos-init aos-animate"
        data-aos="zoom-out"
        data-aos-duration="800"
      >
        <div className="container-fluid ">
          <div className="row px-5  d-flex justify-content-start">
            <div
              className="col-lg-3 float-right col-md-6 mb-0 mb-lg-0 d-flex justify-content-start
                        justify-content-lg-center ms-0 ms-md-0 ps-0 ps-lg-3 ps-md-5 mt-3"
            >
              <div className="mt-2 ">
                <i className="fas fa-flag iconfont "></i>
              </div>
              &nbsp;&nbsp;{" "}
              <h5 className="mt-0 ">
                Registration Starts on:
                <br />
                30ᵗʰ June 2021
              </h5>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-0 mb-lg-0 d-flex justify-content-start ps-0 justify-content-lg-center 
                        ms-0 ms-md-0 mt-3 "
            >
              <div className="mt-2 ">
                <i className="fas fa-stopwatch iconfont "></i>
              </div>
              &nbsp;&nbsp;{" "}
              <h5 className="mt-0 ">
                Registration Ends on:
                <br />
                15ᵗʰ July 2021
              </h5>
            </div>
            <div
              className="col-lg-3 float-right col-md-6 mb-0 mb-lg-0 d-flex
                        justify-content-start justify-content-lg-center ms-0 ms-md-0  ps-0 ps-lg-0 ps-md-5 mt-3"
            >
              <div className="mt-2 ">
                <i className="fas fa-flag-checkered iconfont"></i>
              </div>
              &nbsp;&nbsp;{" "}
              <h5 className="mt-0 ">
                {" "}
                HackRx 2.0 Starts on:
                <br />
                23ʳᵈ July 2021
              </h5>
            </div>
            <div className="col-lg-3 col-md-6 mb-0 mb-lg-0 d-flex justify-content-start  justify-content-lg-center ps-0 ps-lg-3 ms-md-0 mt-3">
              <div className="mt-2 ">
                <i className="fas fa-clock iconfont"></i>
              </div>
              &nbsp;&nbsp;
              <h5 className="mt-0">
                Duration of HackRx 2.0:
                <br />
                30 Hours
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
