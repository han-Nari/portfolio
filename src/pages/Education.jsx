import educ from "../css/educ.module.css";

export default function Education() {
  return (
    <>
      <h2 className="title bottom">
        <span className={educ.h2}>"Educational</span> Background
      </h2>
      <div className={educ.cards}>
        <div className={educ.card}>
          <span className={educ.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="80px"
              viewBox="0 -960 960 960"
              width="80px"
              fill="#ffffff"
            >
              <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
            </svg>
          </span>
          <div className={educ.text}>
            <h2>Elementary School</h2>
            <p>
              <span className="name">School:</span> Bagong Barrio Elementary
              School
            </p>
            <p>
              <span className="name">Year:</span> SY 2006-2010
            </p>
          </div>
        </div>

        <div className={educ.card}>
          <span className={educ.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="80px"
              viewBox="0 -960 960 960"
              width="80px"
              fill="#ffffff"
            >
              <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
            </svg>
          </span>
          <div className={educ.text}>
            <h2>Elementary School</h2>
            <p>
              <span className="name">School:</span> Lingunan Elementary School
            </p>
            <p>
              <span className="name">Year:</span> SY 2010-2012
            </p>
          </div>
        </div>

        <div className={educ.card}>
          <span className={educ.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="80px"
              viewBox="0 -960 960 960"
              width="80px"
              fill="#ffffff"
            >
              <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
            </svg>
          </span>
          <div className={educ.text}>
            <h2>High School</h2>
            <p>
              <span className="name">School:</span> Canumay West National High
              School
            </p>
            <p>
              <span className="name">Year:</span> SY 2012-2017
            </p>
          </div>
        </div>

        <div className={educ.card}>
          <span className={educ.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="80px"
              viewBox="0 -960 960 960"
              width="80px"
              fill="#ffffff"
            >
              <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
            </svg>
          </span>
          <div className={educ.text}>
            <h2>Senior High School</h2>
            <p>
              <span className="name">School:</span> Valenzuela Christian School
            </p>
            <p>
              <span className="name">Year:</span> SY 2017-2019
            </p>
          </div>
        </div>

        <div className={educ.card}>
          <span className={educ.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="80px"
              viewBox="0 -960 960 960"
              width="80px"
              fill="#ffffff"
            >
              <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
            </svg>
          </span>
          <div className={educ.text}>
            <h2>College</h2>
            <p>
              <span className="name">Course:</span> BS Information Technology
            </p>
            <p>
              <span className="name">School:</span> Bestlink College of the
              Philippines
            </p>
            <p>
              <span className="name">Year:</span> SY 2019-2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
