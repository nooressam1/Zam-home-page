import React from "react";
import "../cssComponent/Quickview.css";
import react, { useState } from "react";

const Quickviewpopup = (props) => {
  const [counter, setCounter] = useState(1);
  const [change, changeState] = useState(false);
  const [change2, changeState2] = useState(false);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <div className="Quickviewpopup">
        <div data-aos="zoom-in" className="QuickviewMaindiv">
          <div className="QuickPhotoDiv">
            <img id="mainphotoQuick" src={props.photo} />
            <div id="QuickHoverPhotos">
              <div
                className="QuickHoverPhotosDiv"
                onClick={(e) => {
                  var array = document.getElementsByClassName(
                    "QuickHoverImagesActive"
                  );
                  for (var i = array.length - 1; i >= 0; i--) {
                    array[i].className = "QuickHoverImages";
                  }

                  e.target.className = "QuickHoverImagesActive";
                }}
              >
                <img
                  className="QuickHoverImages"
                  src={props.photo}
                  onClick={() =>
                    (document.getElementById("mainphotoQuick").src =
                      props.photo)
                  }
                />
              </div>
              <div
                className="QuickHoverPhotosDiv"
                onClick={(e) => {
                  var array = document.getElementsByClassName(
                    "QuickHoverImagesActive"
                  );
                  for (var i = array.length - 1; i >= 0; i--) {
                    array[i].className = "QuickHoverImages";
                  }

                  e.target.className = "QuickHoverImagesActive";
                }}
              >
                <img
                  className="QuickHoverImages"
                  src={props.photo2}
                  onClick={() =>
                    (document.getElementById("mainphotoQuick").src =
                      props.photo2)
                  }
                />
              </div>
              <div
                className="QuickHoverPhotosDiv"
                onClick={(e) => {
                  var array = document.getElementsByClassName(
                    "QuickHoverImagesActive"
                  );
                  for (var i = array.length - 1; i >= 0; i--) {
                    array[i].className = "QuickHoverImages";
                  }

                  e.target.className = "QuickHoverImagesActive";
                }}
              >
                <img
                  className="QuickHoverImages"
                  src={props.photo3}
                  onClick={() =>
                    (document.getElementById("mainphotoQuick").src =
                      props.photo3)
                  }
                />
              </div>
              <div
                className="QuickHoverPhotosDiv"
                onClick={(e) => {
                  var array = document.getElementsByClassName(
                    "QuickHoverImagesActive"
                  );
                  for (var i = array.length - 1; i >= 0; i--) {
                    array[i].className = "QuickHoverImages";
                  }

                  e.target.className = "QuickHoverImagesActive";
                }}
              >
                <img
                  className="QuickHoverImages"
                  src={props.photo}
                  onClick={() =>
                    (document.getElementById("mainphotoQuick").src =
                      props.photo)
                  }
                />
              </div>
            </div>
          </div>

          <div className="QuickTextDiv">
            <div className="QuickTitlediv">
              <h1>{props.name}</h1>
              <p>{props.description}</p>
            </div>
            <div className="textpositionquick">
              <h1 id="pricequick">Price</h1>
              <h1 id="actualpricequick">{props.price}</h1>
              <div className="QuickLine"></div>
              <h1 className="QuickColortext">Color</h1>
              <div className="quickcolorpostiion">
                <label class="container">
                  O
                  <input type="radio" checked="checked" name="radio" />
                  <span class="checkmark" id="color1"></span>
                </label>
                <label class="container">
                  T
                  <input type="radio" name="radio" />
                  <span class="checkmark" id="color2"></span>
                </label>
                <label class="container">
                  T
                  <input type="radio" name="radio" />
                  <span class="checkmark" id="color3"></span>
                </label>
                <label class="container">
                  F
                  <input type="radio" name="radio" />
                  <span class="checkmark" id="color4"></span>
                </label>
              </div>
              <h1 className="QuickColortext" id="QuickSize">
                Size
              </h1>
              <div id="QuickSizePosition">
                <button
                  className="SizeButton"
                  onClick={(e) => {
                    var array =
                      document.getElementsByClassName("SizeButtonspecial");
                    for (var i = array.length - 1; i >= 0; i--) {
                      array[i].className = "SizeButton";
                    }

                    e.target.className = "SizeButtonspecial";
                  }}
                >
                  Small
                </button>
                <button
                  className="SizeButton"
                  onClick={(e) => {
                    var array =
                      document.getElementsByClassName("SizeButtonspecial");
                    for (var i = array.length - 1; i >= 0; i--) {
                      array[i].className = "SizeButton";
                    }

                    e.target.className = "SizeButtonspecial";
                  }}
                >
                  Medium
                </button>
                <button
                  className="SizeButton"
                  onClick={(e) => {
                    var array =
                      document.getElementsByClassName("SizeButtonspecial");
                    for (var i = array.length - 1; i >= 0; i--) {
                      array[i].className = "SizeButton";
                    }

                    e.target.className = "SizeButtonspecial";
                  }}
                >
                  Big
                </button>
              </div>
              <h1 className="QuickColortext" id="QuickQuantity">
                Quantity
              </h1>
              <div className="quantitydiv">
                <button onClick={decrementCounter} id="minusquantity">
                  -
                </button>
                <h1 id="quantnum">{counter}</h1>
                <button onClick={incrementCounter} id="addquantity">
                  +
                </button>
              </div>{" "}
              <div className="QuickLine" id="Quickbottomline"></div>
              <div></div>
              <button id="QuickCart">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quickviewpopup;
function ButtonSize(e) {}
