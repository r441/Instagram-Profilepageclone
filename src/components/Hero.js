//import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const veloskatw = <FontAwesomeIcon icon={faChevronDown} />;
const hammenu = <FontAwesomeIcon icon={faEllipsisH} />;

const Hero = (props) => {
  const { Data } = props;
  console.log(Data[1].img);
  return (
    <div className="hero-section">
      <div className="img-holder">
        <img src="./img/icon.png" alt="profil pic" />
      </div>
      <div className="aboutme-section">
        <h4>
          {" "}
          <b>NICKNAME_OF_USER</b>
        </h4>
        <div className="basicinfos">
          <button>
            <b>Follow</b>
          </button>
          <button>{veloskatw}</button>
          <a href="https://angelospa.github.io/Instagram-Profilepageclone/">
            {hammenu}
          </a>{" "}
        </div>
        <div className="personal-data">
          <div className="likes-etc">
            <a href="https://angelospa.github.io/Instagram-Profilepageclone/">
              <b>15413</b> posts
            </a>{" "}
            <a href="https://angelospa.github.io/Instagram-Profilepageclone/">
              <b>113</b> followers
            </a>{" "}
            <a href="https://angelospa.github.io/Instagram-Profilepageclone/">
              <b>1513</b> following
            </a>
          </div>
          <div className="infos">
            <p>
              <b>real name of user</b>
            </p>

            <a href="https://angelospa.github.io/Instagram-Profilepageclone/">
              shop @myshop
            </a>

            <a href="https://angelospa.github.io/Instagram-Profilepageclone/">
              &nbsp; im a link{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
