import React from "react";
import logo from "../logo.svg";
import "../App.css";
import background1 from "../images/backgroundgirl.jpg";
import Navbar from "../component/navbar";
import photogirl from "../images/pic1.jpg";
import bagpic from "../images/bagpic.jpg";
import man from "../images/manwithglasses.jpg";
import girlhat from "../images/girlwithhat.jpg";
import Productsquare from "../component/productsquare";
import Productsquaresmaller from "../component/productssmaller";
import group2 from "../images/group2.jpg";
import group3 from "../images/group3.jpg";
import pufferjacket from "../images/girlwithpuffer.jpg";
import Footer from "../component/footer";
import pufferjacket2 from "../images/girlwithpuffer2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderproduct from "../component/sliderproduct";
import Sliderproduct from "../component/sliderproduct";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Shopnowcarousel from "../component/shopnowcarousel";
import react, { useState } from "react";
import Quickviewpopup from "../component/Quickviewpopup";
import "../cssComponent/Quickview.css";
import jacketgirl1 from "../images/girlwithjacket1.jpg";
import jacketgirl2 from "../images/girlwithjacket2.jpg";
import jacketgirl3 from "../images/girlwithjacket3.jpg";
import Signup from "../component/Signup";

var open = false;
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        marginRight: "-2%",
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
        marginLeft: "-2.5%",
      }}
      onClick={onClick}
    />
  );
}
function Home() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: itemsshown(),
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="nextarrow" />,
    prevArrow: <SamplePrevArrow className="prevarrow" />,
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Navbar page={"home"}></Navbar>
      {/*  <Quickviewpopup
        photo={jacketgirl1}
        photo2={jacketgirl2}
        photo3={jacketgirl3}
        photo4={jacketgirl2}
        name="Big jacket"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
        price="400LE"
      ></Quickviewpopup>
     
     } <div
        style={{
          backgroundImage: `url(${background1})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          height: "100px",
          width: "100%",
          zIndex: 1,
          display: "block",
          top: 0,
        }}
      ></div>*/}
      <div className="backphotossize">
        <img src={background1} className="backphotos"></img>
      </div>
      <div
        style={{
          width: "100%",
          height: "7vh",
          overflow: "hidden",
          margin: "auto",
          display: "block",
          position: "relative",
        }}
      >
        {" "}
        <div className="squareborder"></div>
        <div className="triangle  "></div>
      </div>

      <Shopnowcarousel></Shopnowcarousel>

      <h1 className="fontstyle">POPULAR ITEMS</h1>
      <div className="fontstyleline"></div>
      <div style={{ marginTop: "2%", marginBottom: "2%" }}>
        <div className="productbordersize">
          <Slider {...settings}>
            <Productsquare
              photos={pufferjacket}
              name="Puffer Jacket"
              price="LE 500.99 "
              pic2={pufferjacket2}
            ></Productsquare>
            <Productsquare
              photos={pufferjacket}
              name="Puffer Jacket"
              price="LE 500.99 "
              pic2={pufferjacket2}
            ></Productsquare>
            <Productsquare
              photos={pufferjacket}
              name="Puffer Jacket"
              price="LE 500.99 "
              pic2={pufferjacket2}
            ></Productsquare>
            <Productsquare
              photos={pufferjacket}
              name="Puffer Jacket"
              price="LE 500.99 "
              pic2={pufferjacket2}
            ></Productsquare>
            <Productsquare
              photos={pufferjacket}
              name="Puffer Jacket"
              price="LE 500.99 "
              pic2={pufferjacket2}
            ></Productsquare>
            <Productsquare
              photos={pufferjacket}
              name="Puffer Jacket"
              price="LE 500.99 "
              pic2={pufferjacket2}
            ></Productsquare>
          </Slider>
        </div>
      </div>

      {open && <Quickviewpopup></Quickviewpopup>}

      <div className="collageback">
        <div
          data-aos="fade-up"
          classname="collagetextdiv"
          style={{
            textAlign: "center",
            margin: "auto",
            alignitems: "center",
            paddingTop: "2%",
            justifyContent: "center",
            width: "80%",
          }}
        >
          <h2 className="Newcollecttext">NEW COLLECTION</h2>
          <h2 className="collectioname">Lorem Ipsum</h2>
          <div id="collectionline"></div>
          <h1 className="descriptioncoll">
            “Vivamus condimentum, ipsum non semper placerat, felis libero
            pulvinar quam, sit amet ullamcorper nunc enim quis magna.
            Pellentesque”
          </h1>
        </div>
        <div className="photoscollagediv">
          <div data-aos="zoom-in" className="group1div">
            <img className="group1photo" src={group2} />
          </div>
          <div data-aos="zoom-in" className="group2div">
            <img className="group1photo" src={group3} />
          </div>
        </div>
      </div>

      <h1 className="fontstyle">One sale</h1>

      <div className="fontstyleline"></div>

      <Sliderproduct></Sliderproduct>

      <div className="hatdiv">
        <img src={girlhat} />
      </div>
      <h1 className="fontstyle2">You may</h1>
      <div className="fontstyleline2"></div>
      <h1 className="fontstyle1">also like</h1>
      <div style={{ marginTop: "2%", marginBottom: "2%" }}>
        <div className="productbordersize">
          <Slider {...settings}>
            <Productsquare
              photos={pufferjacket}
              name="Puffer Jacket"
              price="LE 500.99 "
              pic2={pufferjacket2}
            ></Productsquare>
            <Productsquare
              photos={pufferjacket}
              name="Puffer Jacket"
              price="LE 500.99 "
              pic2={pufferjacket2}
            ></Productsquare>
            <Productsquare
              photos={pufferjacket}
              name="Puffer Jacket"
              price="LE 500.99 "
              pic2={pufferjacket2}
            ></Productsquare>
            <Productsquare
              photos={pufferjacket}
              name="Puffer Jacket"
              price="LE 500.99 "
              pic2={pufferjacket2}
            ></Productsquare>
            <Productsquare
              photos={pufferjacket}
              name="Puffer Jacket"
              price="LE 500.99 "
              pic2={pufferjacket2}
            ></Productsquare>
            <Productsquare
              photos={pufferjacket}
              name="Puffer Jacket"
              price="LE 500.99 "
              pic2={pufferjacket2}
            ></Productsquare>
          </Slider>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
function itemsshown() {
  var w = window.innerWidth;

  if (window.matchMedia("(min-width: 790px)").matches) {
    return 3;
  } else {
    return 2;
  }
}
