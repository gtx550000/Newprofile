import React from "react";
import Aboutprofile from "../components/aboutmeprofile";
import ProfilDeil from "../components/profiledetail";
import MostUsedLanguages from "../components/programming_laguage";

import Social from '../components/social_media';
import '../components/css/popup.css';

const About = () => {
    const featurette1 = {
        title: " 1. Website buy game and rent game",
        subtitle: "",
        description: "We focus on designing a purchasing website that meets customer needs, with an accessible and user-friendly interface. Our goal is to transform the traditional game-buying experience and ensure that users receive the best possible experience",
        imgSrc:
            "https://cdn.xsolla.net/strapi-bucket-prod/medium_How_To_Generate_Game_Sales_From_Your_Online_Store_67bbf56370/medium_How_To_Generate_Game_Sales_From_Your_Online_Store_67bbf56370.png",
        reverse: false, // Default layout
        
    };

    const featurette2 = {
        title: " 2. Website Numerical",
        subtitle: "",
        description: "The program is about numerical calculations using mathematical formulas, such as differentiation or integration, and visualizing them as graphs. ",
        imgSrc:
            "https://aijourney.so/_next/image?url=https%3A%2F%2Faijourney-store.s3.amazonaws.com%2Ftool-121%2F1713941702254-microsoft-math-solver-3.png&w=3840&q=75",
        reverse: true, // Default layout
        
    };
        

    return (
        <div className="fade-in">
            <div>
              <Aboutprofile />
            </div>

            <hr className="featurette-divider"
            style={{
                width: "80%", /* กำหนดความกว้าง */
                margin: "20px auto", /* จัดให้อยู่กึ่งกลาง */
                borderTop: "2px solid " /* เส้นสีเทา */
              }} />
           
            <div className="container px-5 py-5">
                <ProfilDeil data={featurette1} />
               
            </div>

            <h className="textcenter">("🥰Websites are developed collaboratively as a team and Example picture.")</h> 

            <hr className="featurette-divider" 
            style={{
                width: "80%", /* กำหนดความกว้าง */
                margin: "20px auto", /* จัดให้อยู่กึ่งกลาง */
                borderTop: "2px solid " /* เส้นสีเทา */
              }}/>

            
            <div className="container px-5 py-5">
                <ProfilDeil data={featurette2} />
               
            </div>

            
            <h className="textcenter">("🥰Websites are developed collaboratively as a team and Example picture.")</h> 

            
          
            {/** 
            <div className="container px-5 py-5">
                <MostUsedLanguages/>
            </div>*/}

            <hr className="featurette-divider" />
            <div className="container px-5">
                <footer class="container">
                <p class="float-end"><a href="/">Back to Home</a>&nbsp;&nbsp;<a href="/credit">go to credit</a></p>
                <p>&copy; 2017–2024 Company, Inc. &middot; </p>
                </footer>
            </div>


        </div>
    )
}
export default About;