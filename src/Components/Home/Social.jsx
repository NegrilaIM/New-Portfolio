/* eslint-disable react/jsx-no-target-blank */
const Social = () => {
  return (
    <div className="home__social">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/iulian-marinel-negrila/"
        className="home__social-icon"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        target="_blank"
        href="https://github.com/NegrilaIM"
        className="home__social-icon"
      >
        {" "}
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/profile.php?id=100004401377588"
        className="home__social-icon"
      >
        {" "}
        <i className="uil uil-facebook"></i>
      </a>
    </div>
  );
};

export default Social;
