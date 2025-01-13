import React from "react";
import ProfilDeil from '../components/profiledetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/popup.css';

const ce = () => {
    const featurette3 = {
        title: "1. Chat GPT",
        subtitle: "",
        description: "I use ChatGPT to find various information, such as how to write an interesting self-introduction, and to quickly find solutions to different problems.😊",
        imgSrc:
            "https://venturebeat.com/wp-content/uploads/2023/05/Untitled-design-78.png?w=1024?w=1200&strip=all",
        reverse: true, // Default layout


    };

    const featurette4 = {
        title: "2. Bootstrap",
        subtitle: "",
        description: "I use Bootstrap to structure websites and customize them to meet specific requirements.😊",
        imgSrc:
            "https://wpdean.com/wp-content/uploads/2024/05/what-is-bootstrap.jpg",
        reverse: true, // Default layout


    };

    const featurette5 = {
        title: "3. React vite",
        subtitle: "",
        description: "I use React to build websites and divide each part into components for easier usage.",
        imgSrc:
            "https://i0.wp.com/devtai.com/wp-content/uploads/2024/05/Screenshot-2024-05-15-180027.png?resize=750%2C361&ssl=1",
        reverse: true, // Default layout


    };

    const featurette6 = {
        title: "4. Google",
        subtitle: "",
        description: "I use Google to search for various information, such as images for websites.",
        imgSrc:
            "https://www.adpt.news/wp-content/uploads/2017/06/google-logo.jpg",
        reverse: true, // Default layout


    };

    const featurette7 = {
        title: "5. Friends",
        subtitle: "",
        description: "My friends give advice on designing websites or help solve problems that I don't understand.",
        imgSrc:
            "https://youthforeurope.eu/wp-content/uploads/2021/10/young-people-3575167_1920-1024x682.jpg",
        reverse: true, // Default layout


    };

    return (
        <div className="fade-in">

            <div>
                <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
                    <div class="col-md-6 p-lg-5 mx-auto my-5">
                        <h1 class="display-3 fw-bold">Credit 🗃</h1>
                        <h3 class="fw-normal text-muted mb-3">" Tools used "</h3>
                        <div class="d-flex gap-3 justify-content-center lead fw-normal">
                            {/**<a class="icon-link" href="https://www.notion.so/My-Life-179d755927f480948b42dbab1f529b55">
                                notion me
                                <svg class="bi"><use xlink:href="#chevron-right" /></svg>
                            </a> */}
                        </div>
                    </div>
                    <div class="product-device shadow-sm d-none d-md-block"></div>
                    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>
            </div>

            <div className="container px-5 py-5">
                <ProfilDeil data={featurette3}></ProfilDeil>
            </div>

            <hr className="featurette-divider" 
            style={{
                width: "80%", /* กำหนดความกว้าง */
                margin: "20px auto", /* จัดให้อยู่กึ่งกลาง */
                borderTop: "2px solid " /* เส้นสีเทา */
              }}/>

            <div className="container px-5 py-5">
                <ProfilDeil data={featurette4}></ProfilDeil>
            </div>

            <hr className="featurette-divider" 
            style={{
                width: "80%", /* กำหนดความกว้าง */
                margin: "20px auto", /* จัดให้อยู่กึ่งกลาง */
                borderTop: "2px solid " /* เส้นสีเทา */
              }}/>

            <div className="container px-5 py-5">
                <ProfilDeil data={featurette5}></ProfilDeil>
            </div>

            <hr className="featurette-divider" 
            style={{
                width: "80%", /* กำหนดความกว้าง */
                margin: "20px auto", /* จัดให้อยู่กึ่งกลาง */
                borderTop: "2px solid " /* เส้นสีเทา */
              }}/>

            <div className="container px-5 py-5">
                <ProfilDeil data={featurette6}></ProfilDeil>
            </div>

            <hr className="featurette-divider" 
            style={{
                width: "80%", /* กำหนดความกว้าง */
                margin: "20px auto", /* จัดให้อยู่กึ่งกลาง */
                borderTop: "2px solid " /* เส้นสีเทา */
              }}/>
            
            <div className="container px-5 py-5">
                <ProfilDeil data={featurette7}></ProfilDeil>
            </div>

            <hr className="featurette-divider" />
              
            <div className="container px-5">
       
        <footer class="container">
              <p class="float-end"><a href="#">Back to top</a>&nbsp;&nbsp;<a href="/aboutme">Back to aboutme</a></p>
              <p>&copy; 2017–2024 Company, Inc.&middot;</p>
        </footer>
      </div>
        </div>

    )


}
export default ce;