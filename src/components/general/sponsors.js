import React from "react";
import img1 from "../../assets/img/sponsors/balsamiq.png";
import img2 from "../../assets/img/sponsors/twist.png";
import img3 from "../../assets/img/sponsors/cloudsploit.png";
import img4 from "../../assets/img/sponsors/devfolio.png";
import img5 from "../../assets/img/sponsors/doist.png";
import img6 from "../../assets/img/sponsors/gatsby.svg";
import img7 from "../../assets/img/sponsors/hackerearth.png";
import img8 from "../../assets/img/sponsors/hellointern.png";
import img9 from "../../assets/img/sponsors/matic.svg";
import img10 from "../../assets/img/sponsors/bugsee.png";

const themes = [
  { id: "1", side: "left", img: img1 },
  { id: "2", side: "right", img: img2 },
  { id: "3", side: "left", img: img3 },
  { id: "4", side: "right", img: img4 },
  { id: "5", side: "left", img: img5 },
  { id: "6", side: "right", img: img6 },
  { id: "7", side: "left", img: img7 },
  { id: "8", side: "right", img: img8 },
  { id: "9", side: "left", img: img9 },
  { id: "10", side: "right", img: img10 },
];

function Thm(props) {
  return (
    <div className="col-md-4 d-flex justify-content-center" data-aos={props.side === "left" ? "fade-up-left" : "fade-up-right"} key={props.id}>
      <img
        src={props.img}
        className="py-4 img-fluid rounded-start"
        style={{ maxWidth: "85%", maxHeight: "85%" }}
        alt="..."
      />
    </div>
  );
}

export default function Sponsors() {
  return (
    <>
      <hr className="solid" />
      <h2 className="headingMain2" data-aos="flip-up" >Past Sponsors</h2>
      <br />
      <div className="container mt-2 mb-2">
        <div className="card border-0 mb-3 mx-auto">
          <div className="row g-0 d-flex justify-content-center">
            {themes.map(theme => Thm(theme))}
          </div>
        </div>
      </div>
    </>
  );
}