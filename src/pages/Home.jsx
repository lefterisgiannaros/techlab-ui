import React from "react";

function Home() {
  return (
    <div className="home-content row">
      {/* CONTENT LEFT */}
      <div className="content-left col-md-7">
        <h1>No More</h1>
        <h1>Excuses To Learn</h1>
        <h4>
          Learn anything you need and want to know through our online courses
          from the very best mentors. Available 24 hours.
        </h4>
        <button className="btn-curved btn-darkgrey">Get Started</button>

        <div className="stats-container">
          <div className="stat">
            <div className="txt-top">250+</div>
            <div className="txt-bottom">Professional Mentors</div>
          </div>

          <div className="divider circle circle-sm bg-blk"></div>
          
          <div className="stat">
            <div className="txt-top">3000+</div>
            <div className="txt-bottom">Course Materials</div>
          </div>

          <div className="divider circle circle-sm bg-blk"></div>

          <div className="stat">
            <div className="txt-top">1000+</div>
            <div className="txt-bottom">Active Learners</div>
          </div>
        </div>
      </div>

      {/* CONTENT RIGHT */}
      <div className="col-md-5 d-none d-xl-block position-relative">
        <div className="left-circle circle circle-lg bg-white border-blk"></div>
        <div className="left-circle-sm-blk circle circle-sm bg-blk "></div>

        <div className="top-blk-circle circle circle-lg bg-blk border-blk"></div>

        <div className="ornament">
          <div className="inside-circle circle circle-sm border-blk"></div>
        </div>

        <div className="rect-orange"></div>
        <div className="rect-green"></div>

        <img
          className="circled-lettering-logo"
          src="/CircledLetteringLogo.svg"
          alt="CircledLetteringLogo"
        ></img>
      </div>
    </div>
  );
}

export default Home;
