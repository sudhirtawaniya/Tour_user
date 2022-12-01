import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';

import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { hover } from '@testing-library/user-event/dist/hover';
   
    
    export default function Offer_card(props) {
    
      
     
        return (
          <Card
            variant="outlined"
            row
            sx={{
              width: 300,
              gap: 2,
              border:'none',
              '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
            }}
          >
            <AspectRatio ratio="1" sx={{ width:120 }}>
              <img
                src={"http://localhost/adaman/image/"+props.img}
               
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <div>
              
              <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
                <Link
                  overlay
                  underline="none"
                 to={"/"+props.url}
                  sx={{   '&:hover':{color:'red'} }}
                >
                 {props.t_name}
                </Link>
              </Typography>
              <Typography fontSize="sm" aria-describedby="card-description" mt={1}>
                <Link
                  overlay
                  underline="none"
                  to={"/"+props.url}
                  style={{ color: 'orangered' }}
                >
                 {props.price? <>From <br/> ₹{props.price} <span style={{color:'black'}}>per person</span></>:moment(props.date).format("MMM DD, YYYY")}
                </Link>
              </Typography>
            </div>
          </Card>
        );
      }
    
    
    