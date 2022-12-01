import './Hhome.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useNavigate } from 'react-router-dom';
export default function Banner(props) {
    const visitTo=useNavigate()
    return<>
    <div className="main_br">
    <div className="container_br">
        <img width={'100%'} style={{minHeight:'400px'}}src="https://tourxpro-react.b-cdn.net/static/media/breadcrumb-bg.c6fa57973ffd3ec5c321.png" alt="bannerimg" />
        <div className="txt_br">
       <h4>{props.name}</h4>
       <div className="fl" style={{marginTop:'10px',display:'flex',alignItems:'center',justifyContent:'center'}}>
       <h6><span onClick={()=>visitTo("/")}>Home</span> <KeyboardDoubleArrowRightIcon sx={{color:'orangered',position:'relative',top:'8px',width:'20px'}}/> {props.current}</h6>
       </div>
        </div>
    </div>
    </div>
    </>
}