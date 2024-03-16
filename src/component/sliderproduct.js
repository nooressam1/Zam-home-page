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
        marginRight: "-2.5vw",
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
        marginLeft: "-2.5vw",
      }}
      onClick={onClick}
    />
  );
}
const Sliderproduct = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: itemsshown(),
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
      <div className="productsmallerdiv">
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
function itemsshown() {
  var w = window.innerWidth;

  if (window.matchMedia("(max-width: 500px)").matches) {
    return 2;
  } else if (window.matchMedia("(min-width:790px )").matches) {
    return 4;
  } else {
    return 3;
  }
}
