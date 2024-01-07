export const Appdev = () => {
  const Appdev = [
    {
      name: "Dart",
      experience: "Intermediate",
    },
    {
      name: "Flutter",
      experience: "Intermediate",
    },
    {
      name: "React Native",
      experience: "Advanced",
    },
    {
      name: "React Native UI Libraries",
      experience: " Advanced",
    },
    {
      name: "Widget-based Development",
      experience: "Intermediate",
    },
    {
      name: "Provider",
      experience: "Intermediate",
    },
  ];

  return (
    <div className="skills__content">
      <h3 className="skills__title">App developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {Appdev.map((item, index) => {
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
