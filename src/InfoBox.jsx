import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }){
    const INIT_URL = 
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    let HOT_URL = 
    "https://media.istockphoto.com/id/1312596921/photo/summer-noon-sun.jpg?s=2048x2048&w=is&k=20&c=nC_6bQjbz1u1tV_tWA57IM9XlVOVPWoFok987tIMa40=";
     let COLD_URL = 
     "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = 
    "https://media.istockphoto.com/id/902497530/photo/cars-driving-on-wet-road-in-the-rain-with-headlights.jpg?s=2048x2048&w=is&k=20&c=dawggjlenC9kMqXBcznFVmzdNaiLyj51QeGncJ20ZJE=";
    
    return (
        <div className = "InfoBox">
            
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80
          ? RAIN_URL
          : info.temp >15
          ? HOT_URL
          : COLD_URL

        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{" "}
           { info.humidity>80
            ? (<ThunderstormIcon/>)
            : info.temp >15
            ? (<WbSunnyIcon/>)
            : (<AcUnitIcon/>
          )}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>
            The weather can be described as <i>{info.weather}</i> and feels
            like {info.feelslike}&deg;C
         </p>
        </Typography>
      </CardContent>
      
     </Card>
     </div>
        </div>
    );
}


    
  