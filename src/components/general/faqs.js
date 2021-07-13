import React from "react";

const queAns = [
  {
    id: 1,
    num: "One",
    que: "Who can participate?",
    ans: "Anyone between the ages of 13 and 20 (inclusive!) can participate in their respective tracks. The junior track is for ages 13-15 and the senior track is for ages 16-20.",
  },
  {
    id: 2,
    num: "Two",
    que: "Can we participate as a team?",
    ans: "Yes, you can form teams beforehand; however, all members of the team must register individually for the hackathon and if even one of the team-mates does not do so, your submission will NOT be accepted!",
  },
  {
    id: 3,
    num: "Three",
    que: "What should I do if I don't have a team?",
    ans: "We got you covered! Many hackers like you are also looking for other passionate hackers to team-up with. Once you join the hackathon discord server, you can look for such individuals on the #find-my-teammates channel and start hacking!",
  },
  {
    id: 4,
    num: "Four",
    que: "Is there a limit on the number of people in a team?",
    ans: "Yes, you can only have up to 5 members in a team. We will NOT accept entries of team with more than 5 members!",
  },
  {
    id: 5,
    num: "Five",
    que: "I’m a first time hacker, what should I do?",
    ans: "No worries, we love to welcome first time hackers! We’ll have plenty of experiences oriented around first time hackers to introduce you to the idea of a hackathon!"
  },
  {
    id: 6,
    num: "Six",
    que: "Is there a entrance fee to participate?",
    ans: "Nope! The hackathon is completely free for anyone who'd like to register!",
  },
]

function Accord(props) {
  return (
    <div className="accordion-item" key={props.id}>
      <h2 className="accordion-header" id={"flush-heading" + props.num}>
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse" + props.num} aria-expanded="false" aria-controls={"flush-collapse" + props.num}>
          {props.id + '. ' + props.que}
        </button>
      </h2>
      <div id={"flush-collapse" + props.num} className="accordion-collapse collapse" aria-labelledby={"flush-heading" + props.num} data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">
          {props.ans}
        </div>
      </div>
    </div>
  );
}
export default function Faqs() {
  return (
    <>
      <hr className="solid" />
      <h2 className="headingMain3" data-aos="flip-up">FAQs</h2>

      <div className="container">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {queAns.map(qa => Accord(qa))}
        </div>
      </div>
    </>
  );
}