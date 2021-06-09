import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

//import Img from "../img/pic1.jpg";
import React, { useState, useEffect } from "react";

const heart = <FontAwesomeIcon icon={faHeart} />;
const message = <FontAwesomeIcon icon={faEnvelopeOpenText} />;

const Newpost = (props) => {
  const [posts, setPosts] = useState(false);
  const [images, setImages] = useState([]);
  //an example of use effect to display random images from unsplash
  //everytime that the status of the post chnages (line 27-28) it "fires" the setImages hokk and throws one more link to our [.. images]
  useEffect(() => {
    setImages([
      ...images,
      `https://source.unsplash.com/450x800/?nature,water,travel/${Math.floor(
        Math.random() * 1000
      )}`,
      `https://source.unsplash.com/450x800/?nature,water,travel/${Math.floor(
        Math.random() * 1000
      )}`,
      `https://source.unsplash.com/450x800/?nature,water,travel/${Math.floor(
        Math.random() * 1000
      )}`,
    ]);
  }, [posts]);
  console.log(Math.floor(Math.random() * 1000));
  const Seemore = () => {
    setPosts(!posts);
  };
  const { Data } = props;

  return (
    <div className="photos">
      {/* {Data.map((el) => {
        return <img src={`../img/pic${el.id}.jpg`} />;
      })} */}
      {Data.map((element) => {
        return (
          <div key={element.id} className="post-element">
            <p className="overlay">
              &nbsp;{heart} {element.likes} &nbsp;{message} {element.comments}
            </p>
            <img src={`./img/pic${element.id}.jpg`} alt="post"></img>
          </div>
        );

        //console.log(element.likes);
      })}

      {images.length
        ? images.map((img, i) => (
            <div key={i} className="post-element">
              <p className="overlay">
                &nbsp;{heart} {Math.floor(Math.random() * 1000)} &nbsp;{message}{" "}
                {Math.floor(Math.random() * 1000)}
              </p>
              <img src={img}></img>
            </div>
          ))
        : null}
      <i onClick={Seemore}>click to see more..</i>
    </div>
  );
};
export default Newpost;
