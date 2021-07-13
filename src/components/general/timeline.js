import React from "react";

export default function Timeline() {
  return (
    <div className="container">
      <hr className="solid" />
      <div className="row">
        <div className="col-md-12 col-md-offset-0">
          <ul className="timeline">
            <li className="timeline-heading text-center">
              <div>
                <h3>HackRx 2.0 Timeline</h3>
              </div>
            </li>

            <li className="timeline-unverted" data-aos="zoom-in">
              <div className="timeline-badge">
                <i className="fas fa-flag"></i>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">Registration Starts:</h3>
                  <strong>30ᵗʰ June 2021</strong>
                </div>
                <div className="timeline-body">
                  <p>Get Set Register</p>
                </div>
              </div>
            </li>

            <li className="timeline-inverted data-aos=" data-aos="zoom-in">
              <div className="timeline-badge">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">Meet the Mentors:</h3>
                  <strong>9ᵗʰ July 2021</strong>
                </div>
                <div className="timeline-body">
                  <p>A closer look at the problem statements</p>
                </div>
              </div>
            </li>
            
            <li className="timeline-unverted data-aos=" data-aos="zoom-in">
              <div className="timeline-badge">
                <i className="fas fa-stopwatch"></i>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">Registration and Pitch Deck<br />Submission Ends:</h3>
                  <strong>15ᵗʰ July 2021</strong><br />
                </div>
                <div className="timeline-body">
                  <p>First impression is the best impression</p>
                </div>
              </div>
            </li>

            <li className="timeline-inverted" data-aos="zoom-in">
              <div className="timeline-badge">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">Announcement of Shortlisted Teams:</h3>
                  <strong>19ᵗʰ July 2021</strong>
                </div>
                <div className="timeline-body">
                  <p>With great power, comes great responsibility.</p>
                </div>
              </div>
            </li>
      
            <li className="timeline-unverted data-aos=" data-aos="zoom-in">
              <div className="timeline-badge">
                <i className="fas fa-users"></i>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">Webinar with Shortlisted Teams:</h3>
                  <strong>19ᵗʰ July 2021</strong>
                </div>
                <div className="timeline-body">
                  <p>HackRx Do's and Don't</p>
                </div>
              </div>
            </li>

            <li className="timeline-inverted" data-aos="zoom-in">
              <div className="timeline-badge">
                <i className="fas fa-flag-checkered"></i>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">HackRx 2.0 Kick Off:</h3>
                  <strong>23ʳᵈ July 2021</strong>
                </div>
                <div className="timeline-body">
                  <p>The way to get started is to quit talking and begin CODING</p>
                </div>
              </div>
            </li>
    
            <li className="timeline-unverted data-aos=" data-aos="zoom-in">
              <div className="timeline-badge">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">HackRx 2.0 Grand Finale:</h3>
                  <strong>24ᵗʰ July 2021</strong>
                </div>
                <div className="timeline-body">
                  <p>It always seems impossile, until it's done</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
