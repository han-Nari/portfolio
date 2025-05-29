import project from "../css/project.module.css";
import btn from "../css/button.module.css";
import styles from "../css/skills.module.css";
import { Link } from "react-router-dom";

export default function Project() {
  return (
    <>
      <h2 className="title">
        <span className={styles.h2}>"Project</span>
      </h2>
      <div className={project.cards}>
        <div className={project.card}>
          <div className={project.top}>
            <img src="../src/assets/sample.png" alt="" />
          </div>
          <div className={project.center}>
            <h3>Project Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              atque?
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
            <h3>Project Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos magni perferendis tempora quidem quisquam porro sint
              voluptatibus beatae provident neque?
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
