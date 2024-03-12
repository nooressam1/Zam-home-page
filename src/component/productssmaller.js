import React from "react";
import "../componentpage.css";
import "../App.css";

const productssmaller = (props) => {
  return (
    <div className="fulldivphoto">
      <div className="smallerdiv">
        <div className="PhotoDiv">
          <img
            src={props.photos}
            className="Photo1"
            onMouseOver={(e) => (e.target.src = props.pic2)}
            onMouseLeave={(e) => (e.target.src = props.photos)}
          />
        </div>
      </div>
      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
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

export default productssmaller;
