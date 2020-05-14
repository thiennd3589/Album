import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { numberSheetsSelect } from "../../redux/sheet/sheet.selector";

import "./sheet.style.scss";

const Sheet = (props) => {
  const [sheetNumber] = useState(props.sheetNumber);
  const { numberOfSheet } = props;

  useEffect(() => {
    if (sheetNumber) {
      const sheet = document.querySelector(`.${sheetNumber}`).parentElement;
      setZIndex(sheet);
    }
  });

  const rotate = () => {
    const sheet = document.querySelector(`.${sheetNumber}`).parentElement;
    if (sheetNumber) {
      sheet.classList.toggle("transform");

      setZIndex(sheet);
    }
  };

  const setZIndex = (sheet) => {
    const zIndex = sheetNumber[sheetNumber.length - 1];

    if (sheet.classList.value.includes("transform")) {
      sheet.style.zIndex = parseInt(zIndex) + 1;
    } else {
      sheet.style.zIndex = numberOfSheet - parseInt(zIndex);
    }
  };

  if (props.cover) {
    return (
      <div className={`sheet ${props.sheetNumber}`} onClick={rotate}>
        <figure className="back">{props.back}</figure>
        <figure className="front">{props.front}</figure>
      </div>
    );
  } else {
    return (
      <div className="sheet-container">
        <div className={`sheet-inner ${props.sheetNumber}`} onClick={rotate}>
          <figure className="back">{props.back}</figure>
          <figure className="front">{props.front}</figure>
        </div>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  numberOfSheet: numberSheetsSelect,
});

export default connect(mapStateToProps)(Sheet);
