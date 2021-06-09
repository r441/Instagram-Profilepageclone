// case 1
//const Gallery = (props) => {
//   console.log(props.Data);
// case 2
// const Gallery = ({ Data }) => {
//   console.log(Data);
// case 3

//import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPortrait } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";

import Newpost from "./Newpost";

const porteto = <FontAwesomeIcon icon={faPortrait} />;
const reel = <FontAwesomeIcon icon={faRetweet} />;
const instatv = <FontAwesomeIcon icon={faTv} />;
const tagged = <FontAwesomeIcon icon={faTags} />;
//ReactDOM.render(element, document.body);
const Gallery = (props) => {
  const { Data } = props;
  let pici = "";
  // const Newpost = () => {
  //   console.log("arghdsth");
  //   return <h2>more...</h2>;
  // };

  //I HAVE THE ARRAYS I WILL TRY IT TO A NEW COMPONENT AND SEND IT !!!
  //console.log(likecounter, commentliker, imger);

  //   <div>
  //     {<img src="./img/pic3.jpg" alt="post"></img>}{" "}
  //     <span>
  //       {likecounter} {commentliker}
  //     </span>
  //   </div>
  // );

  return (
    <div className="gallery-section">
      <div className="highlight-stories">
        {
          <img
            src="https://source.unsplash.com/collection/160727/1600x900"
            alt="stories"
          ></img>
        }
        {
          <img
            src="https://source.unsplash.com/collection/190727/1600x900"
            alt="stories2"
          ></img>
        }
        {
          <img
            src="https://source.unsplash.com/collection/180727/1600x900"
            alt="stories3"
          ></img>
        }{" "}
      </div>
      <div className="icons">
        <a href="https://angelospa.github.io/Instagram-Profilepageclone/">
          {porteto} <span>POSTS</span>
        </a>
        <a href="https://angelospa.github.io/Instagram-Profilepageclone/">
          {reel} <span>REELS</span>
        </a>
        <a href="https://angelospa.github.io/Instagram-Profilepageclone/">
          {" "}
          {instatv} <span>IGTV</span>
        </a>
        <a href="https://angelospa.github.io/Instagram-Profilepageclone/">
          {" "}
          {tagged} <span>TAGGED</span>
        </a>
      </div>

      <Newpost Data={Data} />
    </div>
  );
};
export default Gallery;
