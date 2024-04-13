import React from "react";
import react, { useState } from "react";

const FilterandSortbybar = () => {
  const [openSort, setopenSort] = useState(false);

  const [openSize, setopenSize] = useState(false);
  const [openColor, setopenColor] = useState(false);
  const [openMaterial, setopenMaterial] = useState(false);
  const [openPrice, setopenPrice] = useState(false);
  const [openSortnew, setopenSortnew] = useState(false);
  const [openSorttop, setopenSorttop] = useState(false);
  const [openSortlth, setopenSortlth] = useState(false);
  const [openSorthtl, setopenSorthtl] = useState(false);
  return (
    <div
      className="FilterContentDiv"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div id="FilterTitle">
        <h1>Filter and Sort By</h1>
      </div>
      {/*this is the start of Sort by content*/}
      <div className="FilterLine"></div>
      <div
        className={`FilterContent ${
          openSort ? "FilterContentactive" : "FilterContent"
        }`}
        onClick={(e) => {
          setopenSort(!openSort);
        }}
      >
        <h1
          className="FiltercontentText"
          onClick={(e) => {
            setopenSort(!openSort);
          }}
        >
          Sort By
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          className={`arrowfilter ${
            openSort ? "arrowfilterHidden" : "arrowfilter"
          }`}
          onClick={(e) => {
            setopenSort(!openSort);
          }}
        >
          <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          className={`arrowenddown ${
            openSort ? "arrowenddownactive" : "arrowenddown"
          }`}
          onClick={(e) => {
            setopenSort(!openSort);
          }}
        >
          <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <div
        className={`SizeContentDiv ${openSort ? "active" : "SizeContentDiv"}`}
      >
        <div
          className={`sortbyDiv ${
            openSortnew ? "sortbyDivactive" : "sortbyDiv"
          }`}
          onClick={(e) => {
            setopenSortnew(!openSortnew);
          }}
        >
          <h1>New Arrival</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6"
            id="checkmarkfilter"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <div
          className={`sortbyDiv ${
            openSorttop ? "sortbyDivactive" : "sortbyDiv"
          }`}
          onClick={(e) => {
            setopenSorttop(!openSorttop);
          }}
        >
          <h1>Top Rated</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6"
            id="checkmarkfilter"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <div
          className={`sortbyDiv ${
            openSortlth ? "sortbyDivactive" : "sortbyDiv"
          }`}
          onClick={(e) => {
            setopenSortlth(!openSortlth);
          }}
        >
          <h1> Price low to high</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6"
            id="checkmarkfilter"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <div
          className={`sortbyDiv ${
            openSorthtl ? "sortbyDivactive" : "sortbyDiv"
          }`}
          onClick={(e) => {
            setopenSorthtl(!openSorthtl);
          }}
        >
          <h1> Price high to low</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6"
            id="checkmarkfilter"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
      </div>
      {/*this is the start of size content*/}
      <div
        className={`FilterContent ${
          openSize ? "FilterContentactive" : "FilterContent"
        }`}
        onClick={(e) => {
          setopenSize(!openSize);
        }}
      >
        <h1
          className="FiltercontentText"
          onClick={(e) => {
            setopenSize(!openSize);
          }}
        >
          Size
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          className={`arrowfilter ${
            openSize ? "arrowfilterHidden" : "arrowfilter"
          }`}
          onClick={(e) => {
            setopenSize(!openSize);
          }}
        >
          <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          className={`arrowenddown ${
            openSize ? "arrowenddownactive" : "arrowenddown"
          }`}
          onClick={(e) => {
            setopenSize(!openSize);
          }}
        >
          <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <div
        className={`SizeContentDiv ${openSize ? "active" : "SizeContentDiv"}`}
      >
        <div id="sizedivpositio">
          <form>
            <input
              type="checkbox"
              id="Xsmall"
              name="size"
              className="InputSize"
              value="xsmall"
            />
            <label for="Xsmall" className="LabelSize">
              Xsmall
            </label>

            <input
              type="checkbox"
              name="size"
              id="Small"
              className="InputSize"
              value="Small"
            />
            <label for="Small" className="LabelSize">
              Small
            </label>

            <input
              type="checkbox"
              id="Medium"
              name="size"
              className="InputSize"
              value="Medium"
            />
            <label for="Medium" className="LabelSize">
              Medium
            </label>

            <input
              type="checkbox"
              id="Large"
              name="size"
              className="InputSize"
              value="Large"
            />
            <label for="Large" className="LabelSize">
              Large
            </label>

            <input
              type="checkbox"
              id="XLarge"
              name="size"
              className="InputSize"
              value="XLarge"
            />
            <label for="XLarge" className="LabelSize">
              XLarge
            </label>
          </form>
        </div>
      </div>
      {/*Start of Color*/}
      <div
        className={`FilterContent ${
          openColor ? "FilterContentactive" : "FilterContent"
        }`}
        onClick={(e) => {
          setopenColor(!openColor);
        }}
      >
        <h1 className="FiltercontentText">Color</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          className={`arrowfilter ${
            openColor ? "arrowfilterHidden" : "arrowfilter"
          }`}
          onClick={(e) => {
            setopenColor(!openColor);
          }}
        >
          <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          className={`arrowenddown ${
            openColor ? "arrowenddownactive" : "arrowenddown"
          }`}
          onClick={(e) => {
            setopenColor(!openColor);
          }}
        >
          <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <div
        className={`FiltercolorDiv ${
          openColor ? "FiltercolorDivactive" : "FiltercolorDiv"
        }`}
      >
        <div id="FilterColorposition">
          <label class="container">
            O
            <input type="checkbox" name="radio" />
            <span class="checkmark" id="color1"></span>
          </label>
          <label class="container">
            T
            <input type="checkbox" name="radio" />
            <span class="checkmark" id="color2"></span>
          </label>
          <label class="container">
            T
            <input type="checkbox" name="radio" />
            <span class="checkmark" id="color3"></span>
          </label>
          <label class="container">
            F
            <input type="checkbox" name="radio" />
            <span class="checkmark" id="color4"></span>
          </label>
          <label class="container">
            O
            <input type="checkbox" name="radio" />
            <span class="checkmark" id="color5"></span>
          </label>
          <label class="container">
            O
            <input type="checkbox" name="radio" />
            <span class="checkmark" id="color6"></span>
          </label>
          <label class="container">
            O
            <input type="checkbox" name="radio" />
            <span class="checkmark" id="color7"></span>
          </label>
          <label class="container">
            O
            <input type="checkbox" name="radio" />
            <span class="checkmark" id="color8"></span>
          </label>
          <label class="container">
            O
            <input type="checkbox" name="radio" />
            <span class="checkmark" id="color9"></span>
          </label>
          <label class="container">
            O
            <input type="checkbox" name="radio" />
            <span class="checkmark" id="color10"></span>
          </label>
          <label class="container">
            O
            <input type="checkbox" name="radio" />
            <span class="checkmark" id="color11"></span>
          </label>
          <label class="container">
            O
            <input type="checkbox" name="radio" />
            <span class="checkmark" id="color12"></span>
          </label>
          <label class="container">
            O
            <input type="checkbox" name="radio" />
            <span class="checkmark" id="color13"></span>
          </label>{" "}
          <label class="container">
            O
            <input type="checkbox" name="radio" />
            <span class="checkmark" id="color14"></span>
          </label>{" "}
          <label class="container">
            O
            <input type="checkbox" name="radio" />
            <span class="checkmark" id="color15"></span>
          </label>
        </div>
      </div>
      {/*this is the start of material content*/}
      <div
        className={`FilterContent ${
          openMaterial ? "FilterContentactive" : "FilterContent"
        }`}
        onClick={(e) => {
          setopenMaterial(!openMaterial);
        }}
      >
        <h1
          className="FiltercontentText"
          onClick={(e) => {
            setopenMaterial(!openMaterial);
          }}
        >
          Material
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          className={`arrowfilter ${
            openMaterial ? "arrowfilterHidden" : "arrowfilter"
          }`}
          onClick={(e) => {
            setopenMaterial(!openMaterial);
          }}
        >
          <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          className={`arrowenddown ${
            openMaterial ? "arrowenddownactive" : "arrowenddown"
          }`}
          onClick={(e) => {
            setopenMaterial(!openMaterial);
          }}
        >
          <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <div
        className={`SizeContentDiv ${
          openMaterial ? "active" : "SizeContentDiv"
        }`}
      >
        <form className="Materialdivposition">
          <input
            type="checkbox"
            id="Linen"
            name="material"
            className="InputSize"
            value="Linen"
          />
          <label for="Linen" className="LabelSize">
            Linen
          </label>

          <input
            type="checkbox"
            name="material"
            id="Polyester"
            className="InputSize"
            value="Polyester"
          />
          <label for="Polyester" className="LabelSize">
            Polyester
          </label>

          <input
            type="checkbox"
            id="Satin"
            name="material"
            className="InputSize"
            value="Satin"
          />
          <label for="Satin" className="LabelSize">
            Satin
          </label>

          <input
            type="checkbox"
            id="Denim"
            name="material"
            className="InputSize"
            value="Denim"
          />
          <label for="Denim" className="LabelSize">
            Denim
          </label>
        </form>
      </div>
      {/*this is the start of Price content*/}
      <div
        className={`FilterContent ${
          openPrice ? "FilterContentactive" : "FilterContent"
        }`}
        onClick={(e) => {
          setopenPrice(!openPrice);
        }}
      >
        <h1
          className="FiltercontentText"
          onClick={(e) => {
            setopenPrice(!openPrice);
          }}
        >
          Price
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          className={`arrowfilter ${
            openPrice ? "arrowfilterHidden" : "arrowfilter"
          }`}
          onClick={(e) => {
            setopenPrice(!openPrice);
          }}
        >
          <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          className={`arrowenddown ${
            openPrice ? "arrowenddownactive" : "arrowenddown"
          }`}
          onClick={(e) => {
            setopenPrice(!openPrice);
          }}
        >
          <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <div
        className={`SizeContentDiv ${openPrice ? "active" : "SizeContentDiv"}`}
      >
        <div className="Pricediv">
          <form>
            <label for="vol" className="Rangetextstyle">
              0$
            </label>
            <input
              type="range"
              id="vol"
              name="vol"
              min="0"
              max="50"
              className="rangestyle"
            />
            <label for="vol" className="Rangetextstyle">
              10000$
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterandSortbybar;
