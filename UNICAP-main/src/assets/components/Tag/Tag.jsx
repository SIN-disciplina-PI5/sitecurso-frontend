import React from 'react';

const Tag = ({ text, imageSrc }) => {
  return (
    <div className='ourServiceTag'>
      <div className='ourServiceImgBg'>
        <i className='ourServiceIcon'><img src={imageSrc} alt="" className="ourServiceImg"/></i>
      </div>
      <div className='ourServiceContentBox'>
        <p className='ourServiceContent'>{text}</p>
      </div>
    </div>
  );
};

export default Tag;
