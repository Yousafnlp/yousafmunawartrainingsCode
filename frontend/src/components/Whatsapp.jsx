import React from 'react';

const Whatsapp = () => {
  const phoneNumber = '03370411579'; 

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <button  className='wa-btn p-0'>

<img src={require('../assets/whatsappicon.png')} className='image-class2 ' onClick={openWhatsApp} width={'60px'} alt="contact me" />
    </button>
  );
};

export default Whatsapp;
