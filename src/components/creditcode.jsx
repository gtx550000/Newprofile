import React, { useMemo } from "react";
import ProfilDeil from "../components/profiledetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/popup.css";


const Divider = () => (
  <hr className="featurette-divider my-4 custom-divider" />
);

const Credits = () => {
  const features = useMemo(
    () => [
      {
        title: "1. ChatGPT",
        subtitle: "",
        description:
          "I use ChatGPT to find various information, such as how to write an interesting self-introduction, and to quickly find solutions to different problems. 😊",
        imgSrc:
          "https://imgproxy.divecdn.com/_fW1I_fOopUYrkHCAmJoata24EeU0oclzbO3_Gt_reU/g:ce/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9HZXR0eUltYWdlcy0xNDU1MjQwMzY2LmpwZw==.webp",
        alt: "ChatGPT usage example",
        reverse: true,
      },
      {
        title: "2. Bootstrap",
        subtitle: "",
        description:
          "I use Bootstrap to structure websites and customize them to meet specific requirements. 😊",
        imgSrc: "https://wpdean.com/wp-content/uploads/2024/05/what-is-bootstrap.jpg",
        alt: "Bootstrap logo",
        reverse: true,
      },
      {
        title: "3. React + Vite",
        subtitle: "",
        description:
          "I use React to build websites and split the UI into reusable components for easier maintenance.",
        imgSrc: "https://miro.medium.com/1*_7w3dSyzgf6Tgb3iBe-o1g.png",
        alt: "React + Vite graphic",
        reverse: true,
      },
      {
        title: "4. Google",
        subtitle: "",
        description:
          "I use Google to search for various information, such as images for websites.",
        imgSrc: "https://www.adpt.news/wp-content/uploads/2017/06/google-logo.jpg",
        alt: "Google logo",
        reverse: true,
      },
      {
        title: "5. GitHub",
        subtitle: "",
        description:
          "I use GitHub to host my projects, collaborate with others, and track changes in my code.",
        imgSrc:
          "https://gitprotect.io/blog/wp-content/uploads/2022/06/github-bp-800x400.png",
        alt: "GitHub logo",
        reverse: true,
      },
       {
        title: "6. Friends",
        subtitle: "",
        description:
          "My friends give advice on designing websites or help solve problems that I don't understand.",
        imgSrc:
          "https://youthforeurope.eu/wp-content/uploads/2021/10/young-people-3575167_1920-1024x682.jpg",
        alt: "Group of friends collaborating",
        reverse: true,
      },
    ],
    []
  );

  return (
    <div className="fade-in">
      {/* Hero / Header */}
      <section className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold">Credit 🗃</h1>
          <h3 className="fw-normal text-muted mb-3">" Tools used "</h3>
          <div className="d-flex gap-3 justify-content-center lead fw-normal">
            {/* Optional links */}
            {/* <a className="icon-link" href="https://www.notion.so/My-Life-179d755927f480948b42dbab1f529b55">
              notion me
            </a> */}
          </div>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </section>

      {/* Featurettes */}
      {features.map((f, idx) => (
        <React.Fragment key={f.title}>
          <div className="container px-5 py-5">
            <ProfilDeil data={f} />
          </div>
          {idx !== features.length - 1 && <Divider />}
        </React.Fragment>
      ))}

      {/* Footer */}
      
       <div className="container px-5">
        <footer className="container">
          <p className="float-end">
             <a href="/aboutme">Go to Aboutme</a>&nbsp;&nbsp; <a href="#top">Back to Top</a>
          </p>
          <p>&copy;Credit by Bootstrap&middot;</p>
        </footer>
      </div>

      {/* Local style for divider (optional) */}
      <style>{`
        .custom-divider { 
          width: 80%;
          margin-left: auto; 
          margin-right: auto; 
          border-top: 2px solid rgba(58, 66, 73, 0.95); /* muted */
        }
      `}</style>
    </div>
  );
};

export default Credits;
