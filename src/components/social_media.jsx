import React from "react";
import "../components/css/soicalmedia.css"; // ตรวจชื่อไฟล์ให้ตรง (soicalmedia)

const SocialMedia3DIcons = () => {
  return (
    <div className="SocialMedia">
      <ul>
        <li>
          <a
            className="email-link"
            aria-label="Email"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=catc76599@gmail.com&su=สนใจresume+คุณมาเพิ่มให้หน่อย&body=เรียน+ผู้สมัครงาน%2C%0A%0Aขอบคุณที่ให้โอกาสเราในการพูดคุยสัมภาษณ์งานกับคุณเมื่อเร็วๆ+นี้+เรารู้สึกประทับใจในความสามารถและประสบการณ์ของคุณ+และอยากขอข้อมูลเพิ่มเติมเกี่ยวกับประวัติส่วนตัวหรือเอกสารเพิ่มเติมเพื่อช่วยในการประเมินผลการพิจารณา%0A%0Aโปรดส่งข้อมูลเพิ่มเติมกลับมาที่อีเมลนี้+หรือติดต่อเราเพื่อสอบถามข้อมูลเพิ่มเติม+เรายินดีที่จะตอบทุกข้อสงสัยของคุณ%0A%0Aขอบคุณมาก%0A%0Aทีมงาน"
            target="_blank"
            rel="noreferrer"
          >
            {/* 4 เส้นเอฟเฟกต์ */}
            <span />
            <span />
            <span />
            <span />
            {/* ไอคอนจริง */}
            <span className="fa fa-envelope icon" />
          </a>
        </li>

        <li>
          <a className="phone" aria-label="Phone" href="tel:0961488937">
            <span />
            <span />
            <span />
            <span />
            <span className="fa fa-phone icon" />
          </a>
        </li>

        <li>
          <a
            className="instagram"
            aria-label="GitHub"
            href="https://github.com/gtx550000"
            target="_blank"
            rel="noreferrer"
          >
            <span />
            <span />
            <span />
            <span />
            <span className="fa fa-github icon" />
          </a>
        </li>

        <li>
          <a
            className="facebook"
            aria-label="Notion"
            href="https://www.notion.so/My-Life-179d755927f480948b42dbab1f529b55"
            target="_blank"
            rel="noreferrer"
          >
            <span />
            <span />
            <span />
            <span />
            {/* ใช้ fa-book ให้ตรงกับ Font Awesome */}
            <span className="fa fa-book icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia3DIcons;
