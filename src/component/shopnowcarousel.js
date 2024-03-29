import React from "react";
import Slider from "react-slick";
import photogirl from "../images/pic1.jpg";
import bagpic from "../images/bagpic.jpg";
import man from "../images/manwithglasses.jpg";
import "../cssComponent/shopnowcarousel.css";
import leftarrow from "../images/arrowleft.png";
import rightarrow from "../images/arrowright.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        marginRight: "-2.7%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "4vw",
        height: "10vw",
        marginLeft: "-2.7%",
      }}
      onClick={onClick}
    />
  );
}
const Shopnowcarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: itemsshown(),
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="nextarrow" />,
    prevArrow: <SamplePrevArrow className="prevarrow" />,
  };
  return (
    <div className="bordersborder1">
      <div className="eeeborders">
        <h1 className="shopnowstyle">SHOP NOW</h1>
        <div className="catcontainer">
          <Slider {...settings}>
            <div data-aos="zoom-in" className="catphotos">
              <img src={photogirl} className="girlpic" />
              <h1 classname="shoptext">Girls clothing</h1>
            </div>
            <div data-aos="zoom-in" className="catphotos">
              <img src={bagpic} className="bagpic" />
              <h1>Bags</h1>
            </div>{" "}
            <div data-aos="zoom-in" className="catphotos">
              <img src={man} className="guypic" />
              <h1>Mens clothing</h1>
            </div>
            <div data-aos="zoom-in" className="catphotos">
              <img src={man} className="guypic" />
              <h1>Mens clothing</h1>
            </div>
          </Slider>
        </div>{" "}
      </div>
    </div>
  );
};

export default Shopnowcarousel;
function itemsshown() {
  var w = window.innerWidth;

  if (window.matchMedia("(min-width: 790px)").matches) {
    return 4;
  } else {
    return 2;
  }
}
