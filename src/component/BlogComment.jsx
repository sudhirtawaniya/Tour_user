import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import StarIcon from '@mui/icons-material/Star';
import moment from "moment";
export default function BlogCommentCard(props) {
  return (
    <Card
      row
      sx={{
        width: '100%',
        gap: 2,
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 145 }}>
        <img
          src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/reviewer/commertor2.png"
          srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      
        <div >
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >
            <div>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          {props.data.name}
        </Typography>
        <Typography
          sx={{ color: "orangered", fontSize: "14px" }}
          aria-describedby="card-description"
          mb={1}
        >
          {moment(props.data.date).format("DD-MM-YYYY")}
        </Typography>
        </div>
        <div>
       {[...Array(parseInt(props.data.rating))].map((ele,i)=>{return <StarIcon style={{color:'orangered'}}/>})}
      </div>
        </div>
      
        <Typography
          variant="body1"
          style={{
            fontSize: "16px",
            lineHeight: "30px",
            textTransform: "capitalize",
            paddingTop: "8px",
            color: "#666",
          }}
        >
         {props.data.comment}
        </Typography>
     
      </div>
    </Card>
  );
}
