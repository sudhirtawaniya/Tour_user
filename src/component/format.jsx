import "./style/format.css";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import logo from "./images/logo.png";
export default function Format() {
  return (
    <>
      <div className="container_fr">
        <div className="header_for">
          <div className="lf_fr">
            <img src={logo} alt="logo" />
          </div>
          <div className="rf_fr">
            <h2 className="hd_fr">ANDAMAN MANGROVES HOLIDAYS </h2>
            <h5 className="ad_fr">
              Shop-05, Panchayat Market,Near Gram Panchayat Bhavan, Sippighat,
              Port Blair,{" "}
            </h5>
            <h5 className="ad_fr">
              Shop-05, Panchayat Market,Near Gram Panchayat Bhavan, Sippighat,
              Port Blair, South Andaman, Andaman & Nicobar Islands, India
            </h5>
            <h5 className="ad_fr">
              Pin Code: 744105, Contact / Whatsapp at +91-9531898558
            </h5>{" "}
          </div>
        </div>
        <div className="body_fr">
          <div className="pr_dt_fr">
            <table cellspacing="0">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Arun Kumar</td>
                </tr>
                <tr>
                  <th>NO OF PERSON</th>
                  <td>01</td>
                </tr>
                <tr>
                  <th>EMAIL ID</th>
                  <td>Arun Kumar</td>
                </tr>
                <tr>
                  <th>MOBILE NUMBER</th>
                  <td>123456789</td>
                </tr>
              </tbody>
            </table>
            <table cellspacing="0">
              <tbody>
                <tr>
                  <th>Bookin Date</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Order Number</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Date of Arrival</th>
                  <td>24-12-2021</td>
                </tr>
                <tr>
                  <th>Whatsapp Number</th>
                  <td>123456789</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tour_details_fr">
            <table cellSpacing={0}>
              <tbody>
                <tr>
                  <th className="thd">Date</th>
                  <th className="thd">
                    YOU HAVE SELECTED THE TOUR ITINEARY FOR 02 NIGHTS AND 03
                    DAYS AS BELOW
                  </th>
                </tr>
                <tr>
                  <th>24-12-2021</th>
                  <th className="d_fr">
                    PORT BLAIR : AIRPORT PICKUP to Hotel Transfer,After lunch
                    Hotel to famous CELLULAR JAIL a witness to the freedom
                    struggle - then visit the CARBIN CO BEACH – It’s City Beach.
                    In the evening proceed to attend the enthralling SOUND AND
                    LIGHT SHOW at Cellular Jail. Over Night Stay at Port Blair.
                  </th>
                </tr>
                <tr>
                  <th>24-12-2021</th>
                  <th className="d_fr">
                    PORT BLAIR : AIRPORT PICKUP to Hotel Transfer,After lunch
                    Hotel to famous CELLULAR JAIL a witness to the freedom
                    struggle - then visit the CARBIN CO BEACH – It’s City Beach.
                    In the evening proceed to attend the enthralling SOUND AND
                    LIGHT SHOW at Cellular Jail. Over Night Stay at Port Blair.
                  </th>
                </tr>
                <tr>
                  <th>24-12-2021</th>
                  <th className="d_fr">
                    PORT BLAIR : AIRPORT PICKUP to Hotel Transfer,After lunch
                    Hotel to famous CELLULAR JAIL a witness to the freedom
                    struggle - then visit the CARBIN CO BEACH – It’s City Beach.
                    In the evening proceed to attend the enthralling SOUND AND
                    LIGHT SHOW at Cellular Jail. Over Night Stay at Port Blair.
                  </th>
                </tr>
                <tr>
                  <th>24-12-2021</th>
                  <th className="d_fr">
                    PORT BLAIR : AIRPORT PICKUP to Hotel Transfer,After lunch
                    Hotel to famous CELLULAR JAIL a witness to the freedom
                    struggle - then visit the CARBIN CO BEACH – It’s City Beach.
                    In the evening proceed to attend the enthralling SOUND AND
                    LIGHT SHOW at Cellular Jail. Over Night Stay at Port Blair.
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="incl_fr">
            <div className="head_fr_inc">
              <h3>INCLUSIONS IN THIS TOUR PACKAGE</h3>
            </div>
            <div className="dt_incl_fr">
              <h6>
                Airport /Harbour Transfers by One Private AC Car in Port Blair.
              </h6>
              <h6>
                Airport /Harbour Transfers by One Private AC Car in Port Blair.
              </h6>
              <h6>
                Airport /Harbour Transfers by One Private AC Car in Port Blair.
              </h6>
              <h6>
                Airport /Harbour Transfers by One Private AC Car in Port Blair.
              </h6>
              <h6>
                Airport /Harbour Transfers by One Private AC Car in Port Blair.
              </h6>
              <h6>
                Airport /Harbour Transfers by One Private AC Car in Port Blair.
              </h6>
            </div>
          </div>
          <div className="conditions_fr">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="I ACCEPT THE ABOVE SAID TOUR ITINEARY AND INCLUSION IN THIS TOUR PACKAGE"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="I ACCEPT THE TOTAL NET PAYABLE AMOUNT 7434"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="I ACCEPT TO PAY 10% OF TOTAL NET PAYABLE AMOUNT 743 "
              />
              <FormControlLabel
                control={<Checkbox />}
                label="I ACCEPT TO PAY BALANCE 90% ON ARRIVAL DAY BY CASH OR INSTANT ONLINE TRANSFER 6691 "
              />
            </FormGroup>
          </div>
          <div className="btn_fr">
            <Button variant="contained" className="pay_now_fr">
              Pay Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
