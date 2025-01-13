import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const GreatExperienceSection = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
       
        <div className="col-md-5 text-center">
          <div className="position-relative">
            <img
              src="https://reg.kmutnb.ac.th/regapiweb2/api/th/Fileimg/Getstuimgurl/wzQgAKhgNAIA%3EX5cBlZ4kg=="
              alt="Building"
              className="img-fluid"
              style={{ maxHeight: "250px", borderRadius: "8px" }}
            />
            
          </div>
        </div>

        
        <div className="col-md-5">
          <h5 className="text-uppercase text-muted mb-2 py-1">About Me</h5>
          <h2 className="text-dark fw-bold mb-4">Salan Kosol</h2>
          <p className="text-muted">
          I am a student at King Mongkut's University of Technology North Bangkok, studying computer science. I have a strong interest in website design, web application development, website testing, and IT support. With my experience and passion in these fields, I am excited and ready to embrace new internship opportunities and learn from a dynamic organization.

          </p>
          <button className="btn btn-success d-flex align-items-center gap-2">
            Watch Video <i className="bi bi-play-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GreatExperienceSection;