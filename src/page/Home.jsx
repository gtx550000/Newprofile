import React from 'react';
import Navbar from '../components/navbar';
import Card from '../components/cardprofile';
import CardDetil from '../components/carddetails';
import ProfilDeil from '../components/profiledetail';
import Social from '../components/social_media';

import '../components/css/popup.css';

const Home = () => {
  const featurette1 = {
    title: "Hi it me korn",
    subtitle: "",
    description: "Hello,😎🤚 nice to meet you! I am someone who enjoys learning new things and is interested in technology, especially website creation. Although I'm not very skilled yet, I'm eager to learn. In terms of personality, I am a person who lacks confidence and is not very good at speaking, but I feel that I have improved now. Nice to meet you!",
    imgSrc:
      "https://storage.googleapis.com/tda-website/2021/11/intro-coding.jpeg",
    reverse: true, // Default layout

    
  };
  return (
    <div className='fade-in'>

      <div>
        <Card />
        <br />
      </div>

      {/*<div className="container mt-4 mb-4 px-5 py-2"> 
        <CardDetil />
      </div>*/}

      <div className="container px-5 py-5">
        <ProfilDeil data={featurette1} />
      </div>


      <hr className="featurette-divider" />

      <div className="container px-5">
        <Social />
        <footer class="container">
              <p class="float-end"><a href="#">Back to top</a>&nbsp;&nbsp;<a href="/#/aboutme">go to aboutme</a></p>
              <p>&copy; 2017–2024 Company, Inc.&middot;</p>
        </footer>
      </div>
      
    </div>
  );
};

export default Home;
