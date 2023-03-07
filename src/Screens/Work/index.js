import React from "react";

function Work() {
  return (
    <div>
      <section className="hero is-white is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns  is-vcentered reverse-columns">
              <div
                data-aos="fade-right"
                className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-5-desktop is-offset-1-desktop
          is-5-widescreen is-offset-1-widescreen
          is-5-fullhd is-offset-1-fullhd"
              >
                <h1 className="title titled is-1 mb-6">
                  Brands I’ve Worked with
                </h1>
                <h2 className="subtitle subtitled">
                  SLYCAN Trust | Colombo Transparency International Sri Lanka |
                  Colombo
                </h2>
              </div>
              <div
                data-aos="fade-down"
                className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-4-desktop is-offset-1-desktop
          is-4-widescreen is-offset-1-widescreen
          is-4-fullhd is-offset-1-fullhd"
              >
                <figure className="image is-square">
                  <img src="./ss.png" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-medium has-text-centered">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div data-aos="zoom-in-up" className="column is-8">
                <h1 className="title titled is-1 mb-6">
                  Quality work, <span id="typewriter" />
                </h1>
                <h2 className="subtitle subtitled">
                  I am responsible in any approach to any task that I undertake,
                  or situations that I am presented with. I have a clear,
                  logical mind with a practical approach to problem-solving. I
                  am a punctual and motivated individual who is able to work in
                  a busy environment and meet higher standards of work.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
