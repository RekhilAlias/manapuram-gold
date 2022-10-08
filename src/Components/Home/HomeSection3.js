import React from "react";
import icon1 from "../../Assets/Images/icon1.webp";
import icon2 from "../../Assets/Images/icon2.webp";
import icon3 from "../../Assets/Images/icon3.webp";

function HomeSection3() {
  return (
    <div className="second-last-container">
      <div className="second-last-head-main">
        <p>Avail Doorstep Gold Loans in</p>
        <h1>3 Easy Steps</h1>
      </div>

      <div className="card-container-main">
        <div className="child-card-one">
            <img src={icon1} alt="img" />
          <div className="card-head">
            <h1>Apply For A Gold Loan</h1>
            <p>Schedule your appointment</p>
          </div>
          <div className="empty"></div>
        </div>

        <div className="child-card-two">
        <img src={icon2} alt="img" />
          <div className="card-head">
            <h1>
              Get Your Gold Valued At
              <br />
              Your Home
            </h1>
            <p>Our service executives carry out</p>{" "}
            <p> the processes at your doorstep</p>
          </div>
          <div className="empty"></div>
        </div>

        <div className="child-card-three">
        <img src={icon3} alt="img" />
          <div className="card-head">
            <h1>
              Get Instant Disbursal Of <br /> The Loan Amount
            </h1>
            <p>Money will be transferred</p>
            <p>Money will be transferred</p>{" "}
          </div>
          <div className="empty"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection3;
