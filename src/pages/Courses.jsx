import React from 'react';

function Courses() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Our Courses</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">Learn to build modern websites.</p>
              <a href="#" className="btn btn-primary">Enroll Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Data Science</h5>
              <p className="card-text">Master data analysis and visualization.</p>
              <a href="#" className="btn btn-primary">Enroll Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
