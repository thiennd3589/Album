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

const showPopUp = (isPopupShow) => {
  if (isPopupShow) {
    const popup = document.querySelector(".popup");
    popup.classList.add("popup-show");
  }
};

const UpdateFrame = ({ numOfImages, typeOfGrids }) => {
  const num = parseInt(numOfImages);
  const type = parseInt(typeOfGrids);
  switch (num) {
    case 1:
      return <img src={one} alt="frame" />;
    case 2:
      if (type === 1) {
        return <img src={two} alt="frame" />;
      } else if (type === 2) {
        return <img src={two2} alt="frame" />;
      } else {
        return <img src={two3} alt="frame" />;
      }
    case 3:
      if (type === 1) {
        return <img src={three} alt="frame" />;
      } else if (type === 2) {
        return <img src={three2} alt="frame" />;
      } else {
        return <img src={three3} alt="frame" />;
      }
    case 4:
      if (type === 1) {
        return <img src={four} alt="frame" />;
      } else if (type === 2) {
        return <img src={four2} alt="frame" />;
      } else {
        return <img src={four3} alt="frame" />;
      }
    case 5:
      if (type === 1) {
        return <img src={five} alt="frame" />;
      } else if (type === 2) {
        return <img src={five2} alt="frame" />;
      } else {
        return <img src={five3} alt="frame" />;
      }
    default:
      return;
  }
};

const PopUp = (props) => {
  const { isPopupShow } = props;
  const [numberOfImages, setNumberOfImages] = useState(1);
  const [nameOfMem, setNameOfMem] = useState("");
  const [typeOfGrid, setTypeOfGrid] = useState(1);

  useEffect(() => {
    //show pop up
    showPopUp(isPopupShow);
  });

  const onNumBerOfImgChange = (event) => {
    setNumberOfImages(event.target.value);
  };

  const onTypeOfGridChange = (event) => {
    setTypeOfGrid(event.target.value);
  };

  const onInputChange = (event) => {
    setNameOfMem(event.target.value);
  };

  const devTEst = () => {
    // console.log(frame);
  };

  return (
    <div className="popup">
      <div className="form">
        <div className="frame">
          <UpdateFrame numOfImages={numberOfImages} typeOfGrids={typeOfGrid} />
        </div>
        <div className="inner-form">
          <div className="infor">
            <div className="select-field">
              <label htmlFor="numOfImages" onClick={devTEst}>
                Number of images:
              </label>
              <select id="numOfImages" onChange={onNumBerOfImgChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="type-field">
              <label htmlFor="typeOfGrid">Type of grid:</label>
              <select id="typeOfGrid" onChange={onTypeOfGridChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="name">
              <label htmlFor="name">Name of memories:</label>
              <input type="text" id="name" onChange={onInputChange} />
            </div>
            <div className="input-image">
              <input type="file" id="input-image" onChange={onInputChange} />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isPopupShow: isPopupShow,
});

export default connect(mapStateToProps)(PopUp);
