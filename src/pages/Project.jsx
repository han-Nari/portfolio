import project from "../css/project.module.css";
import btn from "../css/button.module.css";
import styles from "../css/skills.module.css";
import { Link } from "react-router-dom";

export default function Project() {
  return (
    <>
      <h2 id="project" className="title">
        <span className={styles.h2}>"Project</span>
      </h2>
      <div className={project.cards}>
        <div className={project.card}>
          <div className={project.top}>
            <img
              src="../src/assets/challenge02.png"
              alt="Front-end Challenge 02"
            />
          </div>
          <div className={project.center}>
            <div className={project.code}>
              <img
                className={project.img}
                src="../src/assets/html.svg"
                alt="reactjs"
              />
              <img
                className={project.img}
                src="../src/assets/css.svg"
                alt="css"
              />
              <img
                className={project.img}
                src="../src/assets/js.svg"
                alt="html"
              />
            </div>
            <h3>Front-end Challenge 01</h3>
            <p>My first challenges in front-end mentor</p>
          </div>
          <div className={project.bottom}>
            <button className={btn.view}>
              <Link to="">Live View</Link>
            </button>
            <button className={btn.source}>
              <Link to="https://github.com/han-Nari/front-end-challenge/tree/main/challenges01">
                Source Code
              </Link>
            </button>
          </div>
        </div>

        <div className={project.card}>
          <div className={project.top}>
            <img
              src="../src/assets/challenge01.png"
              alt="Front-end Challenge 01"
            />
          </div>
          <div className={project.center}>
            <div className={project.code}>
              <img
                className={project.img}
                src="../src/assets/html.svg"
                alt="reactjs"
              />
              <img
                className={project.img}
                src="../src/assets/css.svg"
                alt="css"
              />
            </div>
            <h3>Front-end Challenge 02</h3>
            <p>My second challenge</p>
          </div>
          <div className={project.bottom}>
            <button className={btn.view}>
              <Link to="">Live View</Link>
            </button>
            <button className={btn.source}>
              <Link to="https://github.com/han-Nari/front-end-challenges02/tree/main/challenges02">
                Source Code
              </Link>
            </button>
          </div>
        </div>

        <div className={project.card}>
          <div className={project.top}>
            <img src="../src/assets/sample.png" alt="" />
          </div>
          <div className={project.center}>
            <div className={project.code}>
              <img
                className={project.img}
                src="../src/assets/reactjs.svg"
                alt="reactjs"
              />
              <img
                className={project.img}
                src="../src/assets/css.svg"
                alt="css"
              />
              <img
                className={project.img}
                src="../src/assets/html.svg"
                alt="html"
              />
            </div>
            <h3>Project Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              impedit laborum fuga, fugiat magni minus.
            </p>
          </div>
          <div className={project.bottom}>
            <button className={btn.view}>
              <Link to="https://github.com/han-Nari/front-end-challenges02">
                Live View
              </Link>
            </button>
            <button className={btn.source}>
              <Link to="">Source Code</Link>
            </button>
          </div>
        </div>

        <div className={project.card}>
          <div className={project.top}>
            <img src="../src/assets/sample.png" alt="" />
          </div>
          <div className={project.center}>
            <div className={project.code}>
              <img
                className={project.img}
                src="../src/assets/reactjs.svg"
                alt="reactjs"
              />
              <img
                className={project.img}
                src="../src/assets/css.svg"
                alt="css"
              />
              <img
                className={project.img}
                src="../src/assets/html.svg"
                alt="html"
              />
            </div>
            <h3>Project Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              impedit laborum fuga, fugiat magni minus.
            </p>
          </div>
          <div className={project.bottom}>
            <button className={btn.view}>
              <Link to="https://github.com/han-Nari/front-end-challenges02">
                Live View
              </Link>
            </button>
            <button className={btn.source}>
              <Link to="">Source Code</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
