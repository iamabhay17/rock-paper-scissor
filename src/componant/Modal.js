import React from 'react';
import ReactDOM from 'react-dom';
import Close from '../images/icon-close.svg';
import Rules from '../images/image-rules.svg'

function Modal({toggle}) {
  return ReactDOM.createPortal(
      <div className='modal-container'>
          <div className='modal-box'>
              <div className='modal-header'>
                  <h1>Rules</h1>
                  <button onClick={toggle}>
                      <img src={Close} alt='.'/>
                  </button>
              </div>
              <img src={Rules} alt='rules'/>
          </div>
      </div>
      
      ,

      document.getElementById('modal')
  );
}

export default Modal;
