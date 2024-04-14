import React from "react";
import "../cssComponent/Shopnow.css";
import nav from "../component/navbar";
import backgroundphot from "../images/orangebackgroundgirl.jpg";
import Navbar from "../component/navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Productcom from "../component/ProductCategory.js";
import jacketgirl2 from "../images/girlwithjacket2.jpg";
import jacketgirl3 from "../images/girlwithjacket3.jpg";
import pufferjacket from "../images/girlwithpuffer.jpg";
import Footer from "../component/footer";
import pufferjacket2 from "../images/girlwithpuffer2.jpg";
import girlhat from "../images/girlwithhat.jpg";
import react, { useState } from "react";
import FilterandSortbybar from "../component/FilterandSortbybar.js";
// function Textwidth() {
//   var letters = document.querySelectorAll("categorytext");
//   var letters1 = document.querySelectorAll("catergorydiv");
//   var words;
//   console.log("eeeeeeee");
//   for (var i = letters.length - 1; i >= 0; i--) {
//     console.log(letters[i].length);
//     words = letters[i].textContent.length;
//     if (words > 5) {
//       letters1[i].style.width = "1000vw";
//     }
//   }
// }
var divnumber = 1;
var divposition = 0;
var pageloader = 0;
var counter = 0;
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;
var counter6 = 0;
var counter7 = 0;
var counter8 = 0;
var counter9 = 0;
var counter10 = 0;
var counter11 = 0;
var counter12 = 0;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className="filterarrowright"
      style={{
        ...style,
        display: "block",
        marginRight: "-2.5%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    // window.addEventListener("load", Textwidth),
    <div
      className="filterarrowleft"
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}
function ShopNow() {
  const [openfilter, setfilter] = useState(false);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="nextarrow" />,
    prevArrow: <SamplePrevArrow className="prevarrow" />,
  };
  return (
    <div classname="backgroundcolor">
      <Navbar page={"shop"}></Navbar>
      <div className="backgroundsize">
        <img class="photobgsize" src={backgroundphot}></img>
      </div>

      <div id="buttonpositions">
        <div id="searchdiv">
          <div id="searchtextdiv">
            <input id="searchbartext" type="text"></input>
          </div>
          <div id="searchbaricon">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0,0,256,256"
            >
              <g
                fill="#fefefe"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixblendmode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M21,3c-9.39844,0 -17,7.60156 -17,17c0,9.39844 7.60156,17 17,17c3.35547,0 6.46094,-0.98437 9.09375,-2.65625l12.28125,12.28125l4.25,-4.25l-12.125,-12.09375c2.17969,-2.85937 3.5,-6.40234 3.5,-10.28125c0,-9.39844 -7.60156,-17 -17,-17zM21,7c7.19922,0 13,5.80078 13,13c0,7.19922 -5.80078,13 -13,13c-7.19922,0 -13,-5.80078 -13,-13c0,-7.19922 5.80078,-13 13,-13z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div
          id="FSbuttondesign"
          onClick={(e) => {
            setfilter(!openfilter);
          }}
        >
          <button className="buttonstyle">
            Sort by
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ABABAB"
              id="sorticon"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Edit / Sort_Descending">
                  {" "}
                  <path
                    id="Vector"
                    d="M4 17H16M4 12H13M4 7H10M18 13V5M18 5L21 8M18 5L15 8"
                    stroke="#ABABAB"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
          <div id="filterline"></div>
          <button className="buttonstyle">
            {" "}
            Filter{" "}
            <svg
              fill="#ABABAB"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 971.986 971.986"
              className="filtericon"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M370.216,459.3c10.2,11.1,15.8,25.6,15.8,40.6v442c0,26.601,32.1,40.101,51.1,21.4l123.3-141.3 c16.5-19.8,25.6-29.601,25.6-49.2V500c0-15,5.7-29.5,15.8-40.601L955.615,75.5c26.5-28.8,6.101-75.5-33.1-75.5h-873 c-39.2,0-59.7,46.6-33.1,75.5L370.216,459.3z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`FilterBackgroundDiv ${
          openfilter ? "FilterBackgroundDivactive" : "FilterBackgroundDiv"
        }`}
        onClick={(e) => {
          setfilter(!openfilter);
        }}
      >
        <FilterandSortbybar></FilterandSortbybar>
      </div>
      <div className="categoryTextstyle">
        <Slider {...settings}>
          <div className="catergorydiv">
            <button
              className="categorytextActive"
              onClick={(e) => {
                counter++;
                var array = document.getElementsByClassName("categorytext");
                for (var i = array.length - 1; i >= 0; i--) {
                  array[i].className = "categorytext";

                  e.target.className = "categorytextActive";
                }
                if (counter > 1) {
                  e.target.className = "categorytext";
                  counter = 0;
                }
              }}
            >
              All
            </button>
          </div>

          <div className="catergorydiv">
            <button
              className="categorytext"
              onClick={(e) => {
                counter1++;
                var array = document.getElementsByClassName("categorytext");
                for (var i = array.length - 1; i >= 0; i--) {
                  array[i].className = "categorytext";

                  e.target.className = "categorytextActive";
                }
                if (counter1 > 1) {
                  e.target.className = "categorytext";
                  counter1 = 0;
                }
              }}
            >
              Women
            </button>
          </div>
          <div className="catergorydiv">
            <button
              className="categorytext"
              onClick={(e) => {
                counter2++;
                var array = document.getElementsByClassName("categorytext");
                for (var i = array.length - 1; i >= 0; i--) {
                  array[i].className = "categorytext";

                  e.target.className = "categorytextActive";
                }
                if (counter2 > 1) {
                  e.target.className = "categorytext";
                  counter2 = 0;
                }
              }}
            >
              Men
            </button>
          </div>
          <div className="catergorydiv">
            <button
              className="categorytext"
              onClick={(e) => {
                counter3++;
                var array = document.getElementsByClassName("categorytext");
                for (var i = array.length - 1; i >= 0; i--) {
                  array[i].className = "categorytext";

                  e.target.className = "categorytextActive";
                }
                if (counter3 > 1) {
                  e.target.className = "categorytext";
                  counter3 = 0;
                }
              }}
            >
              Girls
            </button>
          </div>
          <div className="catergorydiv">
            <button
              className="categorytext"
              onClick={(e) => {
                counter4++;
                var array = document.getElementsByClassName("categorytext");
                for (var i = array.length - 1; i >= 0; i--) {
                  array[i].className = "categorytext";

                  e.target.className = "categorytextActive";
                }
                if (counter4 > 1) {
                  e.target.className = "categorytext";
                  counter4 = 0;
                }
              }}
            >
              Women
            </button>
          </div>
          <div className="catergorydiv">
            <button
              className="categorytext"
              onClick={(e) => {
                counter5++;
                var array = document.getElementsByClassName("categorytext");
                for (var i = array.length - 1; i >= 0; i--) {
                  array[i].className = "categorytext";

                  e.target.className = "categorytextActive";
                }
                if (counter5 > 1) {
                  e.target.className = "categorytext";
                  counter5 = 0;
                }
              }}
            >
              Men
            </button>
          </div>
          <div className="catergorydiv">
            <button
              className="categorytext"
              onClick={(e) => {
                counter6++;
                var array = document.getElementsByClassName("categorytext");
                for (var i = array.length - 1; i >= 0; i--) {
                  array[i].className = "categorytext";

                  e.target.className = "categorytextActive";
                }
                if (counter6 > 1) {
                  e.target.className = "categorytext";
                  counter6 = 0;
                }
              }}
            >
              boys
            </button>
          </div>
          <div className="catergorydiv">
            <button
              className="categorytext"
              onClick={(e) => {
                counter7++;
                var array = document.getElementsByClassName("categorytext");
                for (var i = array.length - 1; i >= 0; i--) {
                  array[i].className = "categorytext";

                  e.target.className = "categorytextActive";
                }
                if (counter7 > 1) {
                  e.target.className = "categorytext";
                  counter7 = 0;
                }
              }}
            >
              Women
            </button>
          </div>
          <div className="catergorydiv">
            <button
              className="categorytext"
              onClick={(e) => {
                counter8++;
                var array = document.getElementsByClassName("categorytext");
                for (var i = array.length - 1; i >= 0; i--) {
                  array[i].className = "categorytext";

                  e.target.className = "categorytextActive";
                }
                if (counter8 > 1) {
                  e.target.className = "categorytext";
                  counter8 = 0;
                }
              }}
            >
              Men
            </button>
          </div>
          <div className="catergorydiv">
            <button
              className="categorytext"
              onClick={(e) => {
                counter9++;
                var array = document.getElementsByClassName("categorytext");
                for (var i = array.length - 1; i >= 0; i--) {
                  array[i].className = "categorytext";

                  e.target.className = "categorytextActive";
                }
                if (counter9 > 1) {
                  e.target.className = "categorytext";
                  counter9 = 0;
                }
              }}
            >
              Children
            </button>
          </div>
          <div className="catergorydiv">
            <button
              className="categorytext"
              onClick={(e) => {
                counter10++;
                var array = document.getElementsByClassName("categorytext");
                for (var i = array.length - 1; i >= 0; i--) {
                  array[i].className = "categorytext";

                  e.target.className = "categorytextActive";
                }
                if (counter10 > 1) {
                  e.target.className = "categorytext";
                  counter10 = 0;
                }
              }}
            >
              Women
            </button>
          </div>
          <div className="catergorydiv">
            <button
              className="categorytext"
              onClick={(e) => {
                counter11++;
                var array = document.getElementsByClassName("categorytext");
                for (var i = array.length - 1; i >= 0; i--) {
                  array[i].className = "categorytext";

                  e.target.className = "categorytextActive";
                }
                if (counter11 > 1) {
                  e.target.className = "categorytext";
                  counter11 = 0;
                }
              }}
            >
              Men
            </button>
          </div>
          <div className="catergorydiv">
            <button
              className="categorytext"
              onClick={(e) => {
                counter12++;
                var array = document.getElementsByClassName("categorytext");
                for (var i = array.length - 1; i >= 0; i--) {
                  array[i].className = "categorytext";

                  e.target.className = "categorytextActive";
                }
                if (counter12 > 1) {
                  e.target.className = "categorytext";
                  counter12 = 0;
                }
              }}
            >
              Children
            </button>
          </div>
        </Slider>
      </div>
      <div className="shopline"></div>
      {/* This is the first product div */}
      <div className="productpositionActive">
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>
        <Productcom
          photos={pufferjacket}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>
        <Productcom
          photos={girlhat}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={pufferjacket}
          name="Jacket Orange"
          price="500 LE"
          pic2={girlhat}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={girlhat}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={girlhat}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={pufferjacket}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={girlhat}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={pufferjacket}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>
      </div>

      {/* This is the second product div */}

      <div className="productposition">
        <Productcom
          photos={pufferjacket}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>
        <Productcom
          photos={pufferjacket}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>
        <Productcom
          photos={girlhat}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={pufferjacket}
          name="Jacket Orange"
          price="500 LE"
          pic2={girlhat}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={girlhat}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={girlhat}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={pufferjacket}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={girlhat}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={pufferjacket}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>
      </div>
      {/* This is the 3rd product div */}

      <div className="productposition">
        <Productcom
          photos={girlhat}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>
        <Productcom
          photos={girlhat}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>
        <Productcom
          photos={girlhat}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={pufferjacket}
          name="Jacket Orange"
          price="500 LE"
          pic2={girlhat}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={girlhat}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={girlhat}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={pufferjacket}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={girlhat}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={pufferjacket}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>
      </div>
      {/* This is the 4th product div */}
      <div className="productposition">
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={pufferjacket}
          name="Jacket Orange"
          price="500 LE"
          pic2={girlhat}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={girlhat}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={girlhat}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={pufferjacket}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={girlhat}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={jacketgirl2}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>{" "}
        <Productcom
          photos={pufferjacket}
          name="Jacket Orange"
          price="500 LE"
          pic2={jacketgirl3}
          className="productstyle"
        ></Productcom>
      </div>
      <div className="swapdivpage">
        <button>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="white"
            class="w-5 h-5"
            id="arrowendpageleft"
            onClick={(e) => {
              if (divposition == 0) {
                divposition = 3;
              } else {
                divposition--;
              }
              console.log(divposition);
              var array3 = document.getElementsByClassName("numberstyleactive"); // has everything that is activated
              var array2 = document.getElementsByClassName("numberstyle"); // everything that is normal
              var arrayproduct = document.getElementsByClassName(
                "productpositionActive"
              );
              var arrayhidden =
                document.getElementsByClassName("productposition");
              for (var i = array3.length - 1; i >= 0; i--) {
                array3[i].className = "numberstyle";
                arrayproduct[i].className = "productposition";
              }
              arrayhidden[divposition].className = "productpositionActive";

              array2[divposition].className = "numberstyleactive";
            }}
          >
            <path d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          className="numberstyleactive"
          id="button1end"
          data-value="1"
          onClick={(t) => {
            var array2 = document.getElementsByClassName("numberstyleactive");
            var arrayproduct = document.getElementsByClassName(
              "productpositionActive"
            );
            var arrayhidden =
              document.getElementsByClassName("productposition");

            for (var i = array2.length - 1; i >= 0; i--) {
              array2[i].className = "numberstyle";
              arrayproduct[i].className = "productposition";
            }
            t.target.className = "numberstyleactive";
            arrayhidden[0].className = "productpositionActive";

            divnumber = 1;
          }}
        >
          1
        </button>
        <button
          className="numberstyle"
          id="button2end"
          data-value="2"
          onClick={(t) => {
            var array2 = document.getElementsByClassName("numberstyleactive");
            var arrayproduct = document.getElementsByClassName(
              "productpositionActive"
            );
            var arrayhidden =
              document.getElementsByClassName("productposition");
            for (var i = array2.length - 1; i >= 0; i--) {
              array2[i].className = "numberstyle";
              arrayproduct[i].className = "productposition";
            }
            t.target.className = "numberstyleactive";
            arrayhidden[1].className = "productpositionActive";
          }}
        >
          2
        </button>
        <button
          className="numberstyle"
          id="button3end"
          data-value="3"
          onClick={(t) => {
            var array2 = document.getElementsByClassName("numberstyleactive");
            var arrayproduct = document.getElementsByClassName(
              "productpositionActive"
            );
            var arrayhidden =
              document.getElementsByClassName("productposition");
            for (var i = array2.length - 1; i >= 0; i--) {
              array2[i].className = "numberstyle";
              arrayproduct[i].className = "productposition";
            }
            t.target.className = "numberstyleactive";
            arrayhidden[2].className = "productpositionActive";

            divnumber = 3;
          }}
        >
          3
        </button>
        <button
          className="numberstyle"
          id="button4end"
          data-value="4"
          onClick={(t) => {
            var array2 = document.getElementsByClassName("numberstyleactive");
            var arrayproduct = document.getElementsByClassName(
              "productpositionActive"
            );
            var arrayhidden =
              document.getElementsByClassName("productposition");
            for (var i = array2.length - 1; i >= 0; i--) {
              array2[i].className = "numberstyle";
              arrayproduct[i].className = "productposition";
            }
            t.target.className = "numberstyleactive";
            arrayhidden[3].className = "productpositionActive";
            divnumber = 4;
          }}
        >
          4
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="white"
            class="w-5 h-5"
            id="arrowendpageright"
            onClick={(e) => {
              if (divposition > 2) {
                divposition = 0;
              } else {
                divposition++;
              }
              console.log(divposition);
              var arrayproduct = document.getElementsByClassName(
                "productpositionActive"
              );
              var arrayhidden =
                document.getElementsByClassName("productposition");
              var array3 = document.getElementsByClassName("numberstyleactive"); // has everything that is activated
              var array2 = document.getElementsByClassName("numberstyle"); // everything that is normal

              for (var i = array3.length - 1; i >= 0; i--) {
                array3[i].className = "numberstyle";
                arrayproduct[i].className = "productposition";
              }

              array2[divposition].className = "numberstyleactive";
              arrayhidden[divposition].className = "productpositionActive";
            }}
          >
            <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <Footer></Footer>
    </div>
  );
}
export default ShopNow;
