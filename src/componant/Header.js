import React from 'react';

const Header = ({score}) => {
  return <div className='header'>
      <div className='text'>
        <span>rock</span>
        <span>paper</span>
        <span>scissors</span>
      </div>
      <div className='score-box'>
        <span>score</span>
        <div className='score-box__score'>
           {score}
        </div>
      </div>
  </div>;
};

export default Header;

