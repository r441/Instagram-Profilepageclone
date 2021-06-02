import ReactDOM from "react-dom";
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
        <img src="./img/pic3.jpg" />
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
          <a href="#">{hammenu}</a>{" "}
        </div>
        <div className="personal-data">
          <div className="likes-etc">
            <a href="#">
              <b>15413</b> posts
            </a>{" "}
            <a href="#">
              <b>113</b> followers
            </a>{" "}
            <a href="#">
              <b>1513</b> following
            </a>
          </div>
          <div className="infos">
            <p>
              <b>real name of user</b>
            </p>

            <a href="#">shop @myshop</a>

            <a href="#">im a link </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
