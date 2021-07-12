import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import P3 from "../../assets/img/prizeWorth/2.svg";
import P1 from "../../assets/img/prizeWorth/1.svg";
import P2 from "../../assets/img/prizeWorth/Team of tiny office people employees winning gold cup [Converted]-01.svg";
AOS.init();
 AOS.refresh();


export default function Bottom() {

  const SolidLine = () => (
      <hr className="solid" />
  )
  
  return (
    <div>
      <SolidLine />
      <h3 class="headingMain5" data-aos="flip-up">
        Prizes Worth 10,00,000 INR
      </h3>

      <p class="card-text mt-1 d-flex justify-content-center text-center">
        A chance to win Internships / Full Time Roles at Bajaj Finserv
      </p>
      <div class="container mt-5 mb-3" id="prize_section">
        <div class="row wrapper row-cols-1 row-cols-md-3 g-4">
          <div class="col first">
            <div class="card border-0 prizeCard" data-aos="zoom-in">
              <div class="d-flex justify-content-center">
                <img
                  src={P3}
                  style={{ maxWidth: "80%", maxHeight: "80%" }}
                  class="card-img-top "
                  alt="..."
                />
              </div>
              <div class="card-body mt-3">
                <h5 class="card-title d-flex justify-content-center">
                  Second Prize - 50,000 INR{" "}
                </h5>
              </div>
            </div>
          </div>
          <div class="col second">
            <div class="card border-0" data-aos="zoom-in">
              <div class="d-flex justify-content-center">
                <img
                  src={P1}
                  style={{ maxWidth: "80%", maxHeight: "80%" }}
                  class="card-img-top "
                  alt="..."
                />
              </div>
              <div class="card-body mt-3">
                <h5 class="card-title d-flex justify-content-center">
                  First Prize - 1,00,000 INR
                </h5>
              </div>
            </div>
          </div>
          <div class="col third">
            <div class="card border-0 prizeCard3" data-aos="zoom-in">
              <div class="d-flex justify-content-center">
                <img
                  src={P2}
                  style={{ maxWidth: "80%", maxHeight: "80%" }}
                  class="card-img-top "
                  alt="..."
                />
              </div>
              <div class="card-body mt-3">
                <h5 class="card-title d-flex justify-content-center">
                  Third Prize - 25,000 INR{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <solidLine />
      <h2 class="headingMain2" data-aos="flip-up">
        Problem statements
      </h2>
      <br />
      <div class="container mt-2 mb-2">
        <div class="card border-0 mb-3 mx-auto">
          <div class="row g-0 statementLeft" data-aos="fade-up-left">
            <div class="col-md-4 d-flex justify-content-center">
              <img
                src="/problemstatmentImg/prob1.1.svg"
                class="img-fluid rounded-start"
                style={{ maxWidth: "80%", maxHeight: "80%" }}
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Website Search</h5>
                <p class="card-text">
                  "Build a system, which will help customers answer their
                  insurance queries."
                  <br />
                  Buying insurance can be overwhelming for a common man. It’s
                  very important that customers to know about the product that
                  they are buying and importantly how they can buy, pay premium,
                  what is the process....
                </p>
                <button
                  type="button"
                  class="btn buttonStyle"
                  data-bs-toggle="modal"
                  data-bs-target="#problem1"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="card border-0 mb-3 mx-auto">
          <div class="row g-0 statementRight" data-aos="fade-up-right">
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Social Commerce</h5>
                <p class="card-text">
                  “Build Social Commerce system for customers based on their
                  conversations.”
                  <br />
                  Social commerce is an approach to sell items by creating chat
                  communities/discussion forums. The solution should allow a
                  user to register, login and join a chat community....
                </p>
                <button
                  type="button"
                  class="btn buttonStyle"
                  data-bs-toggle="modal"
                  data-bs-target="#problem2"
                >
                  Read more
                </button>
              </div>
            </div>
            <div class="col-md-4 d-flex justify-content-center">
              <img
                src="/problemstatmentImg/prob2.1.svg"
                style={{ maxWidth: "80%", maxHeight: "80%" }}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
        </div>

        <div class="card border-0 mb-3 mx-auto">
          <div class="row g-0 statementLeft" data-aos="fade-up-left">
            <div class="col-md-4 d-flex justify-content-center">
              <img
                src="/problemstatmentImg/prob3.1.svg"
                class="img-fluid rounded-start"
                style={{ maxWidth: "80%", maxHeight: "80%" }}
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Rewards Framework</h5>
                <p class="card-text">
                  "Build Augmented Reality based rewards gamification program."{" "}
                  <br />
                  With popularity of smart devices, like mobiles and tablets
                  augmented reality has become part of marketing and engagement
                  tools....
                </p>
                <button
                  type="button"
                  class="btn buttonStyle"
                  data-bs-toggle="modal"
                  data-bs-target="#problem3"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="card border-0 mb-3 mx-auto">
          <div class="row g-0 statementRight" data-aos="fade-up-right">
            <div class="col-md-8 ">
              <div class="card-body">
                <h5 class="card-title">Recommendation Engine</h5>
                <p class="card-text">
                  Online search engines are extremely popular tools for
                  individuals for seeking information but it is well known that
                  the results returned by search engines may over or under
                  represent....
                </p>
                <button
                  type="button"
                  class="btn buttonStyle"
                  data-bs-toggle="modal"
                  data-bs-target="#problem4"
                >
                  Read more
                </button>
              </div>
            </div>
            <div class="col-md-4 d-flex justify-content-center">
              <img
                src="/problemstatmentImg/prob4.1.svg"
                style={{ maxWidth: "80%", maxHeight: "80%" }}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
        </div>

        <div class="card border-0 mb-3 mx-auto">
          <div class="row g-0 statementLeft" data-aos="fade-up-left">
            <div class="col-md-4 d-flex justify-content-center">
              <img
                src="/problemstatmentImg/prob5.1.svg"
                class="img-fluid rounded-start"
                style={{ maxWidth: "80%", maxHeight: "80%" }}
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Voice Notification Android App</h5>
                <p class="card-text">
                  Implement a push notification service in a Mobile App, which
                  will announce the text from received notification payload....
                </p>
                <button
                  type="button"
                  class="btn buttonStyle"
                  data-bs-toggle="modal"
                  data-bs-target="#problem5"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="card border-0 mb-3 mx-auto">
          <div class="row g-0 statementRight" data-aos="fade-up-right">
            <div class="col-md-8 ">
              <div class="card-body">
                <h5 class="card-title">Setting up in App Nudges</h5>
                <p class="card-text">
                  Develop an in-app tool to allow setting up in-app nudges for
                  various use cases, tool to allow nudge configuration on screen
                  without need of having to code them on the screen/per use
                  case....
                </p>
                <button
                  type="button"
                  class="btn buttonStyle"
                  data-bs-toggle="modal"
                  data-bs-target="#problem6"
                >
                  Read more
                </button>
              </div>
            </div>
            <div class="col-md-4 d-flex justify-content-center">
              <img
                src="/problemstatmentImg/prob6.1.svg"
                class="img-fluid rounded-start"
                style={{ maxWidth: "80%", maxHeight: "80%" }}
                alt="..."
              />
            </div>
          </div>
        </div>
        <div class="card border-0 mb-3 mx-auto">
          <div class="row g-0 statementLeft" data-aos="fade-up-left">
            <div class="col-md-4 d-flex justify-content-center">
              <img
                src="/problemstatmentImg/prob7.1.svg"
                class="img-fluid rounded-start"
                style={{ maxWidth: "80%", maxHeight: "80%" }}
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Enhance quality of document image</h5>
                <p class="card-text">
                  In our app, users / customers upload various documents images
                  to fulfil KYC / Onboarding / File processing requirements....
                </p>
                <button
                  type="button"
                  class="btn buttonStyle"
                  data-bs-toggle="modal"
                  data-bs-target="#problem7"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0 mb-3 mx-auto">
          <div class=" row g-0 statementRight" data-aos="fade-up-right">
            <div class="col-md-8 ">
              <div class="card-body">
                <h5 class="card-title">Face Detection Algorithm</h5>
                <p class="card-text">
                  We upload multiple photos of doctors for listing on
                  bajajfinservhealth.in; (Currently 80K and increasing). Often
                  time images are not clear and  we should not allow users to
                  upload these....
                </p>
                <button
                  type="button"
                  class="btn buttonStyle"
                  data-bs-toggle="modal"
                  data-bs-target="#problem8"
                >
                  Read more
                </button>
              </div>
            </div>
            <div class="col-md-4 d-flex justify-content-center">
              <img
                src="/problemstatmentImg/prob8.1.svg"
                style={{ maxWidth: "55%", maxHeight: "70%" }}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div class="card border-0 mb-3 mx-auto">
          <div class="row g-0 statementLeft" data-aos="fade-up-left">
            <div class="col-md-4 d-flex justify-content-center">
              <img
                src="/problemstatmentImg/prob9.1.svg"
                class="img-fluid rounded-start"
                style={{ maxWidth: "80%", maxHeight: "80%" }}
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">BOT for Product Queries</h5>
                <p class="card-text">
                  You are required to develop a chatbot that can handle NLP
                  (natural language processing). This bot will browse and show a
                  catalog of our products, while also having specific filter or
                  assist mode (example show me products which have Eye
                  Vision)...
                </p>
                <button
                  type="button"
                  class="btn buttonStyle"
                  data-bs-toggle="modal"
                  data-bs-target="#problem9"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0 mb-3 mx-auto">
          <div class=" row g-0 statementRight" data-aos="fade-up-right">
            <div class="col-md-8 ">
              <div class="card-body">
                <h5 class="card-title">
                  Develop a De-dup engine to identify/ match incoming data
                </h5>
                <p class="card-text">
                  You have to create a scalable de-dupe engine which will allow
                  us to de-dupe doctors real-time as well as batch mode basis
                  multiple attributes (e.g. name/mobile etc.); the system would
                  be configurable to give weightages to specific attributes so
                  that match scores can be calculated, and....
                </p>
                <button
                  type="button"
                  class="btn buttonStyle"
                  data-bs-toggle="modal"
                  data-bs-target="#problem10"
                >
                  Read more
                </button>
              </div>
            </div>
            <div class="col-md-4 d-flex justify-content-center">
              <img
                src="/problemstatmentImg/prob10.1.svg"
                style={{ maxWidth: "70%", maxHeight: "70%" }}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div class="card border-0 mb-3 mx-auto">
          <div class="row g-0 statementLeft" data-aos="fade-up-left">
            <div class="col-md-4 d-flex justify-content-center">
              <img
                src="/problemstatmentImg/prob11.1.svg"
                class="img-fluid rounded-start"
                style={{ maxWidth: "80%", maxHeight: "80%" }}
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Instant Chat with Doctors</h5>
                <p class="card-text">
                  Patient comes to home page for consultation, searches for
                  Doctors available today, find out their slots &amp; books an
                  appointment &amp;waits for Doctors to accept the appointment
                  &amp; then join....
                </p>
                <button
                  type="button"
                  class="btn buttonStyle"
                  data-bs-toggle="modal"
                  data-bs-target="#problem11"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0 mb-3 mx-auto">
          <div class=" row g-0 statementRight" data-aos="fade-up-right">
            <div class="col-md-8 ">
              <div class="card-body">
                <h5 class="card-title">Recommendation System</h5>
                <p class="card-text">
                  To develop a recommendation system for the users of BFL. The
                  users should get personalized recommendations based on the
                  information of previous activities....
                </p>
                <button
                  type="button"
                  class="btn buttonStyle"
                  data-bs-toggle="modal"
                  data-bs-target="#problem12"
                >
                  Read more
                </button>
              </div>
            </div>
            <div class="col-md-4 d-flex justify-content-center">
              <img
                src="/problemstatmentImg/prob12.1.svg"
                style={{ maxWidth: "70%", maxHeight: "70%" }}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>

      <solidLine />
      <h2 class="headingMain1" data-aos="flip-up">
        Eminent Jury of HackRx 2.0
      </h2>

      <div class="container mt-4">
        <div class="row pb-5 mb-4">
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div
              class="card h-100 ms-1 ms-md-0 rounded shadow-sm border-0"
              data-aos="zoom-in"
            >
              <div class="card-body p-0 hero">
                <div class="juryCard1 px-5 py-4 text-center card-img-top">
                  <a href="https://www.linkedin.com/in/devang-mody-6922834/">
                    <img
                      src="/jury/Devang Mody (2).jpg"
                      alt="..."
                      width="120"
                      class="rounded-circle mb-2 img-thumbnail d-block mx-auto"
                    />
                  </a>
                  <h5 class="text-white mb-0">Devang Mody</h5>
                </div>
                <div class="p-1 d-flex justify-content-center">
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                      <h5 class="font-weight-bold mb-0 d-block text-center">
                        CEO <br /> Bajaj Finserv Health
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div
              class="card   rounded shadow-sm border-0 h-100"
              data-aos="zoom-in"
            >
              <div class="card-body p-0">
                <div class="juryCard2  px-5 py-4 text-center card-img-top">
                  <a href="https://www.linkedin.com/in/bhattrakesh/">
                    <img
                      src="/jury/Rakesh Bhatt (1).jpg"
                      alt="..."
                      width="120"
                      class="rounded-circle mb-2 img-thumbnail d-block mx-auto"
                    />
                  </a>
                  <h5 class="mb-0 text-white">Rakesh Bhatt</h5>
                </div>
                <div class="p-1 d-flex justify-content-center">
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                      <h5 class="font-weight-bold mb-0 d-block text-center">
                        CEO <br />
                        Finserv MARKETS
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div class="card h-100 rounded shadow-sm border-0">
              <div class="card-body p-0" data-aos="zoom-in">
                <div class="juryCard3 px-5 py-4 text-center card-img-top">
                  <a href="https://www.linkedin.com/in/anurag-chottani-1460832/">
                    <img
                      src="/jury/Anurag Chottani (2).jpg"
                      alt="..."
                      width="120"
                      class="rounded-circle mb-2 img-thumbnail d-block mx-auto"
                    />
                  </a>
                  <h5 class="text-white mb-0">Anurag Chottani</h5>
                </div>
                <div class="p-1 d-flex justify-content-center">
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                      <h5 class="font-weight-bold mb-0 d-block text-center">
                        CTO <br /> Bajaj Finance Ltd.
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-2 mb-4 mb-lg-0">
            <div
              class="card h-100 rounded shadow-sm border-0"
              data-aos="zoom-in"
            >
              <div class="card-body p-0">
                <div class="juryCard4 px-5 py-4 text-center card-img-top">
                  <a href="https://www.linkedin.com/in/anurag-vohra-6561352/">
                    <img
                      src="/jury/anurag.png"
                      alt="..."
                      width="120"
                      class="rounded-circle mb-2 img-thumbnail d-block mx-auto"
                    />
                  </a>
                  <h5 class="text-white mb-0">Anurag Vohra</h5>
                </div>
                <div class="p-1 d-flex justify-content-center">
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                      <h5 class="font-weight-bold mb-0 d-block text-center">
                        CTO <br /> Bajaj Finserv Health
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-2 mb-4 mb-lg-0">
            <div
              class="card h-100 rounded shadow-sm border-0"
              data-aos="zoom-in"
            >
              <div class="card-body p-0">
                <div class="juryCard4 px-5 py-4 text-center card-img-top">
                  <a href="https://www.linkedin.com/in/vivekkant/">
                    <img
                      src="/jury/vivek.png"
                      alt="..."
                      width="120"
                      class="rounded-circle mb-2 img-thumbnail d-block mx-auto"
                    />
                  </a>
                  <h5 class="text-white mb-0">Vivek Kant</h5>
                </div>
                <div class="p-1 d-flex justify-content-center">
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                      <h5 class="font-weight-bold mb-0 d-block text-center">
                        Head - Technology
                        <br />
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

      <solidLine />
      <h2 class="headingMain3" data-aos="flip-up">
        FAQs
      </h2>

      <div class="container">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                1. Till when can I submit the pitch deck?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                The form to submit pitch deck will be open till 15ᵗʰ July 2021
                11:59 PM IST.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                2. What is the date for the hackathon?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Hackathon will start on 23ʳᵈ July 2021.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                3. What is the criterion for selection?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                We will be evaluating your solution on below parameters.
                <br />
                a. Impact
                <br />
                b. Feasibility
                <br />
                c. Authenticity
                <br />
                d. Novelty
                <br />
                e. Solution design
                <br />
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="17">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse17"
                aria-expanded="false"
                aria-controls="flush-collapse17"
              >
                4. How many members are required for team formation?
              </button>
            </h2>
            <div
              id="flush-collapse17"
              class="accordion-collapse collapse"
              aria-labelledby="17"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                A single team should be comprised of minimum 2 and maximum 5
                participants.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="16">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse16"
                aria-expanded="false"
                aria-controls="flush-collapse16"
              >
                5. Can a single team represent multiple institutions.
              </button>
            </h2>
            <div
              id="flush-collapse16"
              class="accordion-collapse collapse"
              aria-labelledby="16"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                No, a single team should comprise of participants from one
                institution only, but can be from different semesters.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="1">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse1"
                aria-expanded="false"
                aria-controls="flush-collapse1"
              >
                6. Can we restructure our current team?
              </button>
            </h2>
            <div
              id="flush-collapse1"
              class="accordion-collapse collapse"
              aria-labelledby="1"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                You can restructure your current team. Please make sure that all
                members are enrolled in the same college.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse2"
                aria-expanded="false"
                aria-controls="flush-collapse2"
              >
                7. Can we change our problem statement?
              </button>
            </h2>
            <div
              id="flush-collapse2"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Yes. Do mention about it in your pitch deck.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="3">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse3"
                aria-expanded="false"
                aria-controls="flush-collapse3"
              >
                8. Can we use Open Source Resources?
              </button>
            </h2>
            <div
              id="flush-collapse3"
              class="accordion-collapse collapse"
              aria-labelledby="3"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Yes. Do give proper credits to the original authors.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="4">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse4"
                aria-expanded="false"
                aria-controls="flush-collapse4"
              >
                9. What is the preferred tech stack?
              </button>
            </h2>
            <div
              id="flush-collapse4"
              class="accordion-collapse collapse"
              aria-labelledby="4"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                We like MERN, but you are free to code the stack of your choice.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="5">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse5"
                aria-expanded="false"
                aria-controls="flush-collapse5"
              >
                10. Do we have to include UI mockups in our pitch deck?
              </button>
            </h2>
            <div
              id="flush-collapse5"
              class="accordion-collapse collapse"
              aria-labelledby="5"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                It is not necessary to include UI mockups in your pitch deck.
                However, including mockups will add to the clarity of your idea.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="6">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse6"
                aria-expanded="false"
                aria-controls="flush-collapse6"
              >
                11. Can we use publicly available APIs?
              </button>
            </h2>
            <div
              id="flush-collapse6"
              class="accordion-collapse collapse"
              aria-labelledby="6"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Yes, you are free to integrate publicly available APIs in your
                solution.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="7">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse7"
                aria-expanded="false"
                aria-controls="flush-collapse7"
              >
                12. Can we use paid APIs or services?
              </button>
            </h2>
            <div
              id="flush-collapse7"
              class="accordion-collapse collapse"
              aria-labelledby="7"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Yes, but please note that you will have to bear the cost.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="8">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse8"
                aria-expanded="false"
                aria-controls="flush-collapse8"
              >
                13. Will we be provided with datasets for the solution?
              </button>
            </h2>
            <div
              id="flush-collapse8"
              class="accordion-collapse collapse"
              aria-labelledby="8"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                No, you will have to collect datasets from public sources.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="9">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse10"
                aria-expanded="false"
                aria-controls="flush-collapse10"
              >
                14. Can we make a mobile app/web app/... as the product?
              </button>
            </h2>
            <div
              id="flush-collapse10"
              class="accordion-collapse collapse"
              aria-labelledby="9"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                You are free to decide your platform.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="11">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse11"
                aria-expanded="false"
                aria-controls="flush-collapse11"
              >
                15. Should we build a complete product in 24 hours?
              </button>
            </h2>
            <div
              id="flush-collapse11"
              class="accordion-collapse collapse"
              aria-labelledby="11"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                No, you are expected to build a prototype in 24 hours.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="12">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse12"
                aria-expanded="false"
                aria-controls="flush-collapse12"
              >
                16. How will we collaborate with other team members during the
                Hackathon?
              </button>
            </h2>
            <div
              id="flush-collapse12"
              class="accordion-collapse collapse"
              aria-labelledby="12"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                We'll be using GitHub as a platform to manage code. You can
                collaborate with your team using the same.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="13">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse13"
                aria-expanded="false"
                aria-controls="flush-collapse13"
              >
                17. Will we get mentors to guide us during the Hackathon?
              </button>
            </h2>
            <div
              id="flush-collapse13"
              class="accordion-collapse collapse"
              aria-labelledby="13"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Yes, our team will be there to guide you.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="14">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse14"
                aria-expanded="false"
                aria-controls="flush-collapse14"
              >
                18. Where do we reach out for more info?
              </button>
            </h2>
            <div
              id="flush-collapse14"
              class="accordion-collapse collapse"
              aria-labelledby="14"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                You can shoot us an email at
                <a href="/cdn-cgi/l/email-protection#6040131510100f1214200801030b12184e090e">
                  <span
                    class="__cf_email__"
                    data-cfemail="9be8eeebebf4e9efdbf3faf8f0e9e3b5f2f5"
                  >
                    [email&#160;protected]
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="15">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse15"
                aria-expanded="false"
                aria-controls="flush-collapse15"
              >
                19. What would be the hiring process post hackthon?
              </button>
            </h2>
            <div
              id="flush-collapse15"
              class="accordion-collapse collapse"
              aria-labelledby="15"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Identified students will go through a standard screening
                process, more details will be informed post hackathon.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="20">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse20"
                aria-expanded="false"
                aria-controls="flush-collapse20"
              >
                20. Is this hackathon open for working professionals?
              </button>
            </h2>
            <div
              id="flush-collapse20"
              class="accordion-collapse collapse"
              aria-labelledby="20"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Regret to inform, HackRx is open for students only.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="21">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse21"
                aria-expanded="false"
                aria-controls="flush-collapse21"
              >
                21. Where can I find the pitch and where should I submit it?
              </button>
            </h2>
            <div
              id="flush-collapse21"
              class="accordion-collapse collapse"
              aria-labelledby="21"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Please find links to download and submit the pitch deck at the
                top portion of the page.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
