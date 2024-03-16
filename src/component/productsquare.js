import React from "react";
import "../componentpage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

let x = 0;

const Productsquare = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
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
        </div>
      </div>
      <div style={{ marginLeft: "10px", marginTop: "9px" }}>
        <h1
          className="producttext"
          style={{ display: "inline-block", position: "relative" }}
        >
          {" "}
          {props.name}{" "}
        </h1>
        <input type="checkbox" className="heartlist"></input>

        <h1 className="pricetext"> {props.price} </h1>
      </div>
    </div>
  );
};

export default Productsquare;
