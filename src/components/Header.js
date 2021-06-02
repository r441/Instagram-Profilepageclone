import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faColumns } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const home = <FontAwesomeIcon icon={faHouseUser} />;
const message = <FontAwesomeIcon icon={faEnvelopeOpenText} />;
const newsfeed = <FontAwesomeIcon icon={faColumns} />;
const heart = <FontAwesomeIcon icon={faHeart} />;
const search = <FontAwesomeIcon icon={faSearch} />;
const Header = () => {
  return (
    <header>
      i am the header{search}
      <input type="search" placeholder="search"></input>
      <div className="icons-header">
        <a href="#">{home}</a>
        <a href="#">{message}</a>
        <a href="#"> {newsfeed}</a>
        <a href="#"> {heart}</a>
      </div>
    </header>
  );
};
export default Header;
