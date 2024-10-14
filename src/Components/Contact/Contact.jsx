import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "4dff659a-65b5-40f0-ae06-d3caf1bc778c");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send Us A message <img src={msg_icon} alt="" /></h3>
        <p>Feel Free to Reach Out Through Contact form or find out contact information Below</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@Edumain.dev</li>
            <li ><img src={phone_icon} alt="" />+91 7597595146</li>
            <li> <img src={location_icon} alt="" />sec 3 Udaipur</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form form onSubmit ={onSubmit}>
            <label>
                your name
            </label>
            <input type="text" name='name' placeholder='Enter Your Name' required/>

            <label>
                phone number
            </label>
            <input type="text" name='phone' placeholder='Enter Your Mobile number' required/>

            <label>
                Write Your Message Here
            </label>
            <textarea name="message"  rows="6" placeholder='Enter Your Message' required></textarea>
            <button type='Submit' className="btn dark-btn">Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>

      </div>

    </div>
  )
}

export default Contact
