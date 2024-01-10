import "./Experience.scss";

const Experience = () => {
  const Education = [
    {
      role: "Economy",
      name: "High-School",
      date: "2012 - 2016",
    },
    {
      role: "Auto Engineering",
      name: "Univ. of Lincoln",
      date: "2016 - 2020",
    },
    {
      role: "Frontend-Dev.",
      name: "IT-School",
      date: "2019 - 2020",
    },
    {
      role: "Computer Science",
      name: "Harvard CS50",
      date: "2022 - 2023",
    },
    {
      role: "SEO Expert",
      name: "-----------",
      date: "2023 - 2024",
    },
  ];

  const Experience = [
    {
      role: "Team Leader",
      name: "Moy Park Factory",
      date: "2016 - 2019",
    },
    {
      role: "Frontend-Dev.",
      name: "Super Dev",
      date: "2020 - 2021",
    },
    {
      role: "Frontend-Dev.",
      name: "Super Dev",
      date: "2021 - 2023",
    },
    {
      role: "App. Developer",
      name: "Super Dev",
      date: "2021 - 2023",
    },
    {
      role: "Service delivery Specialist ",
      name: "HCL Tech",
      date: "2023 - Present",
    },
  ];

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            {Education.map((item, index) => {
              return (
                <div key={index} className="qualification__data">
                  <div>
                    <h3 className="qualification__title">{item.role}</h3>
                    <span className="qualification__subtitle">{item.name}</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i> {item.date}
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pos-abs qualification__content-active">
            {Experience.map((item, index) => {
              return (
                <div key={index} className="qualification__dataa">
                  <div>
                    <h3 className="qualification__titlee">{item.role}</h3>
                    <span className="qualification__subtitlee">
                      {item.name}
                    </span>
                    <div className="qualification__calendare">
                      <i className="uil uil-calendar-alt"></i> {item.date}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
