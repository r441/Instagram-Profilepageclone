import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const veloskatw = <FontAwesomeIcon icon={faChevronDown} />;
const hammenu = <FontAwesomeIcon icon={faEllipsisH} />;

const Hero = () => {
  return (
    <div>
      <div className="img-holder">
        {
          // <img ></img>
        }
      </div>{" "}
      <div className="aboutme-section">
        {" "}
        <p>NAME OF USER</p> <button>Follow</button> <button>{veloskatw}</button>
        <a href="#">{hammenu}</a>{" "}
        <div className="personal-data">
          {" "}
          <div className="likes-etc">
            <a href="#">15413 posts</a> <a href="#">113 followers</a>{" "}
            <a href="#">1513 following</a>
          </div>
          <p>real infots of user</p>
          <p>shop @esthdrtyh</p>
          <p>
            <a href="#">im a link </a>
          </p>
        </div>
      </div>
      <div className="highlight-stories">
        {" "}
        {
          // <img ></img>
        }{" "}
        {
          // <img ></img>
        }{" "}
        {
          // <img ></img>
        }{" "}
      </div>
    </div>
  );
};
export default Hero;
