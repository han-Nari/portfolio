import skills from "../css/skills.module.css";
export default function Skills() {
  return (
    <>
      <h2 className="title">
        <span className={skills.h2}>"Skills</span>
      </h2>
      <div className={skills.skills}>
        <img className="img" src="../src/assets/reactjs.svg" alt="reactjs" />
        <img className="img" src="../src/assets/github.svg" alt="githun" />
        <img className="img" src="../src/assets/css.svg" alt="css" />
        <img className="img" src="../src/assets/js.svg" alt="js" />
        <img className="img" src="../src/assets/html.svg" alt="html" />
        <img className="img" src="../src/assets/git.svg" alt="git" />
        <img className="img" src="../src/assets/vs.svg" alt="vs code" />
        <img className="img" src="../src/assets/figma.svg" alt="figma" />
      </div>
    </>
  );
}
