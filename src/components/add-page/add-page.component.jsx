import React from "react";

import Page from "../page/page.component";
import "./add-page.style.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="inner-border">
        <i className="fas fa-plus-circle"></i>
      </div>
    </div>
  );
};

const AddPage = () => {
  return (
    <Page>
      <Add />
    </Page>
  );
};

export default AddPage;
