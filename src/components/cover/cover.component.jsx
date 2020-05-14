import React from "react";

import cover from '../../assets/images/cover.png';

import "./cover.style.scss";

const Cover = () => {
  return (
    <div className='cover'>
      <img src={cover} alt='cover-bg' />
      <div className='inner-border'>
        <div className='border'>
          <div className='title'>
            <p className='name'>HTTTQL_62</p>
            <p className='album'>THE ALBUM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
