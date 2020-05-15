import React from "react";
import { connect } from "react-redux";

import { togglePopup } from "../../redux/popup/popup.actions";

import Page from "../page/page.component";
import "./add-page.style.scss";

const Add = ({ onClick }) => {
  return (
    <div className="add" onClick={onClick}>
      <div className="inner-border">
        <i className="fas fa-plus-circle"></i>
      </div>
    </div>
  );
};

const AddPage = (props) => {
  const { togglePopup } = props;
  return (
    <Page>
      <Add onClick={togglePopup} />
    </Page>
  );
};

const mapDispatchToProps = (dispatch) => ({
  togglePopup: () => dispatch(togglePopup()),
});

export default connect(null, mapDispatchToProps)(AddPage);
