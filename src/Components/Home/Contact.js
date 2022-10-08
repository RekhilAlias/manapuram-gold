import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import "../../Assets/Styles/Home/Contact.scss";
import Swal from "sweetalert2";

function Contact() {
  const options = [
    { value: "koothattukulam", label: "koothattukulam" },
    { value: "Kottayam", label: "Kottayam" },
    { value: "Idukki", label: "Idukki" },
    { value: "Other", label: "Other" },
  ];

  const style = {
    control: (base, state) => ({
      ...base,
      border: "none !important",
      boxShadow: "none",
    }),
  };

  const [selectedOption, setSelectedOption] = useState("");
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Phone, SetPhone] = useState("");
  const [Amount, SetAmount] = useState("");
  const [Checkbox, SetCheckbox] = useState("");
  let Time = new Date().toLocaleString();
  let Branch = selectedOption;

  const handlesubmit = (e) => {
    e.preventDefault();
    const Myobj = {
      Name,
      Email,
      Phone,
      Amount,
      Checkbox,
      Time,
      Branch: Branch.value,
    };
    //form validation
    if (Name === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "'Name can't be empty'",
        timer: "5000",
      });
    } else if (Name === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "'Name can't be empty'",
        timer: "5000",
      });
    } else if (Phone.length < 4) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Number should be at least 5 charcters long",
        timer: "5000",
      });
    } else if (Phone === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Phone number can't be empty",
        timer: "5000",
      });
    } else if (selectedOption === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must select a Branch",
        timer: "5000",
      });
    } else if (Checkbox === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must agree to the terms first",
        timer: "5000",
      });
    } else if (Email.length < 3) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email should be at least 3 charcters long",
        timer: "5000",
      });
    } else if (Email.split("").filter((x) => x === "@").length !== 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email should contain @",
        timer: "5000",
      });
    } else if (Email.indexOf(".") === -1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email should contain at least one dot",
        timer: "5000",
      });
    } else if (true) {
      axios
        .post(
          "",
          Myobj
        )
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Thank you",
            text: "Your submission has been sent",
            timer: "5000",
          });
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something's wrong..",
            timer: "5000",
          });
        })
        .finally(() => {
          setTimeout(() => {
            reseting();
          }, 1000);
        });
    }
  };

  const reseting = () => {
    SetName("");
    SetEmail("");
    SetPhone("");
    SetAmount("");
    setSelectedOption("");
    SetCheckbox("");
    window.location.reload(true);
  };

  return (
    <div className="contact-home-main-container">
      <div className="contact-home-main-box-parent">
        <div className="contact-main-box1">
            
        </div>
        <div className="contact-main-box2">
          <div className="emptyhead"></div>
          <div className="contact-form">
            <form name="mc-embedded-subscribe-form" className="validate">
              <div className="contact-head">
                <h1>GET THE BEST VALUE ON</h1>
                <h1>YOUR GOLD TODAY!</h1>
              </div>
              <div className="contact-inner-space">
                <div className="input-margin">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="Name"
                    id="mce-NAME"
                    onChange={(e) => SetName(e.target.value)}
                    min={1}
                    max={30}
                    required={true}
                    className="input-fileds"
                  />
                </div>
                <div className="input-margin">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="Email"
                    className="input-fileds"
                    id="mce-EMAIL"
                    onChange={(e) => SetEmail(e.target.value)}
                    min={4}
                    max={80}
                    required={true}
                  />
                </div>

                <div className="input-margin">
                  <label className="label">Phone</label>
                  <input
                    type="text"
                    name="Phone"
                    className="input-fileds"
                    id="mce-PHONE"
                    onChange={(e) => SetPhone(e.target.value)}
                    required={true}
                    min={2}
                    max={50}
                  />
                </div>

                <div className="input-margin">
                  <label className="label">Choose a Branch</label>
                  <Select
                    name="Branch"
                    onChange={setSelectedOption}
                    options={options}
                    id="mce-Branch"
                    required={true}
                    className="input-fileds"
                    styles={style}
                  />
                </div>

                <div className="input-margin">
                  <label className="label">Required Amount</label>
                  <input
                    type="text"
                    name="Amount"
                    className="input-fileds"
                    id="mce-Amount"
                    onChange={(e) => SetAmount(e.target.value)}
                  />
                </div>
                <div className="inline-checkbox-parent">
                  <div className="inline-checkbox1-child1">
                    <div className="input-fileds-checkout">
                      <input
                        type="checkbox"
                        value="true"
                        name="Checkbox1"
                        id="mce-CHECKBOX1-0"
                        onChange={(e) => SetCheckbox(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="inline-checkbox1-child2">
                    <label htmlFor="mce-CHECKBOX1-0">
                      <span>
                        I authorize Manappuram Finance Limited and its
                        representatives to contact me by telephone/ email/ SMS
                        with reference to my application. This consent will
                        override any registration for DNC / NDNC.
                      </span>
                    </label>
                  </div>
                </div>
                <div className="input-fileds-button">
                  <input
                    type="submit"
                    value="Submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="input-fileds-button1"
                    onClick={handlesubmit}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
