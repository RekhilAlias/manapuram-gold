import React from "react";
import Icon1 from "../../Assets/Images/hand1.png";
import Icon2 from "../../Assets/Images/hand2.png";
import Icon3 from "../../Assets/Images/hand3.png";

function HomeSection4() {
  return (
    <div className="final-last-container">
      <div className="empty"></div>
      <div className="final-last-head-main">
        <p>Our Service Executives Follow the</p>
        <h1>Our Service Executives Follow the</h1>
      </div>

      <div className="boxcard-container-main">
        <div className="boxchild-card-one">
          <div className="boxcard-head">
            <span>
              <img src={Icon1} />
            </span>{" "}
            <h1>
              Usage of Masks <br />
              and Gloves
            </h1>
          </div>
        </div>

        <div className="boxchild-card-two">
          <div className="boxcard-head">
            <span>
              <img src={Icon2} />
            </span>
            <h1>
              Zero Contact
              <br />
              and Gloves
            </h1>
          </div>
        </div>

        <div className="boxchild-card-three">
          <div className="boxcard-head">
            <span>
              <img src={Icon3} />
            </span>
            <h1>
              Sanitization of
              <br /> materials <br /> & tools
              <br /> and Gloves
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection4;
