import "./css/footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import RoomIcon from '@mui/icons-material/Room';
import logo from "./logo.png";
import { Typography } from "@mui/material";
import Map from "./map";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Footer() {
  const navigate=useNavigate();
  const[link,setlink]=useState()
  useEffect(()=>{
    axios.get('http://localhost/adaman/socialLinks.php').then((res) => {
      const d1 = eval(res.data)
     setlink(d1)
     
    })
  })
  return (
    <>
      <div className="container_foo">
        <div className="main_foo" >
          <div className="logodiv">
            <img width={200} src={logo} alt="" />
            <Typography variant="body1">  Shop 05, First Floor, Panchayat Market Next to Gram Panchayat
            Bhavan, Sippighat Port Blair,  Andaman and Nicobar Islands INDIA -
            Pin Code - 744105 </Typography>
            <h5>Follow Us</h5>
            <div className="sf">
            {link&&link.map((val)=>{
              if(val.Account=='faceBook'){
                return  <div className="sl" onClick={()=>window.location.href=val.link}>
                
                <FacebookIcon className="i" />
              </div>

              }
              if(val.Account=='google'){
                return  <div className="sl" onClick={()=>window.location.href=val.link}>
                
                <GoogleIcon className="i" />
              </div>

              }
              if(val.Account=='Instagram'){
                return  <div className="sl" onClick={()=>window.location.href=val.link}>
                
                <InstagramIcon className="i" />
              </div>

              }
              if(val.Account=='Linkdin'){
                return  <div className="sl" onClick={()=>window.location.href=val.link}>
                
                <LinkedInIcon className="i" />
              </div>

              }
             
            })}
           
              
           
            </div>
          </div>
          <div className="quicklinks">
            <h4>Quick Links</h4>
            <div className="link">
              <p>Terms & Condition</p>
              <p>Privacy Policy</p>
              <p>Cancelation Policy</p>
              <p onClick={()=>navigate("/tourdetails")}>Book Tour Package</p>
              <p onClick={()=>navigate("/bookcab")}>Book A Cab</p>
              <p onClick={()=>navigate("/blogdetails")}>Live Blog</p>
            </div>
          </div>
          <div className="tourtype" style={{    textAlign: 'left',transform: 'translateX(-190px)'}}>
           <Map/>
          </div>
        </div>
       
        <div className="contactus">
         <h5>Contact Us</h5>
          <p><LocalPhoneIcon className="resi"/> 91-9531898558</p>
          <p><MailIcon className="resi"/>raja@andamanmangroves.com</p> 
          <p style={{textAlign:'center'}}>
            <RoomIcon className="resi"/>
           
           Andaman and Nicobar Islands 
            </p>
          
        </div>
        <div className="terms">
          <div className="copyright">Copyright © 2022 Andaman Mangroves Holidays | Developed By YRP IT Solutions</div>
         
        </div>
      </div>
    </>
  );
}
