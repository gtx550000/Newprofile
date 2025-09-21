import React, { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/imgprofile.css"

const GreatExperienceSection = () => {
  // เก็บ data ไว้รวมที่เดียว แก้ง่าย/ต่อยอดง่าย
  const skills = useMemo(
    () => [
      "Playwright",
      "Functional / Manual Testing",
      "Defect Reporting",
      "React",
      "Material UI",
      "Bootstrap",
      "ChatGPT",
      "Google",
      "GitHub",
    ],
    []
  );

  return (
    <section className="container my-5">
      <div className="row justify-content-center align-items-center g-0">
        {/* Image */}
        <div className="col-12 col-sm-4 col-md-3 col-lg-2">
          <figure className="position-relative m-0">
           <img
              src="https://reg.kmutnb.ac.th/regapiweb2/api/th/Fileimg/Getstuimgurl/wzQgAKhgNAIA%3EX5cBlZ4kg=="
              alt="Portrait of Salan Kosol"
              className="img-fluid rounded-3 mx-auto d-block profile-img"
              loading="lazy"
            />
          </figure>
        </div>

        {/* Content */}
        <div className="col-12 col-md-8 col-lg-7 p-4 p-md-5">
          <header className="mb-3">
            <span className="text-uppercase text-muted small d-inline-block mb-1">
              About
            </span>
            <h2 className="h3 h2-md fw-bold mb-0">Salan Kosol</h2>
          </header>

          {/* Summary */}
          <p className="text-secondary mb-4" style={{ lineHeight: 1.7 }}>
            Computer Science student at King Mongkut’s University of Technology
            North Bangkok with hands-on experience in web development and
            software testing. Skilled in Playwright, functional/manual testing,
            defect reporting, and frontend development using React, Material UI,
            and Bootstrap. Passionate about ensuring both functionality and user
            experience. Looking for an opportunity to contribute and grow as a
            QA Engineer Intern while leveraging my web development background.
          </p>

          {/* Skills */}
          <div className="mb-3">
            <h6 className="text-muted text-uppercase small mb-2">Skills</h6>
            <ul className="list-inline m-0">
              {skills.map((s) => (
                <li key={s} className="list-inline-item mb-2">
                  <span className="badge bg-light text-dark border">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="d-flex flex-wrap gap-2">
            {/* วิธีที่แนะนำ: ใช้ <a download> ตรงๆ (ไฟล์ต้องอยู่ใน public/) */}
            <a
              className="btn btn-success"
              href="/resume_salan_kosol.pdf"
              download="Salan_Kosol_Resume.pdf"
            >
              Download Resume
            </a>
            {/* fallback (ถ้าเบราเซอร์ไม่รองรับ download attribute) */}
            <noscript>
              <a className="btn btn-outline-secondary" href="/resume_salan_kosol.pdf" target="_blank" rel="noopener noreferrer">
                View Resume (opens new tab)
              </a>
            </noscript>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreatExperienceSection;
