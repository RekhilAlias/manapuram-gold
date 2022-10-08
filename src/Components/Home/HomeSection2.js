import React from "react";
import { BsFillLightningFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { CgSandClock } from "react-icons/cg";
import { GiLifeSupport } from "react-icons/gi";

function HomeSection2() {
  return (
    <div className="home_section2">
      <div className="home_section_head">
        <h1>
          Manappuram<span> Advantages</span>
        </h1>
      </div>

      <div className="home_section2_card_main">
        <div className="home_section2_box">
          <div className="child_one">
            <div className="box">
              <div className="icon-flex">
                <BsFillLightningFill
                  size={30}
                  style={{ marginTop: "1em", marginRight: "1em" }}
                />{" "}
                <p>Instant Disbursal</p>
              </div>
            </div>
          </div>

          <div className="child_two">
            <div className="box">
              <div className="icon-flex">
                <CgSandClock
                  size={30}
                  style={{ marginTop: "1em", marginRight: "1em" }}
                />{" "}
                <p>Flexible Tenure</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home_section2_card_main">
        <div className="home_section2_box">
          <div className="child_one">
            <div className="box">
              <div className="icon-flex">
                <GiReceiveMoney
                  size={30}
                  style={{ marginTop: "1em", marginRight: "1em" }}
                />{" "}
                <p>Anytime repayment</p>
              </div>
            </div>
          </div>

          <div className="child_two">
            <div className="box">
              <div className="icon-flex">
                <GiLifeSupport
                  size={30}
                  style={{ marginTop: "1em", marginRight: "1em" }}
                />{" "}
                <p>Free Insurance Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team-main">
        <div className="team"></div>
      </div>
    </div>
  );
}

export default HomeSection2;
