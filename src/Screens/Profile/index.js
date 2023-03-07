import React from "react";

function Profile() {
  return (
    <section className="hero .is-$grey-darker is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns  is-vcentered">
            <div
              data-aos="fade-left"
              className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-4-desktop is-offset-1-desktop
          is-4-widescreen is-offset-1-widescreen
          is-4-fullhd is-offset-1-fullhd"
            >
              <figure className="image ">
                <img src="./tt.png" />
              </figure>
            </div>
            <div
              data-aos="fade-down"
              className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-5-desktop is-offset-1-desktop
          is-5-widescreen is-offset-1-widescreen
          is-5-fullhd is-offset-1-fullhd"
            >
              <h1 className="titled title is-1 mb-6">About me</h1>
              <h2 className="subtitled subtitle">
                I am responsible in any approach to any task that I undertake,
                or situations that I am presented with. I have a clear, logical
                mind with a practical approach to problem-solving. I am a
                punctual and motivated individual who is able to work in a busy
                environment and meet higher standards of work.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
