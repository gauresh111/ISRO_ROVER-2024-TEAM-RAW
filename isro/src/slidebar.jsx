import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './slidebar.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import axios from "axios";

function SliderSizes({ props }) {
  const [value, setValue] = React.useState(90);
  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
      
      let value = props.id + newValue
      // const myNumber = "base123";
      // const ipAddress = '192.168.29.153';

      const url = 'http://'+ props.url +'/get?moveservo=' + value;
      console.log(props.id, newValue,url);
      axios.get(url)
        .then(response => {
          console.log('Status:', response.status);
          console.log('Headers:', response.headers);
          console.log('Data:', response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };
  return (
    
      <Grid container  direction="row"sx={{ maxWidth:600  }} spacing={4}  >
        <Grid item  xs={2} >
          <Typography id="input-slider" gutterBottom>
            {props.name}
          </Typography>
        </Grid>
        <Grid item  xs={10}  >
          <Box  sx={{ width: 200 }} >
            <Slider

              value={value}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="on"
              onChange={handleChange}
              min={0}
              max={180}
            />
          </Box>
    </Grid>
    </Grid>
  );
}

export default function numberofSlider() {
  return (

    <Grid container  direction="column"
      gap={5}
      
    >
      <SliderSizes props={{ id: "b", name: "base" , url:"192.168.4.1" }} />
      <SliderSizes props={{ id: "s", name: "shoulder" ,url:"192.168.4.1"}} />
      <SliderSizes props={{ id: "e", name: "elbow" ,url:"192.168.4.1"}} />
      <SliderSizes props={{ id: "w", name: "wrist" ,url:"192.168.4.2"}} />
      <SliderSizes props={{ id: "g", name: "gripper",url:"192.168.4.3" }} />
    </Grid>
  );
}