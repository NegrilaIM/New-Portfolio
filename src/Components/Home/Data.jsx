import hand from "../../assets/hand.svg";
import send from "../../assets/send.svg";
import "./Data.scss";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Negrila Iulian <img className="home__hand" src={hand} alt="" />
      </h1>
      <h3 className="home__subtitle">Frontend Developer</h3>
      <p className="home__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni iure
        nulla blanditiis voluptatum, atque vel dolorem
      </p>
      <a href="#contact" className="button button--flex">
        {" "}
        Say Hello
        <img className="img" src={send} alt="" />
      </a>
    </div>
  );
};

export default Data;
