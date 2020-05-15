import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//import frame image
import one from "../../assets/images/grid/one.png";
import two from "../../assets/images/grid/two.png";
import two2 from "../../assets/images/grid/two-2.png";
import two3 from "../../assets/images/grid/two-3.png";
import three from "../../assets/images/grid/three.png";
import three2 from "../../assets/images/grid/three-2.png";
import three3 from "../../assets/images/grid/three-3.png";
import four from "../../assets/images/grid/four.png";
import four2 from "../../assets/images/grid/four-2.png";
import four3 from "../../assets/images/grid/four-3.png";
import five from "../../assets/images/grid/five.png";
import five2 from "../../assets/images/grid/five-2.png";
import five3 from "../../assets/images/grid/five-3.png";

import { isPopupShow } from "../../redux/popup/popup.selector";

import "./popUp.style.scss";

const PopUp = (props) => {
  const { isPopupShow } = props;
  const [numberOfImages, setNumberOfImages] = useState(1);
  const [nameOfMem, setNameOfMem] = useState("");

  useEffect(() => {
    //show pop up
    if (isPopupShow) {
      const popup = document.querySelector(".popup");
      popup.classList.add("popup-show");
    }
    //update selection option
    const typeOption = document.querySelector("#typeOfGrid");
    typeOption.innerHTML = "";
    for (let i = 0; i < numberOfImages; i++) {
      const option = document.createElement("option");
      option.value = i + 1;
      option.textContent = i + 1;
      typeOption.appendChild(option);
    }
  });

  const onSelectChange = (event) => {
    setNumberOfImages(event.target.value);
  };

  const onInputChange = (event) => {
    setNameOfMem(event.target.value);
  };

  return (
    <div className="popup">
      <div className="form">
        <div className="frame">
          <img src={one} alt="frame" />
        </div>
        <div className="inner-form">
          <div className="infor">
            <div className="select-field">
              <label htmlFor="numOfImages">Number of images:</label>
              <select id="numOfImages" onChange={onSelectChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="type-field">
              <label htmlFor="typeOfGrid">Type of grid:</label>
              <select id="typeOfGrid"></select>
            </div>
            <div className="name">
              <label htmlFor="name">Name of memories:</label>
              <input type="text" id="name" onChange={onInputChange} />
            </div>
          </div>
          <div className="image-input"></div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isPopupShow: isPopupShow,
});

export default connect(mapStateToProps)(PopUp);
