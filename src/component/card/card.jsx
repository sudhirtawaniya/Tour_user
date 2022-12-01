import "./card.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
export default function Card(props) {
  const navigate=useNavigate()
  console.log(props.img);
  return (
    <div className="container_cr">
       
      <div className="img">
        <img
          src={"http://localhost/adaman/image/"+props.img}
         
          alt=""
        />
      </div>
      <div className="lb_cr"><p>{props.day} days {props.night} nights</p></div>
      <div className="content"><h3>{props.menu_name}</h3></div>
      <div className="foo">
        <div className="foo-left">
          <div className="buttonc" style={{margin:10}}>
            <button
               className="btn cusbtn button "
               data-href="#book-now"
              style={{ width: "65%", height: "40px", borderRadius: 10,color:'orangered',fontSize:'15px' ,display:'flex',justifyContent:'space-around',alignItems:'center'}}
           onClick={()=>navigate("/tour/"+props.url)}
           >
              Book Now <ArrowForwardIcon  style={{ width: "10%"}}/>
            </button>
          </div>
        </div>
        <div className="foo-right">
          <div className="strpr">
            <span className="fr">From</span> <br />
            <h6 className="pr-fo" style={{ color: "orangered" }}>
              {props.strp}
            </h6>
            <span
              style={{
                color: "#2d373c",
                fontSize: "16px",
                fontWeight: 500,
                textTransform: "capitalize",
              }}
            ></span>
            Per Person
          </div>
        </div>
      </div>
    </div>
  );
}
