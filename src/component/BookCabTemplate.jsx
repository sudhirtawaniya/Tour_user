    import "./css/format.css";
    import * as React from "react";
    import FormGroup from "@mui/material/FormGroup";
    import FormControlLabel from "@mui/material/FormControlLabel";
    import Checkbox from "@mui/material/Checkbox";
    import { Button, Box, Typography, Snackbar } from "@mui/material";
    import logo from "./logo.png";
    import ClearIcon from "@mui/icons-material/Clear";
    import emailjs from '@emailjs/browser';


import Modal from '@mui/joy/Modal'
import { ModalClose, ModalDialog, Sheet } from "@mui/joy";



import Paper from '@mui/material/Paper';

import axios from "axios";
import moment from "moment";




    export default function Format_cab(props) {
        const [gtotal,setg]=React.useState(0)
        const[order,setorder]=React.useState()
        const [onk,setSnk]=React.useState(false);
        const[check,setch]=React.useState({one:false,two:false,three:false,four:false})
        const calculate=()=>{
        
          
          var pr=0;
          for(var i=0;i<props.cab.length;i++){
            if(props.cab[i]&&props.cab[i].det)
            pr+=parseInt(props.cab[i].det.cost);
            // console.log(props.cab[i].det.cost);
          }
          setg(pr)
        }
        React.useEffect(()=>{
          axios.get('http://localhost/adaman/cab_order.php').then((res) => {
              var d3 = eval(res.data)
             
             d3=parseInt(d3)+1;
             console.log(d3);
              if(d3<10){
                setorder('AMHCAB00'+d3)
              }
              else if(d3>9&&d3<100){
                setorder('AMHCAB0'+d3)
              }
              else{
                setorder('AMHCAB'+d3)
              }
             
             
              
              
              })
         
          calculate();
        },[props])
        const handleClose = () => {
          setSnk(false);
         
        };
        var [data,setdata]=React.useState({...props.data})
   
          const sendinfo=()=>{
            var k=0;
            data=props.data;
            data.id=[];
            data.m_id=[];
            props.cab.map((val)=>{
             console.log("enter");
              if(val&&val.det){
              data.id[k]=val.det.id;
              data.m_id[k]=val.det.m_id;
              k++; 
            }
             
            })
          
            console.log(data);
            axios.post('http://localhost/adaman/transactionCab.php',data);
          }
          const form = React.useRef();
          const sendemail=(e)=>{
            console.log("enter");
             console.log(form);
           
             
           
               emailjs.sendForm('service_9sgdov1','template_5w9ep5h',form.current, 'MXxOVqe-MdTEctsaK')
                 .then((result) => {
                     console.log(result.text);
                 }, (error) => {
                     console.log(error.text);
                 });
               
           }
        const loadscript=(src)=>{
          return new Promise((res)=>{
      const script=document.createElement('script');
      script.src=src;
      script.onload=()=>{
        res(true)
      }
      script.onerror=()=>{
        res(false);
      }
      document.body.appendChild(script)
          })
        }
         const diaplayRazorpay=async(amount,total)=>{
          setSnk(false)
          const res=await loadscript("https://checkout.razorpay.com/v1/checkout.js")
          if(!res){
            alert("something went worng")
            return
          }
          const options={
            key:"rzp_test_jq6aLjznPRoxMX",
            currency:"INR",
            amount:amount*100,
            name:"Sudhir Tawaniya",
            description:"Thanks for Booking",
            handler:function(res){
              props.data.tr_id=res.razorpay_payment_id;
              props.data.credit=amount
              props.data.price=total
              props.data.balance=total-amount

            sendemail()
              sendinfo()
              props.sucrun()
            }
          }
          const payobject=new window.Razorpay(options);
          payobject.open();
        }
      return (
        <>


        
      <React.Fragment>
        <Modal open={props.open} className="show" onClose={() => props.stateChange(false)}>
          <ModalDialog
            aria-labelledby="basic-modal-dialog-title"
            aria-describedby="basic-modal-dialog-description"
            sx={{
              maxWidth: 1050,
             
            
              height: 600,
            
              borderRadius: 'md',
              overflowY:'scroll',
              overflowX:'hidden',
              border:'none',
              m:0,
              boxShadow: 'lg',
            }}
          >
             <Sheet
          variant="outlined"
          sx={{
            backgroundColor:"white",
            maxWidth: 900,
            borderRadius: 'md',
             p: 3,
            boxShadow: 'lg',
          }}
        >
             <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
            color:'white',
            backgroundColor:'red',
              zIndex:1000,
             transform:'translateX(00px)',
              bgcolor: 'background.body',
            }}
          />
            <div className="container_fr">
            <div className="header_for">
              <div className="lf_fr">
                <img
                  src={logo}
                  width={150}
                  style={{ marginLeft: "5px", marginTop: "10px" }}
                  alt="logo"
                />
              </div>
              <div className="rf_fr">
                <Typography variant="h5" className="hd_fr">
                  ANDAMAN MANGROVES HOLIDAYS
                </Typography>
                <Typography variant="body2" className="ad_fr">
                  Shop-05, Panchayat Market,Near Gram Panchayat Bhavan, Sippighat,
                 
                </Typography>
                <Typography variant="body2" className="ad_fr">
                  Port Blair, South Andaman, Andaman & Nicobar Islands, India
                </Typography>
                <Typography variant="body2" className="ad_fr">
                  Pin Code: 744105, data / Whatsapp at +91-9531898558
                </Typography>
              </div>
            </div>
            <div className="body_fr">
             { console.log(props.cab)}
              <div className="pr_dt_fr" style={{ marginBottom: 0,marginTop:0 }}>
              <div component={Paper}>
      <table cellSpacing={0} >
        <tableHead>
                    <tr>
                      <th>
                        {" "}
                        <Typography variant="body1">Name</Typography>
                      </th>
                      <th>
                        {" "}
                        <Typography variant="body1" color={'gray'}>{props.data.name}</Typography>
                      </th>
                      <th>
                        <Typography variant="body1">Booking Date</Typography>
                      </th>
                      <th>
                        <Typography variant="body1" color={'gray'}>{moment().format("DD-MM-YYYY")}</Typography>
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <Typography variant="body1" >NO OF PERSON</Typography>
                      </th>
                      <th>
                        <Typography variant="body1" color={'gray'}>{props.data.person}</Typography>
                      </th>
                      <th>
                        <Typography variant="body1">Order Number</Typography>
                      </th>
                      <th>
                        <Typography variant="body1" color={'gray'}>{order}</Typography>
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <Typography variant="body1">EMAIL ID</Typography>
                      </th>
                      <th>
                        <Typography variant="body1" color={'gray'}>{props.data.email}</Typography>
                      </th>
                      <th>
                        <Typography variant="body1">Date of Arrival</Typography>
                      </th>
                      <th>
                        <Typography variant="body1" color={'gray'}>{moment(props.data.arr_date).format("DD-MM-YYYY")}</Typography>
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <Typography variant="body1">MOBILE NUMBER</Typography>
                      </th>
                      <th>
                        <Typography variant="body1" color={'gray'}>{props.data.mno}</Typography>
                      </th>
                      <th>
                        <Typography variant="body1">HOTEL NAME</Typography>
                      </th>
                      <th>
                        <Typography variant="body1" color={'gray'}>{props.data.hotel}</Typography>
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <Typography variant="body1">Pick Up Point</Typography>
                      </th>
                      <th style={{    padding: 0}}>
                      <th style={{    border: 'none'}}>
                        <Typography variant="body1" color={'gray'}>{props.data.pickup}</Typography> </th>
                       
                      </th>
                      <th style={{    padding: 0,}}>
                      <th   style={{   borderTop: 'none',borderBottom: 'none',borderLeft:'none'}}>
                        <Typography variant="body1" >Car</Typography>
                      </th>
                      <th style={{    border: 'none'}}>
                        <Typography variant="body1" color={'gray'}>{props.data.car}</Typography> </th>
                        
                      </th>
                      <th style={{    padding: 0,}}>
                      <th   style={{   borderTop: 'none',borderBottom: 'none',borderLeft:'none'}}>
                        <Typography variant="body1" >Cargo</Typography>
                      </th>
                      <th style={{    border: 'none'}}>
                        <Typography variant="body1" color={'gray'}>{props.data.cargo}</Typography> </th>
                        
                      </th>
                    </tr>
               
                  </tableHead>

                </table>
                </div>
                
                
              </div>
              
              <div className="tour_details_fr ">
              <div component={Paper}>
      <table cellSpacing={0} style={{minWidth:'110%' ,borderCollapse:'separate'}} aria-label="simple table">
        <tableHead>
                    <tr style={{ textAlign: "center" }} >
                      <th className="thd">
                        <Typography align={"center"} color="white" variant="body1">
                          SELECTED
                        </Typography>
                      </th>
                      <th className="thd">
                        <Typography align={"center"} color="white" variant="body1">
                          CAR TRANSFER AS BELOW
                        </Typography>
                      </th>
                      <th align={"center"} className="thd">
                        <Typography align="center" color="white" variant="body1">
                          AMOUNT
                        </Typography>
                      </th>
                     
                    </tr>
                   {props.cab && props.cab.map((val,i)=>{
                   
                    return <tr>
                      {val && val.data &&<>
                    <th>
                      <Typography align={"center"} variant="body1">
                        {i+1}
                      </Typography>
                    </th>
                    <th className="d_fr">
                      <Typography align={"left"} variant="body1">
                       {val.data.toUpperCase()}
                      </Typography>
                    </th>
                    <th>
                      <Typography align={"center"} variant="body1">
                        {val.det.cost}
                      </Typography>
                    </th>
                    <th style={{border:'none'}} className="left_bb">
                      <Typography align={"center"} variant="body1">
                        <Button color="error" onClick={()=>props.rm(i)}>
                        <ClearIcon sx={{ color: "red" }} /></Button>
                      </Typography>
                    </th>
                    </>
                   }
                  </tr>
                   }) }
                   
    
                    <tr >
                     
    
                      <th colSpan={2} style={{ textAlign: "right" }}>
                        <Typography variant="p" sx={{fontSize:'18px'}}>GRAND TOTAL</Typography>
                      </th>
                      <th>
                        <Typography align="center" variant="h6" >{gtotal}</Typography>
                      </th>
                    </tr>
                    <tr >
                     
                      <th colSpan={2} style={{ textAlign: "right" }}>
                        <Typography variant="p" sx={{fontSize:'18px'}}>GST 5%</Typography>
                      </th>
                      <th>
                        <Typography align="center" variant="h6">{Math.ceil((gtotal*5)/100)}</Typography>
                      </th>
                    </tr>
                    <tr>
                      <th colSpan={3}>
                        <FormControlLabel
                        className="sh"
                          control={<Checkbox onClick={()=>setch({...check,one:!check.one})}/>}
                          
                          label=""
                        />
                        <label htmlFor="sh"><span style={{fontSize:'13px'}}> I ACCEPT THE ABOVE SAID CAR TRANSFER WILL BE ON TIMELY BASED PICKUP AND DROP ONLY - NO DISPOSAL BASIS</span></label>
                      </th>
                     
                    </tr>
                    <tr>
                      <th colSpan={2}>
                        {" "}
                        <FormControlLabel
                          control={<Checkbox  onClick={()=>setch({...check,two:!check.two})}/>}
                         
                          label="I ACCEPT THE TOTAL NET PAYABLE AMOUNT"
                        />
                      </th>
                      <th><Typography align="center" variant="h6">{Math.ceil(gtotal+((gtotal*5)/100))}</Typography></th>
                    </tr>
                    <tr  >
                      <th colSpan={2}>
                        <FormControlLabel
                          control={<Checkbox  onClick={()=>setch({...check,three:!check.three})}/>}
                          label="I ACCEPT TO PAY 10% OF TOTAL NET PAYABLE AMOUNT"
                         
                        />
                      </th>
                      <th><Typography align="center" variant="h6">{Math.ceil(((gtotal+((gtotal*5)/100))*10)/100)}</Typography></th>
                    </tr>
                    <tr>
                      <th colSpan={2}>
                        <FormControlLabel
                          control={<Checkbox onClick={()=>setch({...check,four:!check.four})}/>}
                          label="I ACCEPT TO PAY BALANCE 90% ON ARRIVAL DAY BY CASH OR INSTANT ONLINE TRANSFER  "
                          
                        />{" "}
                      </th>
                      <th><Typography align="center" variant="h6">{Math.ceil(((gtotal+((gtotal*5)/100))*90)/100)}</Typography></th>
                    </tr>
                   
                 </tableHead>
                 </table>
                 </div>
              </div>
    
             
              <div className="btn_fr">
                <Button variant="contained" className="pay_now_fr" onClick={()=>{
                  console.log();
                  if(check.one&&check.two&&check.three&&check.four==true)
                  diaplayRazorpay(Math.ceil(((gtotal+((gtotal*5)/100))*10)/100),Math.ceil(gtotal+((gtotal*5)/100)))
                  else
                 { 
                  console.log("enter");
                  //setSnk(true)
               
                }
                  }}>
                  <Typography variant="body1">Pay Now</Typography>
                </Button>
              </div>
              <div style={{maxWidth:'500px',zIndex:100000}}>
     
     <Snackbar
       anchorOrigin={{ vertical:"bottom", horizontal:"left" }}
       open={onk}
       severity="error"
       sx={{width:'100%',maxWidth:'300px',color:'red'}}
      
       message="Please Check All Checks"
      
     />
   </div>
            </div>
            
     
          </div>
        
</Sheet>

          </ModalDialog>

        </Modal>
   
      </React.Fragment>
     
         



         {/* mobile Section */}
         <React.Fragment>
        <Modal open={props.open} className="hide"  style={{display:'none'}}onClose={() => props.stateChange(false)}>
          <ModalDialog
            aria-labelledby="basic-modal-dialog-title"
            aria-describedby="basic-modal-dialog-description"
            sx={{
              maxWidth: 1050,
             
            backgroundColor:'white',
              height: 600,
            
              borderRadius: 'md',
              overflowY:'scroll',
              overflowX:'hidden',
              border:'none',
              m:0,
              boxShadow: 'lg',
            }}
          >
       
             <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
            color:'white',
            backgroundColor:'red',
              zIndex:1000,
             transform:'translateX(00px)',
              bgcolor: 'background.body',
            }}
           
          />
            <div className="container_fr">
            <img
                  src={logo}
                  width={150}
                  style={{ marginLeft: "5px", marginTop: "10px" }}
                  alt="logo"
                />
            <div className="header_for">
              <div className="lf_fr">
               
              </div>
              <div className="rf_fr">
                <Typography variant="h5" className="hd_fr">
                  ANDAMAN MANGROVES HOLIDAYS
                </Typography>
                <Typography variant="body2" className="ad_fr">
                  Shop-05, Panchayat Market,Near Gram Panchayat Bhavan, Sippighat,
                  Port Blair,{" "}
                </Typography>
                <Typography variant="body2" className="ad_fr">
                  Port Blair, South Andaman, Andaman & Nicobar Islands, India
                </Typography>
                <Typography variant="body2" className="ad_fr">
                  Pin Code: 744105, data / Whatsapp at +91-9531898558
                </Typography>
              </div>
            </div>
            <div className="body_fr">
             { console.log(props.cab)}
              <div className="pr_dt_fr" style={{ marginBottom: 0,marginTop:0 }}>
              <div component={Paper}>
      <table cellSpacing={0} >
        <>
                    <tr>
                      <th>
                        {" "}
                        <Typography variant="body1">Name</Typography>
                      </th>
                      <th>
                        {" "}
                        <Typography variant="body1" color={'gray'}>{props.data.name}</Typography>
                      </th>
                    
                    </tr>
                    <tr>
                      <th>
                        <Typography variant="body1" >NO OF PERSON</Typography>
                      </th>
                      <th>
                        <Typography variant="body1" color={'gray'}>{props.data.person}</Typography>
                      </th>
                    
                    </tr>
                    <tr>
                      <th>
                        <Typography variant="body1">EMAIL ID</Typography>
                      </th>
                      <th>
                        <Typography variant="body1" color={'gray'}>{props.data.email}</Typography>
                      </th>
                      
                    </tr>
                    <tr>
                      <th>
                        <Typography variant="body1">MOBILE NUMBER</Typography>
                      </th>
                      <th>
                        <Typography variant="body1" color={'gray'}>{props.data.mno}</Typography>
                      </th>
                     
                    </tr>
                    <tr>
                      <th>
                        <Typography variant="body1">Pick Up Point</Typography>
                      </th>
                      <th style={{    padding: 0}}>
                      <th style={{    border: 'none'}}>
                        <Typography variant="body1" color={'gray'}>{props.data.pickup}</Typography> </th>
                       
                      </th>
                      
                   
                    </tr>
               
                 

                
                
            
        
                    <tr>
                      <th>
                        {" "}
                        <Typography variant="body1">Booking Date</Typography>
                      </th>
                      <th>
                        {" "}
                        <Typography variant="body1" color={'gray'}>{moment().format("DD-MM-YYYY")}</Typography>
                      </th>
                    
                    </tr>
                    <tr>
                      <th>
                        <Typography variant="body1" >Order Number</Typography>
                      </th>
                      <th>
                        <Typography variant="body1" color={'gray'}>{order}</Typography>
                      </th>
                    
                    </tr>
                    <tr>
                      <th>
                        <Typography variant="body1">Date Of Arrival</Typography>
                      </th>
                      <th>
                        <Typography variant="body1" color={'gray'}>{moment(props.data.arr_date).format("DD-MM-YYYY")}</Typography>
                      </th>
                      
                    </tr>
                    <tr>
                      <th>
                        <Typography variant="body1">Hotel Name</Typography>
                      </th>
                      <th>
                        <Typography variant="body1" color={'gray'}>{props.data.hotel}</Typography>
                      </th>
                     
                    </tr>
                    <tr>
                      <th>
                        <Typography variant="body1">Car</Typography>
                      </th>
                      <th style={{    padding: 0}}>
                      <th style={{    border: 'none'}}>
                        <Typography variant="body1" color={'gray'}>{props.data.car}</Typography> </th>
                       
                      </th>
                      
                   
                    </tr>
                    <tr>
                      <th>
                        <Typography variant="body1">Cargo</Typography>
                      </th>
                      <th style={{    padding: 0}}>
                      <th style={{    border: 'none'}}>
                        <Typography variant="body1" color={'gray'}>{props.data.cargo}</Typography> </th>
                       
                      </th>
                      
                   
                    </tr>
                 </>
</table>
              </div>
              
                </div>
              <div className="tour_details_fr ">
              <div component={Paper}>
              <form onSubmit={sendemail} ref={form} style={{display:'none'}} >
          <input type="text" value={props.data.name} name="name" />
          <input type="text" value={props.data.email} name="toEmail" />
          <input type="text" value="" name="message" />
          <input type="text" value={order} name="Subject" />
          <input type="file"   name="file" />
        </form>
      <table cellSpacing={0} style={{minWidth:'110%' ,borderCollapse:'separate'}} aria-label="simple table">
        <tableHead>
                    <tr style={{ textAlign: "center" }} >
                      <th className="thd">
                        <Typography align={"center"} color="white" variant="body1">
                          SELECTED
                        </Typography>
                      </th>
                      <th className="thd">
                        <Typography align={"center"} color="white" variant="body1">
                          CAR TRANSFER AS BELOW
                        </Typography>
                      </th>
                      <th align={"center"} className="thd">
                        <Typography align="center" color="white" variant="body1">
                          AMOUNT
                        </Typography>
                      </th>
                     
                    </tr>
                   {props.cab && props.cab.map((val,i)=>{
                   
                    return <tr>
                      {val && val.data &&<>
                    <th>
                      <Typography align={"center"} variant="body1">
                        {i+1}
                      </Typography>
                    </th>
                    <th className="d_fr">
                      <Typography align={"left"} variant="body1">
                       {val.data.toUpperCase()}
                      </Typography>
                    </th>
                    <th>
                      <Typography align={"center"} variant="body1">
                        {val.det.cost}
                      </Typography>
                    </th>
                    <th style={{border:'none'}} className="left_bb">
                      <Typography align={"center"} variant="body1">
                        <Button color="error" onClick={()=>props.rm(i)}>
                        <ClearIcon sx={{ color: "red" }} /></Button>
                      </Typography>
                    </th>
                    </>
                   }
                  </tr>
                   }) }
                   
    
                    <tr >
                     
    
                      <th colSpan={2} style={{ textAlign: "right" }}>
                        <Typography variant="p" sx={{fontSize:'18px'}}>GRAND TOTAL</Typography>
                      </th>
                      <th>
                        <Typography align="center" variant="h6" >{gtotal}</Typography>
                      </th>
                    </tr>
                    <tr >
                     
                      <th colSpan={2} style={{ textAlign: "right" }}>
                        <Typography variant="p" sx={{fontSize:'18px'}}>GST 5%</Typography>
                      </th>
                      <th>
                        <Typography align="center" variant="h6">{Math.ceil((gtotal*5)/100)}</Typography>
                      </th>
                    </tr>
                    <tr>
                      <th colSpan={3}>
                        <FormControlLabel
                        className="sh"
                          control={<Checkbox onClick={()=>setch({...check,one:!check.one})}/>}
                          
                          label=""
                        />
                        <label htmlFor="sh"><span style={{fontSize:'13px'}}> I ACCEPT THE ABOVE SAID CAR TRANSFER WILL BE ON TIMELY BASED PICKUP AND DROP ONLY - NO DISPOSAL BASIS</span></label>
                      </th>
                     
                    </tr>
                    <tr>
                      <th colSpan={2}>
                        {" "}
                        <FormControlLabel
                          control={<Checkbox  onClick={()=>setch({...check,two:!check.two})}/>}
                         
                          label="I ACCEPT THE TOTAL NET PAYABLE AMOUNT"
                        />
                      </th>
                      <th><Typography align="center" variant="h6">{Math.ceil(gtotal+((gtotal*5)/100))}</Typography></th>
                    </tr>
                    <tr  >
                      <th colSpan={2}>
                        <FormControlLabel
                          control={<Checkbox  onClick={()=>setch({...check,three:!check.three})}/>}
                          label="I ACCEPT TO PAY 10% OF TOTAL NET PAYABLE AMOUNT"
                         
                        />
                      </th>
                      <th><Typography align="center" variant="h6">{Math.ceil(((gtotal+((gtotal*5)/100))*10)/100)}</Typography></th>
                    </tr>
                    <tr>
                      <th colSpan={2}>
                        <FormControlLabel
                          control={<Checkbox onClick={()=>setch({...check,four:!check.four})}/>}
                          label="I ACCEPT TO PAY BALANCE 90% ON ARRIVAL DAY BY CASH OR INSTANT ONLINE TRANSFER  "
                          
                        />{" "}
                      </th>
                      <th><Typography align="center" variant="h6">{Math.ceil(((gtotal+((gtotal*5)/100))*90)/100)}</Typography></th>
                    </tr>
                   
                 </tableHead>
                 <div
              style={{
                maxWidth: "300px",
                zIndex: 9000,
                
              }}
            >
              <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={onk}
                severity="error"
                sx={{
                  width:' 100%',
                  color: "red",
                  position: "static",
                  bottom: "-70px",
                }}
                
                message="Please Check All Checkbox"
              />
            </div>
                 </table>
                 </div>
                
              </div>
    
             
              <div className="btn_fr">
                <Button variant="contained" className="pay_now_fr" onClick={()=>{
                  if(check.one&&check.two&&check.three&&check.four==true)
                  diaplayRazorpay(Math.ceil(((gtotal+((gtotal*5)/100))*10)/100),Math.ceil(gtotal+((gtotal*5)/100)))
                  else
                 { setSnk(true)
               
                }
                  }}
                  sx={{width:'300px'}}
                  >
                  <Typography variant="body1">Pay Now</Typography>
                </Button>
              </div>
            </div>
            
     
          </div>



          </ModalDialog>

        </Modal>
   
      </React.Fragment>
         
        </>
      );
    }
    
