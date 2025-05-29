import Navigation from "./Navigation";
import home from "../css/homepage.module.css";
import Intro from "./Intro";
import Education from "./Education";
import Skills from "./Skills";
import Project from "./Project";

export default function Homepage() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main className={home.body}>
        <div className="wrapper">
          <Intro />
        </div>
      </main>

      <section className="wrapper-educ">
        <div className="wrapper">
          <Education />
        </div>
      </section>

      <section className="wrapper-skills">
        <div className="wrapper wrapper-skill">
          <Skills />
        </div>
      </section>

      <section className="wrapper-project">
        <div className="wrapper">
          <Project />
        </div>
      </section>
    </>
  );
}
