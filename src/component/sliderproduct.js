import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import pufferjacket from "../images/girlwithpuffer.jpg";
import Productsquaresmaller from "../component/productssmaller";
import pufferjacket2 from "../images/girlwithpuffer2.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        width: "3%",
        height: "7%",
        marginRight: "-40px",
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
        background: "green",
        width: "3%",
        height: "7%",
        marginLeft: "-40px",
      }}
      onClick={onClick}
    />
  );
}
const Sliderproduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div
      style={{
        marginTop: "2%",
        width: "100%",
        height: "100%",
        marginBottom: "2%",
      }}
    >
      <div
        style={{
          marginLeft: "4%",
          width: "88%",
          position: "relative",
          display: "inline-block",
        }}
      >
        <Slider {...settings}>
          <Productsquaresmaller
            photos={pufferjacket}
            name="Puffer Jacket"
            price="LE 500.99 "
            pic2={pufferjacket2}
          ></Productsquaresmaller>
          <Productsquaresmaller
            photos={pufferjacket}
            name="Puffer Jacket"
            price="LE 500.99 "
            pic2={pufferjacket2}
          ></Productsquaresmaller>
          <Productsquaresmaller
            photos={pufferjacket}
            name="Puffer Jacket"
            price="LE 500.99 "
            pic2={pufferjacket2}
          ></Productsquaresmaller>

          <Productsquaresmaller
            photos={pufferjacket}
            name="Puffer Jacket"
            price="LE 500.99 "
            pic2={pufferjacket2}
          ></Productsquaresmaller>
          <Productsquaresmaller
            photos={pufferjacket}
            name="Puffer Jacket"
            price="LE 500.99 "
            pic2={pufferjacket2}
          ></Productsquaresmaller>
          <Productsquaresmaller
            photos={pufferjacket}
            name="Puffer Jacket"
            price="LE 500.99 "
            pic2={pufferjacket2}
          ></Productsquaresmaller>
          <Productsquaresmaller
            photos={pufferjacket}
            name="Puffer Jacket"
            price="LE 500.99 "
            pic2={pufferjacket2}
          ></Productsquaresmaller>
          <Productsquaresmaller
            photos={pufferjacket}
            name="Puffer Jacket"
            price="LE 500.99 "
            pic2={pufferjacket2}
          ></Productsquaresmaller>
        </Slider>
      </div>
    </div>
  );
};

export default Sliderproduct;
