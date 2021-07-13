import React from "react";
import ML from "../../assets/img/themes/ml.svg";
import AI from "../../assets/img/themes/ai.svg";
import AR from "../../assets/img/themes/ar.svg";
import BOT from "../../assets/img/themes/bot.svg";
import IOT from "../../assets/img/themes/iot.svg";
import BLKChain from "../../assets/img/themes/bc.svg";

const themes = [
  {
    side: "left",
    img: ML,
    topic: 'Machine learning',
    def: 'Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.'
  },
  {
    side: "right",
    img: AI,
    topic: 'Artificial Intelligence',
    def: 'Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by humans or animals. Leading AI textbooks define the field as the study of "intelligent agents": any system that perceives its environment and takes actions that maximize its chance of achieving its goals. Some popular accounts use the term "artificial intelligence" to describe machines that mimic "cognitive" functions that humans associate with the human mind, such as "learning" and "problem solving".'
  },
  {
    side: "left",
    img: AR,
    topic: 'Augmented Reality',
    def: 'Augmented reality is an interactive experience of a real-world environment where the objects that reside in the real world are enhanced by computer-generated perceptual information, sometimes across multiple sensory modalities, including visual, auditory, haptic, somatosensory and olfactory.'
  },
  {
    side: "right",
    img: BOT,
    topic: 'Bots',
    def: 'An Internet bot, web robot, robot or simply bot, is a software application that runs automated tasks over the Internet. Typically, bots perform tasks that are simple and repetitive, much faster than a person could.'
  },
  {
    side: "left",
    img: IOT,
    topic: 'Internet of Things',
    def: 'The Internet of things describes the network of physical objects—a.k.a. "things"—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the Internet.'
  },
  {
    side: "right",
    img: BLKChain,
    topic: 'Block Chain',
    def: 'A blockchain is a growing list of records, called blocks, that are linked together using cryptography.Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree). The timestamp proves that the transaction data existed when the block was published in order to get into its hash.'
  }
];

function Thm(props) {
  return (
    <div className="card border-0 mb-3 mx-auto" key={props.topic}>
      {props.side == 'left' &&
        <div className="row g-0 statementLeft" data-aos="fade-up-left">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src={props.img}
              className="img-fluid rounded-start"
              style={{ maxWidth: "85%", maxHeight: "85%" }}
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.topic}</h5>
              <p className="card-text">
                {props.def}
              </p>
            </div>
          </div>
        </div>
      }
      {props.side == 'right' &&
        <div className="row g-0 statementRight" data-aos="fade-up-right">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.topic}</h5>
              <p className="card-text">
                {props.def}
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src={props.img}
              className="img-fluid rounded-start"
              style={{ maxWidth: "85%", maxHeight: "85%" }}
              alt="..."
            />
          </div>
        </div>
      }
    </div>
  );
}

export default function Themes() {
  return (
    <>
      <hr className="solid" />
      <h2 className="headingMain2" data-aos="flip-up">Themes</h2>
      <br />
      <div className="container mt-2 mb-2">
        {themes.map(theme => Thm(theme))}
      </div>
    </>
  );
}