import React, { useState } from 'react';
import Modal from './Modal';


const Footer = () => {

  const [modal, setModal] = useState(false);

const toggle=()=>
{
  setModal(!modal)
}

  return <>
  <div className='footer'>
      <button className='rules' onClick={toggle}>rules</button>
  </div>

{modal?<Modal toggle={toggle}/>:null}
  </> 
};

export default Footer;
