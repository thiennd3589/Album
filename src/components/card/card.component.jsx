import React from "react";

import "./card.style.scss";

const Card = (props) => {
  return (
    <div className="card">
      <div className="image">
        <img src={props.img} alt="avatar" />
      </div>
      <div className="infor">
        {props.infor.name}-{props.infor.id}
      </div>
    </div>
  );
};

export default Card;
