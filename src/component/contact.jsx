import location from '../Images/location.png';
import fax from '../Images/fax.png';
import email from "../Images/email.png";
import contact from "../Images/contact.png";
import './style.css';
<link rel="stylesheet" href="/src/component/style.css" />

const Contact = () => {
    return(
        <>
        <div style={{backgroundColor:"gold",marginTop:"2rem"}}>

        <p className='title'>Contact</p>

        <div style={{position:"relative"}}>

        <div style={{display:"flex",justifyContent:"center",gap:"5px"}}>

            <div className='contactIcon'>
                <div className='iconAlign'>
                <img src={location} alt="Location" className='iconStyle'/>
                <b>OUR MAIN OFFICE</b>
                <p>Ahmedabad</p>
                </div>
            </div>
            <div className='contactIcon'>
                <div className='iconAlign'>
                <img src={fax} alt="Location" className='iconStyle'/>
                <b>PHONE NUMBER</b>
                <p>1234567989</p>
                </div>
            </div>
            <div className='contactIcon'>
                <div className='iconAlign'>
                <img src={contact} alt="contact" className='iconStyle'/>
                <b>FAX</b>
                <p>123-456-789</p>
                </div>
            </div>
            <div className='contactIcon'>
                <div className='iconAlign'>
                <img src={email} alt="email" className='iconStyle'/>
                <b>EMAIL</b>
                <p>abc@gmail.com</p>
                </div>
            </div>

        </div>

        <div style={{width:"40%",height:"20rem",backgroundColor:"gainsboro",marginLeft:"25rem"}}>
            <p style={{fontSize:"3rem",textAlign:"center"}}><b>Contact Us</b></p>
            <div style={{marginLeft: "1rem"}}>
                <div style={{marginBottom:"1rem"}}>
                <input type="text" placeholder='Enter Your Name' style={{  width: "90%",padding: "5px"}}/>
                </div>
                <div style={{marginBottom:"1rem"}}>
                <input type="text" placeholder='Enter Your Emil' style={{ width: "90%",padding: "5px"}}/>
                </div>
                <div style={{marginBottom:"1rem"}}>
                <input type="text" placeholder='Message...' style={{    width: "90%",padding: "5px"}}/>
                </div>
            </div>

        </div>
        </div>

        </div>
        </>
    )

}
export default Contact;