import "./style.scss";

const NSkills = () => {
  return (
    <section className="skills" id="skills">
      <h2
        className="skills__title" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">
        skills
      </h2>
      <div className="skills__wrapper">
        <ul className="skills__list">
          <li className="skills__item">html</li>
          <li className="skills__item">css</li>
          <li className="skills__item">javascript</li>
          <li className="skills__item">react</li>
          <li className="skills__item">vue</li>
          <li className="skills__item">git</li>
          <li className="skills__item">webpack</li>
          <li className="skills__item">gulp</li>
          <li className="skills__item">figma</li>
        </ul>
      </div>
    </section>
  );
};

export default NSkills;
