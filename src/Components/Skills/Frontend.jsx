export const Frontend = () => {
  const FrontendSkills = [
    {
      name: "HTML",
      experience: "Proficient",
    },
    {
      name: "CSS/SASS",
      experience: "Advanced",
    },
    {
      name: "JavaScript",
      experience: "Proficient",
    },
    {
      name: "React JS",
      experience: "Proficient",
    },
    {
      name: "Vue JS",
      experience: "Advanced",
    },
    {
      name: "Bootstrap",
      experience: "Advanced",
    },
    {
      name: "Redux",
      experience: "Proficient",
    },
  ];
  const aditionalSkills = [
    {
      name: "Material UI",
      experience: "Proficient",
    },
    {
      name: "Git",
      experience: "Advanced",
    },
    {
      name: "Scrum/Agile",
      experience: "Advanced",
    },
    {
      name: "Typescript",
      experience: "Advanced",
    },
    {
      name: "Figma",
      experience: "Advanced",
    },
    {
      name: "Postman",
      experience: "Advanced",
    },
    {
      name: "Testing",
      experience: "Advanced",
    },
  ];

  return (
    <div className="skills__content">
      <h3 className="skills__title"> Frontend developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {FrontendSkills.map((item, index) => {
            return (
              <div key={index} className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">{item.name}</h3>
                  <span className="skills__level">{item.experience}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="skills__group">
          {aditionalSkills.map((item, index) => {
            return (
              <div key={index} className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">{item.name}</h3>
                  <span className="skills__level">{item.experience}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
