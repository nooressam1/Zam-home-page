import React from "react";
import "../App.css";

const Shoppingcartitem = (props) => {
  return (
    <div className="productfulldiv" id="totalproductdiv">
      <div className="productimagediv">
        <img src={props.image} className="productimage" />
      </div>
      <div className="productstextdiv">
        <h1 className="productnametext">{props.productname}</h1>
        <h1 className="productpricetext">{props.price}</h1>
        <div className="quantitydiv">
          <button id="minusquantity">-</button>
          <h1>1</h1>
          <button id="addquantity">+</button>
        </div>
      </div>
      <div className="closingicondiv">
        <button onClick={() => deleteproduct()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="gray"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#1b1b1b"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
function deleteproduct() {
  document.getElementById("totalproductdiv").style.display = "none";
}
export default Shoppingcartitem;
