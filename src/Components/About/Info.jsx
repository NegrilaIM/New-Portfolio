const Info = () => {
  return (
    <div className="about__info ">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">3.5 Years Working</span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle"> 13+ Projects</span>
      </div>
      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Availability</h3>
        <span className="about__subtitle">7:00 AM - 20:00 PM UTC+2</span>
      </div>
    </div>
  );
};

export default Info;
