import nav from "../css/navigation.module.css";
import button from "../css/button.module.css";
import useNav from "../hooks/useNav";

export default function Navigation() {
  const { linkRef, openNav, closeNav } = useNav();

  const navLinks = document.querySelectorAll("a");
  const navBar = document.querySelector("ul");

  navLinks.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
    });
  });

  return (
    <>
      <nav>
        <div className="wrapper wrapper-nav">
          <div className={nav.logo}>
            <h3>
              Port<span>folio</span>
            </h3>
          </div>
          <ul ref={linkRef}>
            <li>
              <button onClick={closeNav} className={button.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#ffffff"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
            </li>
            <li>
              <a className="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#educ">Education</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
          </ul>
          <button onClick={openNav} className={button.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#ffffff"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
