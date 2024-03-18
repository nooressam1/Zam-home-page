import React from "react";
import "../App.css";
import { useState } from "react";

const ShoppingcartEmpty = () => {
  const [open2, setOpen2] = useState(false);

  return (
    <div className={`fullscreenmenucart ${open2 ? "active" : "inactive"}`}>
      <div
        className="halfscreencart"
        onClick={() => {
          setOpen2(!open2);
          showitems();
          console.log("pressed");
        }}
      ></div>
      {/* this is for the side bar*/}
      <div className="cartsidebar">
        <div className="contentdivcart">
          <div id="usernamedivcart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <h1>Shopping Cart</h1>
            <div className="shopchartline"></div>
          </div>
          <div className="navbarcontentendcart">
            <h1 className="cartendbuttonstyle"> No Products in Cart</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingcartEmpty;
function showitems() {
  if (document.getElementsByClassName("fullscreenmenucart.inactive")) {
    document.getElementById("menuicon").style.display = "inline-block";
    if (window.matchMedia("(max-width: 800px)").matches) {
      document.getElementById("accounticon").style.display = "none";
    } else {
      document.getElementById("accounticon").style.display = "inline-block";
    }
    document.getElementById("shopingcart").style.display = "inline-block";
  }
}
