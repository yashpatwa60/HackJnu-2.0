import React from "react";

export default function Faqs() {
  return (
    <>
      <hr className="solid" />
      <h2 className="headingMain3" data-aos="flip-up">FAQs</h2>

      <div className="container">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                1. Till when can I submit the pitch deck?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                The form to submit pitch deck will be open till 15ᵗʰ July 2021 11:59 PM IST.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                2. What is the date for the hackathon?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Hackathon will start on 23ʳᵈ July 2021.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                3. What is the criterion for selection?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                We will be evaluating your solution on below
                parameters.<br />
                a. Impact<br />
                b. Feasibility<br />
                c. Authenticity<br />
                d. Novelty<br />
                e. Solution design<br />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="17">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse17" aria-expanded="false" aria-controls="flush-collapse17">
                4. How many members are required for team formation?
              </button>
            </h2>
            <div id="flush-collapse17" className="accordion-collapse collapse" aria-labelledby="17" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">A single team should be comprised of minimum 2 and maximum 5 participants.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="16">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse16" aria-expanded="false" aria-controls="flush-collapse16">
                5. Can a single team represent multiple
                institutions.
              </button>
            </h2>
            <div id="flush-collapse16" className="accordion-collapse collapse" aria-labelledby="16" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">No, a single team should comprise of participants
                from one institution only, but can be from different semesters.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="1">
              <button
                className="accordion-button collapsed"
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
              className="accordion-collapse collapse"
              aria-labelledby="1"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                You can restructure your current team. Please make
                sure that all members are enrolled in the same
                college.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
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
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Yes. Do mention about it in your pitch deck.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="3">
              <button
                className="accordion-button collapsed"
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
              className="accordion-collapse collapse"
              aria-labelledby="3"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Yes. Do give proper credits to the original authors.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="4">
              <button
                className="accordion-button collapsed"
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
              className="accordion-collapse collapse"
              aria-labelledby="4"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                We like MERN, but you are free to code the stack of
                your choice.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse5"
                aria-expanded="false"
                aria-controls="flush-collapse5"
              >
                10. Do we have to include UI mockups in our pitch
                deck?
              </button>
            </h2>
            <div
              id="flush-collapse5"
              className="accordion-collapse collapse"
              aria-labelledby="5"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                It is not necessary to include UI mockups in your
                pitch deck. However, including mockups will add to
                the clarity of your idea.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="6">
              <button
                className="accordion-button collapsed"
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
              className="accordion-collapse collapse"
              aria-labelledby="6"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Yes, you are free to integrate publicly available
                APIs in your solution.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="7">
              <button
                className="accordion-button collapsed"
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
              className="accordion-collapse collapse"
              aria-labelledby="7"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Yes, but please note that you will have to bear the
                cost.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="8">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse8"
                aria-expanded="false"
                aria-controls="flush-collapse8"
              >
                13. Will we be provided with datasets for the
                solution?
              </button>
            </h2>
            <div
              id="flush-collapse8"
              className="accordion-collapse collapse"
              aria-labelledby="8"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                No, you will have to collect datasets from public
                sources.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="9">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse10"
                aria-expanded="false"
                aria-controls="flush-collapse10"
              >
                14. Can we make a mobile app/web app/... as the
                product?
              </button>
            </h2>
            <div
              id="flush-collapse10"
              className="accordion-collapse collapse"
              aria-labelledby="9"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                You are free to decide your platform.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="11">
              <button
                className="accordion-button collapsed"
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
              className="accordion-collapse collapse"
              aria-labelledby="11"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                No, you are expected to build a prototype in 24
                hours.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="12">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse12"
                aria-expanded="false"
                aria-controls="flush-collapse12"
              >
                16. How will we collaborate with other team members
                during the Hackathon?
              </button>
            </h2>
            <div
              id="flush-collapse12"
              className="accordion-collapse collapse"
              aria-labelledby="12"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                We'll be using GitHub as a platform to manage code.
                You can collaborate with your team using the same.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="13">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse13"
                aria-expanded="false"
                aria-controls="flush-collapse13"
              >
                17. Will we get mentors to guide us during the
                Hackathon?
              </button>
            </h2>
            <div
              id="flush-collapse13"
              className="accordion-collapse collapse"
              aria-labelledby="13"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Yes, our team will be there to guide you.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="14">
              <button
                className="accordion-button collapsed"
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
              className="accordion-collapse collapse"
              aria-labelledby="14"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                You can shoot us an email at
                <a
                  href="/cdn-cgi/l/email-protection#edcd9e989d9d829f99ad858c8e869f95c38483"
                ><span
                  className="__cf_email__"
                  data-cfemail="7605030606190402361e17151d040e581f18"
                >[email&#160;protected]</span
                  ></a
                >
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="15">
              <button
                className="accordion-button collapsed"
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
              className="accordion-collapse collapse"
              aria-labelledby="15"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Identified students will go through a standard
                screening process, more details will be informed
                post hackathon.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="20">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse20"
                aria-expanded="false"
                aria-controls="flush-collapse20"
              >
                20. Is this hackathon open for working
                professionals?
              </button>
            </h2>
            <div
              id="flush-collapse20"
              className="accordion-collapse collapse"
              aria-labelledby="20"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Regret to inform, HackRx is open for students only.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="21">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse21"
                aria-expanded="false"
                aria-controls="flush-collapse21"
              >
                21. Where can I find the pitch and where should I
                submit it?
              </button>
            </h2>
            <div
              id="flush-collapse21"
              className="accordion-collapse collapse"
              aria-labelledby="21"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Please find links to download and submit the pitch
                deck at the top portion of the page.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}