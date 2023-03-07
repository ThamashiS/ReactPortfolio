import React from "react";

function AboutMe() {
  return (
    <section className="hero is-black is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns  is-vcentered reverse-columns">
            <div
              className="column
          is-10-mobile 
          is-10-tablet 
          is-5-desktop 
          is-5-widescreen 
          is-5-fullhd "
              data-aos="fade-down"
            >
              <h2 className="title is-3">Hello, I am</h2>
              <h2 className="title titled is-1 mb-6">Thamashi Senavirathna</h2>
              <div className="buttons">
                <button className="button is-primary is-outlined">
                  Download Resume
                </button>
                <button className="button is-primary is-outlined">
                  Get in Touch
                </button>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="column
          is-10-mobile 
          is-10-tablet 
          is-6-desktop 
          is-7-widescreen 
          is-4-fullhd is-offset-1-fullhd"
            >
              <figure className="image">
                <img src="./Thama.jpeg" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
