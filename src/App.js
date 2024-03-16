import React from "react";
import logo from "./logo.svg";
import "./App.css";
import background1 from "./images/backgroundgirl.jpg";
import Navbar from "./component/navbar";
import photogirl from "./images/pic1.jpg";
import bagpic from "./images/bagpic.jpg";
import man from "./images/manwithglasses.jpg";
import girlhat from "./images/girlwithhat.jpg";
import Productsquare from "./component/productsquare";
import Productsquaresmaller from "./component/productssmaller";
import group2 from "./images/group2.jpg";
import group3 from "./images/group3.jpg";
import pufferjacket from "./images/girlwithpuffer.jpg";
import Footer from "./component/footer";
import pufferjacket2 from "./images/girlwithpuffer2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderproduct from "./component/sliderproduct";
import Sliderproduct from "./component/sliderproduct";
import Navbattail from "./component/navbattail";

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
function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="App">
      <Navbar page={"home"}></Navbar>

      {/*} <div
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

      <div className="bordersborder1">
        <div className="eeeborders">
          <h1 className="shopnowstyle">SHOP NOW</h1>
          <div className="catcontainer">
            <div className="catphotos">
              <img src={photogirl} className="girlpic" />
              <h1 classname="shoptext">Girls clothing</h1>
            </div>

            <div className="catphotos">
              <img src={bagpic} className="bagpic" />
              <h1>Bags</h1>
            </div>
            <div className="catphotos">
              <img src={man} className="guypic" />
              <h1>Mens clothing</h1>
            </div>
          </div>
        </div>
      </div>

      <h1 className="fontstyle">POPULAR ITEMS</h1>
      <div className="fontstyleline"></div>

      <div className="collageback">
        */}
        <div
          classname
          style={{
            textAlign: "center",
            margin: "auto",
            alignitems: "center",
            paddingTop: "2%",
            justifyContent: "center",
            position: "relative",
            justifyContent: "center",
            width: "80%",
            marginBottom: "3%",
            height: "20%",
          }}
        >
          <h2 className="Newcollecttext">NEW COLLECTION</h2>
          <h2 className="collectioname">Lorem Ipsum</h2>
          <div id="collectionline"></div>
          <h2 className="descriptioncoll">
            “Vivamus condimentum, ipsum non semper placerat, felis libero
            pulvinar quam, sit amet ullamcorper nunc enim quis magna.
            Pellentesque”
          </h2>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <div className="group1div">
            <img className="group1photo" src={group2} />
          </div>
          <div className="group2div">
            <img className="group1photo" src={group3} />
          </div>
        </div>
      </div>

      <h1 className="fontstyle">One sale</h1>
      <div className="fontstyleline"></div>

      <div className="hatdiv">
        <img src={girlhat} />
      </div>
      <h1 className="fontstyle2">You may</h1>
      <div className="fontstyleline2"></div>
      <h1 className="fontstyle1">also like</h1>

      <Footer></Footer>
    </div>
  );
}

export default App;
