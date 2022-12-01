import logo from "./logo.png";
import {Helmet} from "react-helmet";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import $ from 'jquery'
import axios from "axios";
export default function Nav() {
  function popupFunction(){  
 
        var scrollTop = $(window).scrollTop();
        var windowH = $(window).innerHeight();
        $("html, body").removeClass("locked");
        $("body").addClass("pop-up-open");
        // $("body").attr("data-top", scrollTop);
       
        // $("body").css({
        //     "top": "-" + scrollTop + "px"
        // });
    
}

function popupCloseFunction(){
  $("html, body").removeClass("locked");
        var scTop = $("body").attr("data-top");
      
        var suffix = scTop.match(/\d+/);
        $("body").removeClass("pop-up-open");
        $("body").removeAttr("style");

        $("html, body").scrollTop(parseInt(suffix));
    
}
  function run(){
    var thisBtn = $(this),
        menu = $("#menu_wrap").fadeIn();
    
   
    $("#menu-close, #mobile_btni").addClass("opened");
    $("html, body").removeClass("locked");
    popupFunction();
}

 function off(){
  $("body").removeClass("pop-up-open");
   
    $("#menu-close, #mobile_btni").removeClass("opened");
    $("#menu_wrap").fadeOut();
    popupCloseFunction();
}
    const [visible,setvisible]=useState('none')
    const [snd,setsnd]=useState('none')
    const navigate=useNavigate()
 useEffect(()=>{

  $("body").removeClass("pop-up-open");
 },[])
 
 const [api,setapi]=useState([{
  tour:''
 }]);
 var[ad,setad]=useState([]);
 var[fa,setfa]=useState([]);
 var[ra,setra]=useState([]);
 var[fe,setfe]=useState([]);
 useEffect(()=>{
  
  axios.get('http://localhost/adaman/TourPackage.php').then((res) => {
    const d1 = eval(res.data)
    fa=[];
      ad=[];
      ra=[];
      fe=[];
    for(let i=0;i<d1.length;i++){
      console.log(d1[i]);
      d1.sort(function(a,b){
        return b.id-a.id;
      })
      if(d1[i].tour==='ANDAMANS GLIMPSE'){ad.push(d1[i])
     
      }
      if(d1[i].tour==='FANTASTIC JOY'){fa.push(d1[i])
   
      }
      if(d1[i].tour==='RAINBOW ANDAMANS')ra.push(d1[i])
      if(d1[i].tour==='FEEL THE NATURE')fe.push(d1[i])
    }
    
    setapi(d1);
     setad(ad)
     setfa(fa)
     setra(ra)
     setfe(fe)
   
    
    })
 },[])
 return <> 
    <Helmet>
    <script isHydrating={true} type="text/javascript" 
      src='./js/script.js' />
   </Helmet>
    <div className="top_panel" style={{ backgroundColor: "white" ,color:'black'}}>
    <div className="wrap">
      <div className="wrap_float">
       
        <div className="left">
          
          <a href="/" className="logo">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="right">
              
              
        <div className="menu_wrap" id="menu_wrap">
          <div className="scroll" style={{  position:'relative',  right:"-200px"}}>
            <div className="center">
              <div className="menu">
                <ul>
                  
                  <li onClick={()=>navigate("/")}>
                  
                      <span>Home</span>&nbsp;<AddIcon className="hvs" fontSize="10px"/>
                   
                  </li>
                  <li className="dropdown_li"  onMouseEnter={()=>{
                    if(window.innerWidth>1200)
                    setvisible('block')
                    else
                    setsnd('block')
                  }} onMouseLeave={()=>{
                    if(!window.innerWidth<=1200)
                    setvisible('none')
                   
                    else
                    setsnd('none')
                    }}>
                 
                      <span >Book Tour Packages</span>&nbsp;<AddIcon className="hvs" fontSize="10px"/>
                   
                    <ul className="dropdown_ul" id="t_menu"style={{display:visible}}>
                      <table cellSpacing={0}>
                        <tr >
                      <th>
                       
                       ANDAMANS GLIMPSE
                       
                      </th>
                      <th>
                      
                        FANTASTIC JOY
                      
                      </th>
                      <th>
                       
                        RAINBOW ANDAMANS
                      
                      </th>
                      <th>
                      
                        FEEL THE NATURE
                       
                      </th>
                      </tr>
                      
                      
                      {[...Array(6)].map((ele,i)=>{
                       console.log(ad[i]);
                         return <tr>
                         
                         <td> { ad[i]&&<Link to={"/tour/"+ad[i].url}> {ad[i].menu_name} </Link>}</td>
                         <td>{ fa[i]&&<Link to={"/tour/"+fa[i].url}> {fa[i].menu_name} </Link>}</td>
                         <td> { ra[i]&&<Link to={"/tour/"+ra[i].url}> {ra[i].menu_name} </Link>}</td>
                         <td> { fe[i]&&<Link to={"/tour/"+fe[i].url}> {fe[i].menu_name} </Link>}</td>
                         
                         </tr>

                      })}
                      
                      
                     
                      </table>
                    </ul>
                    <ul className="dropdown_ul" id="t_menu"style={{display:snd}}>
                      
                      
                       
                       {ad.length>0&&"ANDAMANS GLIMPSE"}
                       {ad.map((val,i)=>{
                        return <Link to={"/tour/"+val.url}><p style={{fontSize:'15px'}}>{val.menu_name}</p></Link>
                       })}
                     
                    <br />
                      
                        {fa.length>0&&"FANTASTIC JOY"}
                        {fa.map((val,i)=>{
                        return <Link to={"/tour/"+val.url}><p style={{fontSize:'15px'}}>{val.menu_name}</p></Link>
                       })}
                      <br />
                    
                       
                        {ra.length>0&&"RAINBOW ANDAMANS"}
                        {ra.map((val,i)=>{
                        return <Link to={"/tour/"+val.url}><p style={{fontSize:'15px'}}>{val.menu_name}</p></Link>
                       })}
                      
                    <br />
                      
                       {fe.length>0&&"FEEL THE NATURE"}
                        {fe.map((val,i)=>{
                        return <Link to={"/tour/"+val.url}><p style={{fontSize:'15px'}}>{val.menu_name}</p></Link>
                       })}
                      
                     
                      
                      
                      
                      
                      
                     
                     
                    </ul>
                  </li>
               
                 
                  <li  onClick={()=>navigate("/bookcab")}>
                  
                      <span>Book A Cab</span>&nbsp;<AddIcon className="hvs" fontSize="10px"/>
                     
              
                  </li>
                 
             
                 
                 
                  <li  onClick={()=>navigate("/blogdetails")}>
                 
                      <span>Live Blog</span>&nbsp;<AddIcon className="hvs" fontSize="10px"/>
                   
                   
                  </li> 
                 
                </ul>
              </div>
              <div class="close" id="menu-close" onClick={off}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
              </div>
              
            </div>
        
          </div>
        </div>
        <div className="mobile_btn" id="mobile_btni" onClick={run} style={{backgroundColor:'orangered'}}>
          <span />
          <span />
          <span />
         
        </div>
      </div>
    </div>
  </div>
    </>
}