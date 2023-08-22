// components/pages/Features.js
import React from 'react';

function Features() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Features</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card feature-card feature-card-1">
            <div className="card-body">
              <h5 className="card-title">Responsive Design</h5>
              <p className="card-text">Our courses are designed to work on any device.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card feature-card feature-card-2">
            <div className="card-body">
              <h5 className="card-title">Expert Instructors</h5>
              <p className="card-text">Learn from industry professionals with real-world experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
