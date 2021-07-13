import React from "react";
import Jury1 from "../../assets/img/jury/Anurag Chottani.jpg";
import Jury2 from "../../assets/img/jury/anurag.png";
import Jury3 from "../../assets/img/jury/Devang Mody.jpg";
import Jury4 from "../../assets/img/jury/Rakesh Bhatt.jpg";
import Jury5 from "../../assets/img/jury/vivek.png";

export default function Jury() {
  return (
    <>
      <hr className="solid" />
      <h2 className="headingMain1" data-aos="flip-up">Eminent Jury of HackRx 2.0</h2>

      <div className="container mt-4">
        <div className="row pb-5 mb-4">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="card h-100 ms-1 ms-md-0 rounded shadow-sm border-0" data-aos="zoom-in">
              <div className="card-body p-0 hero">
                <div className="juryCard1 px-5 py-4 text-center card-img-top">
                  <a href="https://www.linkedin.com/in/devang-mody-6922834/">
                    <img src={Jury1} alt="..." width="120" className="rounded-circle mb-2 img-thumbnail d-block mx-auto" />
                  </a>
                  <h5 className="text-white mb-0">Devang Mody</h5>
                </div>
                <div className="p-1 d-flex justify-content-center">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <h5 className="font-weight-bold mb-0 d-block text-center">CEO <br />
                        Bajaj Finserv Health
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="card rounded shadow-sm border-0 h-100" data-aos="zoom-in">
              <div className="card-body p-0">
                <div className="juryCard2 px-5 py-4 text-center card-img-top">
                  <a href="https://www.linkedin.com/in/bhattrakesh/">
                    <img src={Jury2} alt="..." width="120" className="rounded-circle mb-2 img-thumbnail d-block mx-auto" />
                  </a>
                  <h5 className="mb-0 text-white">Rakesh Bhatt</h5>
                </div>
                <div className="p-1 d-flex justify-content-center">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <h5 className="font-weight-bold mb-0 d-block text-center">CEO <br />
                        Finserv MARKETS
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="card h-100 rounded shadow-sm border-0">
              <div className="card-body p-0" data-aos="zoom-in">
                <div className="juryCard3 px-5 py-4 text-center card-img-top">
                  <a href="https://www.linkedin.com/in/anurag-chottani-1460832/">
                    <img src={Jury3} alt="..." width="120" className=" rounded-circle mb-2 img-thumbnail d-block mx-auto" />
                  </a>
                  <h5 className="text-white mb-0">Anurag Chottani</h5>
                </div>
                <div className="p-1 d-flex justify-content-center">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <h5 className=" font-weight-bold mb-0 d-block text-center ">CTO <br />
                        Bajaj Finance Ltd.
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-2 mb-4 mb-lg-0">
            <div className="card h-100 rounded shadow-sm border-0" data-aos="zoom-in">
              <div className="card-body p-0">
                <div className="juryCard4 px-5 py-4 text-center card-img-top">
                  <a href="https://www.linkedin.com/in/anurag-vohra-6561352/">
                    <img src={Jury4} alt="..." width="120" className=" rounded-circle mb-2 img-thumbnail d-block mx-auto" />
                  </a>
                  <h5 className="text-white mb-0">Anurag Vohra</h5>
                </div>
                <div className="p-1 d-flex justify-content-center">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <h5 className=" font-weight-bold mb-0 d-block text-center">CTO <br />
                        Bajaj Finserv Health
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-2 mb-4 mb-lg-0">
            <div className="card h-100 rounded shadow-sm border-0" data-aos="zoom-in">
              <div className="card-body p-0">
                <div className="juryCard4 px-5 py-4 text-center card-img-top">
                  <a href="https://www.linkedin.com/in/vivekkant/">
                    <img src={Jury5} alt="..." width="120" className=" rounded-circle mb-2 img-thumbnail d-block mx-auto" />
                  </a>
                  <h5 className="text-white mb-0">Vivek Kant</h5>
                </div>
                <div className="p-1 d-flex justify-content-center">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <h5 className=" font-weight-bold mb-0 d-block text-center">Head - Technology<br />
                        Finserv MARKETS
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}