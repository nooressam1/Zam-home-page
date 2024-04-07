import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../cssComponent/Quickview.css";
import Modal from "react-modal";
import jacketgirl1 from "../images/girlwithjacket1.jpg";

import react, { useState } from "react";
import Quickviewpopup from "./Quickviewpopup";
let x = 0;
const Productsquare = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [popup, setPopup] = useState(false);

  const togglemode = () => {
    console.log("hehehe" + popup);
    setPopup(!popup);
  };

  return (
    <>
      <div
        data-aos="fade-up"
        style={{
          width: "95%",
          position: "relative",
          display: "inline-block",
          marginLeft: "1.5%",
        }}
      >
        <div className="photodivproduct">
          <div className="PhotoDivsmaller">
            <img
              src={props.photos}
              className="Photo1smaller"
              id="photoprop"
              onMouseOver={(e) => (e.target.src = props.pic2)}
              onMouseLeave={(e) => (e.target.src = props.photos)}
            />
            <button
              class="quickview"
              onClick={(e) => {
                e.target.setPopup(!popup);
              }}
            >
              Quick View
            </button>

            <div style={{ marginLeft: "10px", marginTop: "9px" }}>
              <h1
                className="producttext"
                style={{ display: "inline-block", position: "relative" }}
              >
                {props.name}{" "}
              </h1>
              <input type="checkbox" className="heartlist"></input>
              <h1 className="pricetext"> {props.price} </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
function popupwindow(props, popup) {
  console.log("AHHH" + popup);

  if (popup == true) {
    console.log("eeeHH" + popup);
  }
}
export default Productsquare;
