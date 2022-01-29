import React from 'react';
import { Link } from 'react-router-dom';
import Triangle from '../images/bg-triangle.svg'

function Play({setMyChoice}) {

   const setChoice=(e)=>
   {
      setMyChoice(e.target.dataset.id);
   }

  return <div className='play'>

      <img src={Triangle} alt='.' className='triangle'/>

      <div className='items'>
      <Link to='/game'>
          <div className='icon icon--paper' data-id='paper' onClick={setChoice}>
              
          </div>
      </Link>

      <Link to='/game'>
          <div className='icon icon--scissors' data-id='scissors' onClick={setChoice}>
             
          </div>
      </Link>

      <Link to='/game'>
          <div className='icon icon--rock' data-id='rock' onClick={setChoice}>
             
          </div>
      </Link>
      
      </div>
  </div>;
}

export default Play;
