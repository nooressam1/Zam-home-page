import React from "react";

import "../cssComponent/Shopnow.css";

const ProductCategory = (props) => {
  return (
    <div className="Outerproductdiv">
      <div className="Innerproductdiv">
        <div className="ProductPhoto">
          <img
            src={props.photos}
            className="MainPhoto"
            onMouseOver={(e) => (e.target.src = props.pic2)}
            onMouseLeave={(e) => (e.target.src = props.photos)}
          />
        </div>
      </div>
      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
        <h1 className="producttextName">
          {" "}
          {props.name} <input type="checkbox" className="heartCheckbox"></input>{" "}
        </h1>

        <h1 className="PricetextShop"> {props.price} </h1>
      </div>
    </div>
  );
};

export default ProductCategory;
