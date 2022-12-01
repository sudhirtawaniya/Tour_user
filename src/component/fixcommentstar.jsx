import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Add } from '@mui/icons-material';




export default function Star(props) {
  var data=2;
 

  if(props.val)
  {data=props.val;

  }
  

  const [value, setValue] = React.useState(data);
 

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={props.val}
        precision={0.5}
       
       
        emptyIcon={<Add style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
     
    </Box>
  );
}
