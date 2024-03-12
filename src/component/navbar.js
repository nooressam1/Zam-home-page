import React from "react";
import "../App.css";
import react, { useState } from "react";
const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="navbar">
        <div>
          <button
            className=" w-12 h-10 inline-block	float-right  my-1.5 mr-4"
            onClick={() => {
              setOpen(!open);
              switchnav(props.page);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
            >
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <button className=" w-9 h-8 inline-block	float-right  my-1.5 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className=" inline-block float-right my-2"
              id="accounticon"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button className=" w-9 h-8 inline-block	float-right  my-1.5 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="White"
              className=" inline-block float-right my-2	"
              id="shopingcart"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <h7 className="Websitename"> ZAM </h7>
      </div>
      <div className={`fullscreenmenu ${open ? "active" : "inactive"}`}>
        <div
          className="halfscreen"
          onClick={() => {
            setOpen(!open);
            console.log("pressed");
          }}
        ></div>
        <div className="sidebar">
          <div className="contentdiv">
            <h1 id="homenav">Home</h1>
            <h1 id="shopnav">Shop</h1>
            <h1 id="wishlistnav">Wishlist</h1>
            <h1 id="contactnav"> Contact us</h1>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};
function switchnav(page) {
  switch (page) {
    case "home":
      document.getElementById("homenav").style.backgroundColor = "#282727";
      document.getElementById("homenav").style.color = "white";

      document.getElementById("homenav").style.borderRadius = "30px";
      break;
    case "shop":
      document.getElementById("shopnav").style.backgroundColor = "#282727";
      document.getElementById("shopnav").style.color = "white";

      document.getElementById("shopnav").style.borderRadius = "30px";
      break;

    case "wishlist":
      document.getElementById("wishlistnav").style.backgroundColor = "#282727";
      document.getElementById("wishlistnav").style.color = "white";

      document.getElementById("wishlistnav").style.borderRadius = "30px";
      break;

    case "contact":
      document.getElementById("contactnav").style.backgroundColor = "#282727";
      document.getElementById("contactnav").style.color = "white";

      document.getElementById("contactnav").style.borderRadius = "30px";
      break;
  }
}
export default Navbar;
