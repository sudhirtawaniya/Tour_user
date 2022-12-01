import "./css/format.css";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button, Box, Typography, Snackbar } from "@mui/material";
import logo from "./logo.png";
import ClearIcon from "@mui/icons-material/Clear";
import ReactHtmlParser from "react-html-parser";

import Modal from "@mui/joy/Modal";
import { ModalClose, ModalDialog, Sheet } from "@mui/joy";
import axios from "axios";
import moment from "moment";
 import emailjs from '@emailjs/browser';
import jsPDF from "jspdf";
import ReactToPdf from 'react-to-pdf'




// Create styles

export default function Format_cab(props) {
  const ref = React.createRef();
  const [onk, setSnk] = React.useState(false);
  const gtotal = parseFloat(props.contact.price);
  const [check, setch] = React.useState({
    one: props.war,
    two: props.war,
    three: props.war,
    four: props.war,
  });
  const form = React.useRef();
  
  const sendemail=(e)=>{
   
    console.log(form);
  
    
  
      emailjs.sendForm('service_9sgdov1','template_1nveljr',form.current, 'MXxOVqe-MdTEctsaK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      
  }
  var [data, setdata] = React.useState({ ...props.contact});
  var [order, setorder] = React.useState();
  var [file, setfile] = React.useState('');


  React.useEffect(() => {
    console.log(props.contact);
 
    axios.get('http://localhost/adaman/tour_order.php').then((res) => {
              var d3 = eval(res.data)
             
             d3=parseInt(d3)+1;
             console.log(d3);
              if(d3<10){
                setorder('AMHTOUR00'+d3)
              }
              else if(d3>9&&d3<100){
                setorder('AMHTOUR0'+d3)
              }
              else{
                setorder('AMHTOUR'+d3)
              }
             
             
              
              
              })
    setdata(props.contact);
  }, [props]);
  const handleClosei = () => {
    console.log("enter");
   
  };
  const sendinfo = () => {
    axios.post("http://localhost/adaman/transaction.php", data);
  };
  const loadscript = (src) => {
    return new Promise((res) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        res(true);
      };
      script.onerror = () => {
        res(false);
      };
      document.body.appendChild(script);
    });
  };
  const diaplayRazorpay = async (amount) => {
    setSnk(false)
    data.credit=amount;
    data.balance=Math.ceil(((gtotal * 90) / 100))

    const res = await loadscript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("something went worng");
      return;
    }
    const options = {
      key: "rzp_test_jq6aLjznPRoxMX",
      currency: "INR",
      amount: amount * 100,
      name: "Sudhir Tawaniya",
      description: "Thanks for Booking",
      handler: function (res) {
        props.contact.tr_id = res.razorpay_payment_id;
        document.getElementById("dow").click()
        
        sendinfo();
        sendemail();
        props.sucrun()
      },
    };
    const payobject = new window.Razorpay(options);
    payobject.open();
  };

 
  return (

    <>
   
      <React.Fragment>
  
        <Modal open={props.open} className="show" onClose={() => props.stateChange(false)}>
          <ModalDialog
            aria-labelledby="basic-modal-dialog-title"
            aria-describedby="basic-modal-dialog-description"
            sx={{
              maxWidth: 880,

              height: 600,

              borderRadius: "md",
              overflowY: "scroll",
              overflowX: "hidden",
              border: "none",
              m: 0,
              boxShadow: "lg",
            }}
          >
            <Sheet
              variant="outlined"
              sx={{
                backgroundColor: "white",
                maxWidth: 1000,
                borderRadius: "md",
                p: 3,
                boxShadow: "lg",
              }}
            >
                    
      <div style={{display:'none'}}>
    <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({toPdf}) => (
            <button  id="dow" onClick={toPdf}>Generate pdf</button>
        )}
    </ReactToPdf>
   
</div>
              <ModalClose
                variant="outlined"
                sx={{
                  top: "calc(-1/4 * var(--IconButton-size))",
                  right: "calc(-1/4 * var(--IconButton-size))",
                  boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
                  borderRadius: "50%",
                  color: "white",
                  backgroundColor: "red",
                  zIndex: 1000,
                  transform: "translateX(00px)",
                  bgcolor: "background.body",
                }}
              />
       
              <div className="container_fr" id="pdf" style={{padding:'20px',width:'800px'}} ref={ref}>
                <div className="header_for">
                  <div className="lf_fr">
                    <img
                      src={logo}
                      width={200}
                      style={{ marginLeft: "10px", marginTop: "10px" }}
                      alt="logo"
                    />
                  </div>
                  
                  <div className="rf_fr"  >
                    <Typography variant="h5" className="hd_fr">
                      ANDAMAN MANGROVES HOLIDAYS
                    </Typography>
                    <Typography variant="body2" className="ad_fr">
                      Shop-05, Panchayat Market,Near Gram Panchayat Bhavan,
                      Sippighat, 
                    </Typography>
                    <Typography variant="body2" className="ad_fr">
                      Port Blair, South Andaman, Andaman & Nicobar Islands,
                      India
                    </Typography>
                    <Typography variant="body2" className="ad_fr">
                      Pin Code: 744105, Contact / Whatsapp at +91-9531898558
                    </Typography>
                  </div>
                </div>
                <form >
                <div className="body_fr">
                  <div className="pr_dt_fr" style={{ marginBottom: "0px" }}>
                    <table cellspacing="0">
                      <tbody>
                        <tr>
                          <th>
                            {" "}
                            <Typography variant="body1">Name</Typography>
                          </th>
                          <td>
                            {" "}
                            <Typography variant="body1" name="name" value="sudhir">
                              {props.contact.name}
                            </Typography>
                          </td>
                        </tr>
                        <tr>
                          <th style={{width:'500px'}}>
                            <Typography variant="body1">
                              NO OF PERSON
                            </Typography>
                          </th>
                          <td>
                            <Typography variant="body1">
                              {props.contact.person}
                            </Typography>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <Typography variant="body1">EMAIL ID</Typography>
                          </th>
                          <td>
                            <Typography variant="body1">
                              {props.contact.email}
                            </Typography>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <Typography variant="body1">
                              MOBILE NUMBER
                            </Typography>
                          </th>
                          <td>
                            <Typography variant="body1">
                              {props.contact.mno}
                            </Typography>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table cellspacing="0">
                      <tbody>
                        <tr>
                          <th>
                            <Typography variant="body1">
                              Booking Date
                            </Typography>
                          </th>
                          <td>
                            <Typography variant="body1">{moment().format("DD-MM-YYYY")}</Typography>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <Typography variant="body1">
                              Order Number
                            </Typography>
                          </th>
                          <td>
                            <Typography variant="body1">{order}</Typography>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <Typography variant="body1">
                              Date of Arrival
                            </Typography>
                          </th>
                          <td>
                            <Typography variant="body1">
                              {moment(props.contact.arr_date).format("DD-MM-YYYY")}
                            </Typography>
                          </td>
                        </tr>
                        <tr>
                          <th style={{width:'350px'}}>
                            <Typography variant="body1">
                              WhatsApp Number
                            </Typography>
                          </th>
                          <td>
                            <Typography variant="body1">
                              {props.contact.wno}
                            </Typography>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="tour_details_fr " >
                    <table cellSpacing={0}>
                      <tbody>
                        <tr style={{ textAlign: "center" }}>
                          <th className="thd">
                            <Typography align="center" variant="body1">
                              Date
                            </Typography>
                          </th>
                          <th className="thd">
                            <Typography align="center" variant="body1" sx={{ width: '100%',fontSize: '15px'}}>
                              YOU HAVE SELECTED THE TOUR ITINEARY FOR{" "}
                              {props.data.night} NIGHTS AND {props.data.day}{" "}
                              &nbsp; DAYS AS BELOW
                            </Typography>
                          </th>
                        </tr>
                        {props.data.content &&
                          props.data.content.map((val,i) => {
                            return (
                              <tr>
                                <th>
                                  <Typography align="center" variant="body1">
                                   {moment(props.contact.arr_date).add(i,'day').format("DD-MM-YYYY")}
                                  </Typography>
                                </th>
                                <th className="d_fr">
                                  <Typography variant="body1">
                                    {ReactHtmlParser(
                                      val.dayplan
                                    )}
                                  </Typography>
                                </th>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                  <div className="incl_fr">
                    <div className="head_fr_inc">
                      <Typography align="center" variant="body1">
                        INCLUSIONS IN THIS TOUR PACKAGE
                      </Typography>
                    </div>
                    <div className="dt_incl_fr">
                      {props.data.inc &&
                        props.data.inc.map((val) => {
                          return (
                            <>
                              {" "}
                              <Typography className="inc_txt" variant="body1">
                                {" "}
                                {ReactHtmlParser(
                                  val.ind_d
                                )}
                              </Typography>
                              <hr />
                            </>
                          );
                        })}
                    </div>
                  </div>
                  <div className="tour_details_fr ">
                    <table
                      cellSpacing={0}
                      style={{
                        minWidth: "100%",
                        borderTop: "none",
                        borderCollapse: "separate",
                      }}
                      aria-label="simple table"
                    >
                      <tr>
                        <th colSpan={3}>
                          <FormControlLabel
                            className="sh"
                            control={
                              <Checkbox
                                onClick={() =>
                                  setch({ ...check, one: !check.one })
                                }
                              />
                            }
                            label="I ACCEPT THE ABOVE SAID TOUR ITINEARY AND INCLUSION IN THIS TOUR PACKAGE"
                          />
                        </th>
                      </tr>
                      <tr>
                        <th colSpan={2}>
                          {" "}
                          <FormControlLabel
                            control={
                              <Checkbox
                                onClick={() =>
                                  setch({ ...check, two: !check.two })
                                }
                              />
                            }
                            label="I ACCEPT THE TOTAL NET PAYABLE AMOUNT"
                          />
                        </th>
                        <th>
                          <Typography align="center" variant="h6">
                          ₹{gtotal }
                          </Typography>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan={2}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                onClick={() =>
                                  setch({ ...check, three: !check.three })
                                }
                              />
                            }
                            label="I ACCEPT TO PAY 10% OF TOTAL NET PAYABLE AMOUNT"
                          />
                        </th>
                        <th>
                          <Typography align="center" variant="h6">
                          ₹{Math.ceil(
                              ((gtotal  * 10) / 100)
                            )}
                          </Typography>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan={2}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                onClick={() =>
                                  setch({ ...check, four: !check.four })
                                }
                              />
                            }
                            label="I ACCEPT TO PAY BALANCE 90% ON ARRIVAL DAY BY CASH OR INSTANT ONLINE TRANSFER  "
                          />{" "}
                        </th>
                        <th>
                          <Typography align="center" variant="h6">
                          ₹{Math.ceil(
                              (gtotal-Math.ceil(
                                ((gtotal  * 10) / 100)
                              ))
                            )}
                          </Typography>
                        </th>
                      </tr>
                    </table>
                  </div>
                  <div className="btn_fr">
                    <Button
                      variant="contained"
                      className="pay_now_fr"
                      onClick={(e) => {
                        if (
                          check.one &&
                          check.two &&
                          check.three &&
                          check.four == true
                        )
                       { 
                       
                       
                          diaplayRazorpay(
                            Math.ceil((gtotal* 10)/ 100)
                          );}
                        else {
                         
                          setSnk(true);
                          console.log(check);
                        }
                      }}
                    >
                      <Typography variant="body1">Pay Now</Typography>
                    </Button>
                
                  </div>
                
                </div>
                
                </form>
             
              <div
              style={{
                maxWidth: "100%",
                zIndex: 9000,
                
              }}
            >
              <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={onk}
                severity="error"
                sx={{
                  width: 100,
                  color: "red",
                  position: "absolute",
                  bottom: "-70px",
                }}
                onClose={handleClosei}
                message="Please Check All Checkbox"
              />
            </div>
            </div>
            </Sheet>
            
          </ModalDialog>
        </Modal>
      </React.Fragment>
      <div className="hidden" >
       
      </div>




<React.Fragment>
        <Modal open={props.open} className="hide" sx={{ display:'none'}} onClose={() => props.stateChange(false)}>
          <ModalDialog
            aria-labelledby="basic-modal-dialog-title"
            aria-describedby="basic-modal-dialog-description"
            sx={{
              maxWidth: 880,
             
              height: 600,
              backgroundColor:'white',
              borderRadius: "md",
              overflowY: "scroll",
              overflowX: "hidden",
              border: "none",
              m: 0,
              boxShadow: "lg",
            }}
          >
              <ModalClose
                variant="outlined"
               
                sx={{
                  top: "calc(-1/4 * var(--IconButton-size))",
                  right: "calc(-1/4 * var(--IconButton-size))",
                  boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
                  borderRadius: "50%",
                  color: "white",
                  backgroundColor: "red",
                  zIndex: 1000,
                  transform: "translateX(00px)",
                  bgcolor: "background.body",
                }}
              />
                <form onSubmit={sendemail} ref={form} style={{display:'none'}} >
          <input type="text" value={props.contact.name} name="name" />
          <input type="text" value={props.contact.email} name="toEmail" />
          <input type="text" value="" name="message" />
          <input type="text" value={`${order}-BOOKING CONFIRMED`} name="Subject" />
          <input type="file"   name="file" />
        </form>
              <div className="container_fr" id="pdf" style={{width:'100%'}} >
              <img
                      src={logo}
                      width={200}
                      style={{ marginLeft: "10px", marginTop: "10px" }}
                      alt="logo"
                    />
               <div className="header_for">
                  <div className="lf_fr">
                    
                  </div>
                  
                  <div className="rf_fr"  >
                    <Typography variant="h5" className="hd_fr">
                      ANDAMAN MANGROVES HOLIDAYS
                    </Typography>
                    <Typography variant="body2" className="ad_fr">
                      Shop-05, Panchayat Market,Near Gram Panchayat Bhavan,
                      Sippighat,
                    </Typography>
                    <Typography variant="body2" className="ad_fr">
                      Port Blair, South Andaman, Andaman & Nicobar Islands,
                      India
                    </Typography>
                    <Typography variant="body2" className="ad_fr">
                      Pin Code: 744105, Contact / Whatsapp at +91-9531898558
                    </Typography>
                  </div>
                </div>
                <form >
                <div className="body_fr">
                  <div className="pr_dt_fr" style={{ marginBottom: "0px" }}>
                    <table cellspacing="0">
                      <tbody>
                        <tr>
                          <th>
                            {" "}
                            <Typography variant="body1">Name</Typography>
                          </th>
                          <td>
                            {" "}
                            <Typography variant="body1" name="name" value="sudhir">
                              {props.contact.name}
                            </Typography>
                          </td>
                        </tr>
                        <tr>
                          <th style={{width:'500px'}}>
                            <Typography variant="body1">
                              NO OF PERSON
                            </Typography>
                          </th>
                          <td>
                            <Typography variant="body1">
                              {props.contact.person}
                            </Typography>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <Typography variant="body1">EMAIL ID</Typography>
                          </th>
                          <td>
                            <Typography variant="body1">
                              {props.contact.email}
                            </Typography>
                          </td>
                        </tr>
                        <tr>
                          <th style={{ width:' max-content'}}>
                            <Typography variant="body1" >
                              MOBILE NUMBER
                            </Typography>
                          </th>
                          <td>
                            <Typography variant="body1" sx={{fontSize:'smaller'}}>
                              {props.contact.mno}
                            </Typography>
                          </td>
                        </tr>
                     
                 
                        <tr>
                          <th>
                            <Typography variant="body1">
                              Booking Date
                            </Typography>
                          </th>
                          <td>
                            <Typography variant="body1">{moment().format("DD-MM-YYYY")}</Typography>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <Typography variant="body1">
                              Order Number
                            </Typography>
                          </th>
                          <td>
                            <Typography variant="body1">{order}</Typography>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <Typography variant="body1">
                              Date of Arrival
                            </Typography>
                          </th>
                          <td>
                            <Typography variant="body1">
                              {moment(props.contact.arr_date).format("DD-MM-YYYY")}
                            </Typography>
                          </td>
                        </tr>
                        <tr>
                          <th style={{width:'350px'}}>
                            <Typography variant="body1">
                              WhatsApp Number
                            </Typography>
                          </th>
                          <td>
                            <Typography variant="body1">
                              {props.contact.wno}
                            </Typography>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="tour_details_fr " >
                    <table cellSpacing={0}>
                      <tbody>
                        <tr style={{ textAlign: "center" }}>
                          <th className="thd">
                            <Typography align="center" variant="body1" sx={{ width: '100%',fontSize: '9.5px'}}>
                              Date
                            </Typography>
                          </th>
                          <th className="thd">
                            <Typography align="center" variant="body1" sx={{ width: '100%',fontSize: '9.5px'}}>
                              TOUR ITINEARY FOR{" "}
                              {props.data.night} NIGHTS AND {props.data.day}{" "}
                              &nbsp; DAYS 
                            </Typography>
                          </th>
                        </tr>
                        {props.data.content &&
                          props.data.content.map((val,i) => {
                            return (
                              <tr>
                                <th>
                                  <Typography align="center" variant="body1">
                                   {moment(props.contact.arr_date).add(i,'day').format("DD-MM-YYYY")}
                                  </Typography>
                                </th>
                                <th className="d_fr">
                                  <Typography variant="body1">
                                    {ReactHtmlParser(
                                      val.dayplan
                                    )}
                                  </Typography>
                                </th>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                  <div className="incl_fr">
                    <div className="head_fr_inc">
                      <Typography align="center" variant="body1">
                        INCLUSIONS IN THIS TOUR PACKAGE
                      </Typography>
                    </div>
                    <div className="dt_incl_fr">
                      {props.data.inc &&
                        props.data.inc.map((val) => {
                          return (
                            <>
                              {" "}
                              <Typography className="inc_txt" variant="body1">
                                {" "}
                                {ReactHtmlParser(
                                  val.ind_d
                                )}
                              </Typography>
                              <hr />
                            </>
                          );
                        })}
                    </div>
                  </div>
                  <div className="tour_details_fr ">
                    <table
                      cellSpacing={0}
                      style={{
                        minWidth: "100%",
                        borderTop: "none",
                        borderCollapse: "separate",
                      }}
                      aria-label="simple table"
                    >
                      <tr>
                        <th colSpan={3}>
                          <FormControlLabel
                            className="sh"
                            control={
                              <Checkbox
                             
                                onClick={() =>
                                  setch({ ...check, one: !check.one })
                                }
                              />
                            }
                            label="I ACCEPT THE ABOVE SAID TOUR ITINEARY AND INCLUSION IN THIS TOUR PACKAGE"
                          />
                        </th>
                      </tr>
                      <tr>
                        <th colSpan={2}>
                          {" "}
                          <FormControlLabel
                            control={
                              <Checkbox
                                onClick={() =>
                                  setch({ ...check, two: !check.two })
                                }
                              />
                            }
                            label="I ACCEPT THE TOTAL NET PAYABLE AMOUNT"
                          />
                        </th>
                        <th>
                          <Typography align="center" variant="h6">
                          ₹{gtotal }
                          </Typography>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan={2}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                onClick={() =>
                                  setch({ ...check, three: !check.three })
                                }
                              />
                            }
                            label="I ACCEPT TO PAY 10% OF TOTAL NET PAYABLE AMOUNT"
                          />
                        </th>
                        <th>
                          <Typography align="center" variant="h6">
                          ₹{Math.ceil(
                              ((gtotal  * 10) / 100)
                            )}
                          </Typography>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan={2}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                onClick={() =>
                                  setch({ ...check, four: !check.four })
                                }
                              />
                            }
                            label="I ACCEPT TO PAY BALANCE 90% ON ARRIVAL DAY BY CASH OR INSTANT ONLINE TRANSFER  "
                          />{" "}
                        </th>
                        <th>
                          <Typography align="center" variant="h6">
                          ₹{Math.ceil(
                              (gtotal-Math.ceil(
                                ((gtotal  * 10) / 100)
                              ))
                            )}
                          </Typography>
                        </th>
                      </tr>
                    </table>
                  </div>
                  <div className="btn_fr">
                    <Button
                      variant="contained"
                      className="pay_now_fr"
                      sx={{width:'200px'}}
                      onClick={(e) => {
                        if (
                          check.one &&
                          check.two &&
                          check.three &&
                          check.four == true
                        )
                       { 
                       
                        
                          diaplayRazorpay(
                            Math.ceil((gtotal* 10)/ 100)
                          );}
                        else {
                         
                          setSnk(true);
                          console.log(check);
                        }
                      }}
                    >
                      <Typography variant="body1">Pay Now</Typography>
                    </Button>
                
                  </div>
                
                </div>
                
                </form>
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
                  width: '100%',
                  color: "red",
                  position: "sticky",
                  bottom: "-180px",
                }}
                onClose={handleClosei}
                message="Please Check All Checkbox"
              />
            </div>
              </div>
              
           
           
          </ModalDialog>
        </Modal>
      </React.Fragment>
      <div className="hidden" style={{display:'none'}}>
        <form onSubmit={sendemail}>
          <input type="file" value={file} />
        </form>
      </div>

      
    </>
  );
}
