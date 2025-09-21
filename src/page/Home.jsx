import React, { useMemo } from "react";
import Card from "../components/cardprofile";
import ProfilDeil from "../components/profiledetail";
import Social from "../components/social_media";
import "../components/css/popup.css";

const Home = () => {
  // ใช้ useMemo กันสร้าง object ใหม่ทุก re-render (แม้จะถูกมาก แต่ชัดเจน/กันพลาด)
  const featurette1 = useMemo(
    () => ({
      title: "Hi it me korn",
      subtitle: "",
      description:
        "Hello,😎🤚 nice to meet you! I am someone who enjoys learning new things and is interested in technology, especially website creation. Although I'm not very skilled yet, I'm eager to learn. In terms of personality, I am a person who lacks confidence and is not very good at speaking, but I feel that I have improved now. Nice to meet you!",
      imgSrc:
        "https://storage.googleapis.com/tda-website/2021/11/intro-coding.jpeg",
      reverse: true,
      // ใส่ alt ถ้า ProfilDeil รองรับ
      alt: "Intro to coding illustration",
      // เผื่อ ProfilDeil ส่งผ่าน prop ให้ <img> สามารถใช้ loading/decoding
      loading: "lazy",
      decoding: "async",
    }),
    []
  );

  return (
    <main className="fade-in" id="top">
      {/* Hero / Card */}
      <section aria-label="Profile card" className="mb-4">
        <Card />
      </section>

      {/* Featurette */}
      <section className="container px-5 py-5">
        <ProfilDeil data={featurette1} />
      </section>

      <hr className="featurette-divider" />

      {/* Social + Footer */}
      <section className="container px-5">
        <Social />
        <footer className="container d-flex justify-content-end py-3">
          <p className="mb-0">
            <a href="#top">Back to Top</a>
            <span className="mx-2">·</span>
            <a href="/aboutme">Go to Aboutme</a>
          </p>
        </footer>
      </section>
    </main>
  );
};

export default Home;
