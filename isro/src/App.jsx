import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ServoData from './monitor.jsx';
import numberofSlider from './slidebar.jsx';
function title()
{
  return(
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: 'background.paper',  marginTop: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Arm Control Panel
        </Typography>
      </Box>
    </Container>
  );

}
function monitorTitle(){
  return(
    
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: 'background.paper',  marginTop: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Monitor
          </Typography>
        </Box>
      </Container>
    
  );
}
export default function App() {
  return (
    
    <>
    {title()}
    {numberofSlider()}
    <br></br>
    {monitorTitle()}
    {ServoData()}
    </>
    
  );
}