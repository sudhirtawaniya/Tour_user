import { useEffect, useRef, useState } from "react";

import TourDetails from "./Tourdet";
import $ from "jquery";
import Inclusion from "./Inclusion";
import Exclusion from "./Exclusion";
import Card from "./card/card";
import Offer_card from "./card/offer-card";
import Nav from "./nav";
import Hbooknow from "./Header/Hbooknow";
import Footer from "./footer";
import Checkout from "./CHECK OUT TEMPLATE FOR 05-07";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Snackbar } from "@mui/material";
import SuccessModel from "./success";
export default function TourPackage() {
 const [onk,snk]=useState(false);
  const {url}=useParams();
  const[offc,setoffc]=useState();
  const [contact,setcon]=useState({
    name:'',
    email:'',
    mno:'',
    wno:'',
    arr_date:'',
    id:'',
    m_id:'',
    person:1,
    type:'tour',
    hotel:'',
    tr_id:''
  })
  const handleClose = () => {
    snk(false);
  };

  useEffect(()=>{window.scrollTo(0,0)},[])
  const [api,setapi]=useState({
    tour:'',
    content:[]
   });
   
   useEffect(()=>{
    
    axios.post('http://localhost/adaman/urltoid.php',JSON.stringify(url)).then((resh)=>{
      axios.post('http://localhost/adaman/perTourPackage.php',resh.data).then((res) => {
        
        const d1 = res.data;
          setapi(d1);

        
    contact.id=resh.data;
       
        console.log(d1);
        contact.price=d1.price[0]
          setcon({...contact})
         
          axios.get('http://localhost/adaman/hTourPackagelat.php').then((res) => {
            const d1 = eval(res.data)
           
            d1.sort(function(a,b){
              return b.id-a.id;
            })
            
            setoffc(d1);
           
            
            
            })
      
       
        
      
        
        
        
        })
    })
   
   },[url])
  
  useEffect(()=>{window.scrollTo(0,0)},[url])
  const [model,setmodel]=useState(false);
  const ref=useRef()
  const stateChange=(e)=>{
setmodel(e);
  }
 
  const [open, setOpen] = useState(1);
  const [suc, setsuc] = useState(false);
  const sucrun=()=>{
    setsuc(true)
    setmodel(false)
  }
  const offrun=()=>{
    
    setsuc(false)
  }


  $(".js-popup-open").on("click", function(e){
    e.preventDefault();
    var thisHref = $(this).attr("data-href"),
        popup = $(thisHref);
    
    $(".popup").not(popup).removeClass("opened");
    popup.addClass("opened");
    $("#overlay").fadeIn(100);
    $("html, body").addClass("locked");
    $("body").addClass("body-margin");
});

$(".popup .close").on("click", function(){
    var thisParent = $(this).parent(".popup");
    
    thisParent.removeClass("opened");
    
    $("#overlay").fadeOut(100);
    $("html, body").removeClass("locked");
    $("body").removeClass("body-margin");
});

$("#overlay").on("click", function(){
    
    $(".popup").removeClass("opened");
    $("#overlay").fadeOut(100);
    $("html, body").removeClass("locked");
    $("body").removeClass("body-margin");
});
  


   
  
   


  return (
    <>
    
      <div className="container">
        <Nav />
        <div className="tour_page right-sidebar">
         <Hbooknow menu_name={api.menu_name} img={api.banner} day={api.day} night={api.night} strp={api.startingp} tour={api.tour} />
         
        <div className="tour_page_body">
           
            <div className="wrap">
              <div className="wrap_float">
                <div className="left_content">
                  <div className="btnfun">
                    <div className="bottom-info-right cuscon">
                      <button
                        className="btn cusbtn button cc"
                        data-href="#book-now"
                        onClick={() => setOpen(1)}
                      >
                        Travel Plan
                      </button>
                    </div>
                    
                      <div className="bottom-info-right">
                        <button
                          className="btn cusbtn button cc "
                          data-href="#book-now"
                          onClick={() => setOpen(2)}
                        >
                          Inclusion
                        </button>
                    
                    </div>
                    
                      <div className="bottom-info-right">
                        <button
                          className="btn cusbtn button cc "
                          data-href="#book-now"
                          onClick={() => setOpen(3)}
                        >
                          Exclusion
                        </button>
                   
                    </div>
                  </div>
                  {open == 1 && (
                    <div
                      className="overview js-section content-block"
                      id="overview"
                    >
                     

                      {api.content.map((val, i) => {
                        console.log(val);
                        return (
                          <TourDetails ind={i + 1} id={i} day={"Day "+val.day}  title={val.name} data={val.dayplan} />
                        );
                      })}
                    </div>
                  )}

                  {open == 2 && (
                    <div
                      className="overview js-section content-block"
                      id="overview"
                    >
                      {api.inc.map((val, i) => {
                        return (
                          <Inclusion ind={i + 1} id={i} title={val.name} data={val.ind_d} />
                        );
                      })}
                    </div>
                  )}
                  {open == 3 && (
                    <div
                      className="overview js-section content-block"
                      id="overview"
                    >
                     
                          <Exclusion ind={1} id={1} title="Exclusion" data={api.ex.ex_d} />
                     
                  

                    </div>
                  )}
                  <div className="sidebar rm" style={{display:'none'}}>
                  <a
                    className="book-now button  js-popup-open br-btn"
                    data-href="#book-now"
                    
                  >
                    <span>Book now</span>
                    
                  </a>
                  <div className="c_con">
                  <div className="offer">
                  <h4> Latest Package</h4>
                 
                  {offc&&offc.map((val,i)=>{
                  return  <Offer_card img={val.img} t_name={val.menu_name} isp={true} url={"tour/"+val.url} price={val.startingp}/>
                 })}
                  </div>
                  </div>
                  </div>
                 
                </div>
                <div className="right_content sidebar" >
                  <a
                    className="book-now button js-popup-open br-btn"
                    data-href="#book-now"
                    
                  >
                    <span>Book now</span>
                    
                  </a>
                  <div className="c_con">
                  <div className="offer">
                  <h4> Latest Package</h4>
                 
                  {offc&&offc.map((val,i)=>{
                  return  <Offer_card  t_name={val.menu_name} isp={true} url={"tour/"+val.url} price={val.startingp} img={val.img}/>
                 })}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div style={{maxWidth:'500px',overflow:'hidden'}}>
     
     <Snackbar
       anchorOrigin={{ vertical:"bottom", horizontal:"left" }}
       open={onk}
       severity="error"
       sx={{width:'100%',maxWidth:'300px',color:'red'}}
       onClose={handleClose}
       message="Please Fill All Filds"
      
     />
   </div>
      <div className="overlay" id="overlay" />
      
     
     
      <div className="popup book-now-popup " id="book-now">
        <div className="scroll">
          <div className="scroll_wrap">
            <div className="popup-head">
              <div className="title">Book Now</div>
            </div>
            <div className="popup-body">
              <div className="form">
                <input
                  type="text"
                  className="input"
                  value={contact.name}
                  onChange={(e)=>setcon({...contact,name :e.target.value})}
                  placeholder="Your Name"
                />
             
                <input
                  type="email"
                  value={contact.email}
                  onChange={(e)=>setcon({...contact,email:e.target.value})}
                  className="input"
                  placeholder="Your Email"
                />
                <input
                  type="number"
                  value={contact.mno}
                  onChange={(e)=>setcon({...contact,mno:e.target.value})}
                  className="input"
                  placeholder="Your Number Phone"
                />
                 <input
                  type="number"
                  value={contact.wno}
                  onChange={(e)=>setcon({...contact,wno:e.target.value})}
                  className="input"
                  placeholder="Your Whats App Number"
                />
                
                <input
                   type="text"
                   ref={ref}
                   className="input"
                   onClick={() => (ref.current.type = "date")}
                   onBlur={() => (ref.current.type = "date")}
                   value={contact.arr_date}
                   onChange={(e)=>setcon({...contact,arr_date:e.target.value})}
                  placeholder="Date of arrival"
                  defaultValue={""}
                />
              
                <label for="person">Person:</label>

<select name="person" className="input" onChange={(e)=>{
  contact.person=e.target.value;
setcon({...contact,price:api.price[(e.target.value)-1]})
}}id="person">
  <option value={1}>1</option>
  <option value={2}>2</option>
  <option value={3}>3</option>
  <option value={4}>4</option>
  <option value={5}>5</option>
  <option value={6}>6</option>
  <option value={7}>7</option>
  <option value={8}>8</option>
  <option value={9}>9</option>
</select>

               
                <button className="submit button " onClick={()=>{
                 if(contact.email&&contact.arr_date&&contact.email&&contact.mno&&contact.name&&contact.person&&contact.wno!='')
                {
                 
                    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                
                    if(re.test(contact.mno)&&re.test(contact.wno)){
                      setmodel(true)
                    }
                    else{
                      alert("Please Enter Valid Mobile Number");
                    }
                
                  }
               else
               snk(true);
               
                }}>
                  Book Now | <b>{contact.price}</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="close" />
      </div>
      {<Checkout open={model} war={false} sucrun={sucrun} contact={contact} data={api} stateChange={stateChange} />}
      <SuccessModel open={suc} offrun={offrun}/>
    </>
  );
}
