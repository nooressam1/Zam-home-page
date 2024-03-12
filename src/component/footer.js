import React from "react";
import "../componentpage.css";

const Footer = () => {
  return (
    <div className="footerdiv">
      <h1 className="Websitenamefooter"> Zam </h1>
      <ul className="footerlist">
        <li>Home</li>
        <li>Shop</li>
        <li>Account </li>
        <li>Cart</li>
        <li>Wishlist</li>
        <li>Contact </li>
      </ul>
      <div className="footerline"></div>
      <h1 className="footerfollow">Follow us on</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="35"
        height="35"
        viewBox="0,0,256,256"
        style={{
          position: "relative",
          display: "inline-block",
          marginRight: "10px",
        }}
      >
        <g
          fill="#6B6B6B"
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
          style={{
            mixblendmode: "normal",
          }}
        >
          <g transform="scale(5.12,5.12)">
            <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
          </g>
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="35"
        height="35"
        viewBox="0,0,256,256"
        style={{
          position: "relative",
          display: "inline-block",
        }}
      >
        <g
          fill="#6B6B6B"
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
          style={{
            mixblendmode: " normal",
          }}
        >
          <g transform="scale(5.12,5.12)">
            <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path>
          </g>
        </g>
      </svg>

      <h1 className="copyrightfooter">@2014 Store Name</h1>
    </div>
  );
};

export default Footer;
