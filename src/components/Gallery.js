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

const porteto = <FontAwesomeIcon icon={faPortrait} />;
const reel = <FontAwesomeIcon icon={faRetweet} />;
const instatv = <FontAwesomeIcon icon={faTv} />;
const tagged = <FontAwesomeIcon icon={faTags} />;
//ReactDOM.render(element, document.body);
const Gallery = (props) => {
  const { Data } = props;

  let likecounter = [];
  let commentliker = [];
  let imger = [];
  Data.forEach((element) => {
    likecounter.push(element.likes);
    commentliker.push(element.comments);
    imger.push(element.img);
  });
  //I HAVE THE ARRAYS I WILL TRY IT TO A NEW COMPONENT AND SEND IT !!!
  console.log(likecounter, commentliker, imger);

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
        {<img src="./img/pic3.jpg" alt="stories"></img>}
        {<img src="./img/pic2.jpg" alt="stories2"></img>}
        {<img src="./img/pic7.jpg" alt="stories3"></img>}{" "}
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
      <div className="photos">
        <div>{<img src="./img/pic1.jpg" alt="post"></img>}</div>
        <div>{<img src="./img/pic2.jpg" alt="post"></img>}</div>
        <div>{<img src="./img/pic3.jpg" alt="post"></img>}</div>
        <div>{<img src="./img/pic4.jpg" alt="post"></img>}</div>
        <div>{<img src="./img/pic5.jpg" alt="post"></img>}</div>
        <div>{<img src="./img/pic6.jpg" alt="post"></img>}</div>
        <div>{<img src="./img/pic7.jpg" alt="post"></img>}</div>
        <div>{<img src="./img/pic8.jpg" alt="post"></img>}</div>
      </div>
    </div>
  );
};
export default Gallery;
