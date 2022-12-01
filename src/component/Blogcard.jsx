import './css/blogcard.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
export default function BlogCard(props) {
const navigate=useNavigate();
    return <>
    <div className="container_bc" onClick={()=>navigate('/blog/'+props.heading)}>

        <div className="img_bc">
            <img  src={"http://localhost/adaman/image/"+props.img} alt="blog" />
            <h6><CalendarMonthIcon sx={{width:15}}/> {moment(props.date).format("DD MMMM Y")}</h6>
        </div>
        <div className="txt_bc"><h4>{props.heading}</h4></div>
    </div>
    </>
}