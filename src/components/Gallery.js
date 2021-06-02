// case 1
//const Gallery = (props) => {
//   console.log(props.Data);
// case 2
// const Gallery = ({ Data }) => {
//   console.log(Data);
// case 3

import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPortrait } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";

const porteto = <FontAwesomeIcon icon={faPortrait} />;
const reel = <FontAwesomeIcon icon={faRetweet} />;
const instatv = <FontAwesomeIcon icon={faTv} />;
const tagged = <FontAwesomeIcon icon={faTags} />;
//ReactDOM.render(element, document.body);
const Gallery = (props) => {
  const { Data } = props;
  console.log(Data);
  return (
    <div>
      im the Gallery gmtxrsts
      <div className="icons">
        <a href="#">{porteto}</a>
        <a href="#">{reel}</a>
        <a href="#"> {instatv}</a>
        <a href="#"> {tagged}</a>
      </div>
      <div className="photos">we display photos here</div>
    </div>
  );
};
export default Gallery;
