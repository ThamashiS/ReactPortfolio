import React from "react";

function Footer() {
  return (
    <section className="section" style={{ backgroundColor: "black" }} id="get">
      <div style={{ width: "90vw", maxWidth: "1170px", margin: "0 auto" }}>
        <h2
          className="title is-2"
          style={{
            textAlign: "center",
            marginBottom: "2cm",
            color: "rgb(255, 255, 255)",
          }}
        >
          Get in Touch
        </h2>
        <p
          style={{
            fontSize: "20px",
            textAlign: "center",
            color: "rgb(19, 195, 154)",
          }}
        >
          To contact me please fill up your details below.
        </p>
        <br />
        <br />
        <div style={{ width: "70%", margin: "0 auto" }}>
          <div className="field">
            <label className="label" style={{ color: "aliceblue" }}>
              Name
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label" style={{ color: "aliceblue" }}>
              Mobile
            </label>
            <div className="control ">
              <input
                className="input is-success"
                type="text"
                placeholder="Enter Your Mobile Number"
              />
            </div>
          </div>
          <div className="field">
            <label className="label" style={{ color: "aliceblue" }}>
              Email
            </label>
            <div className="control ">
              <input
                className="input is-danger"
                type="email"
                placeholder="Email input"
              />
            </div>
          </div>
          <div className="field">
            <label className="label" style={{ color: "aliceblue" }}>
              Message
            </label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Enter Your Message"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button
                className="button is-link"
                style={{ backgroundColor: "rgb(19, 195, 154)" }}
              >
                Submit
              </button>
            </div>
            <div className="control">
              <button
                className="button is-link is-light"
                style={{ color: "black" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
