import button from "../css/button.module.css";
import home from "../css/homepage.module.css";
import cv from "../assets/Felix.pdf";

export default function Intro() {
  return (
    <>
      <section id="home" className={home.heroSection}>
        <p className={home.myName}>
          Hello, I am<span className="name"> Felix</span>
        </p>
        <h1>I'm Front-end Developer</h1>
        <p className={home.intro}>
          <mark> I'm a self-taught front-end developer.</mark> Passionate about
          building interactive and responsive web experiences. I'm currently
          focused on sharpening my skills and exploring new technologies to grow
          as a developer.
        </p>

        <a className={button.btn} href={cv} download>
          Download CV
        </a>
      </section>
    </>
  );
}
