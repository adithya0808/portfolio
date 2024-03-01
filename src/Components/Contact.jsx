import React from 'react'
import resume from '../assets/ADITHYAN 01.pdf'
import insta from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
import phone from '../assets/phone.png'
import telegram from '../assets/telegram.png'
const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className="top">
            <p className='para5'>You can download my resume</p>
            <button><a href={resume} download className='git2'>Download</a></button>
        </div>
        <div className="down">
            <h5>Feel free to Contact me!</h5>
            <div className='icons'>
                <div><a href='https://www.instagram.com/_.__adithya_._/?hl=en'><img src={insta} alt="none" className='icon'/></a></div>
                <div><a href='https://wa.me/qr/YI7TFRJHADXOM1'><img src={whatsapp} alt="none" className='icon'/></a></div>
                <div><a href='tel:+917339367824'><img src={phone} alt="none" className='icon'/></a></div>
                <div><a href='tel:+917339367824'><img src={telegram} alt="none" className='icon'/></a></div>
            </div>
        </div>
    </div>
  )
}

export default Contact