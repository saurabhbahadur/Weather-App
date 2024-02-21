import Card from '@mui/material/Card';
import "./infoBox.css"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
    let Hot_Url = "https://cdn.pixabay.com/photo/2016/05/05/02/32/hot-air-balloons-1373161_640.jpg";
    let Cold_url = "https://cdn.pixabay.com/photo/2014/12/02/22/05/snowflakes-554635_640.jpg";
    let Rain_Url = "https://cdn.pixabay.com/photo/2014/09/21/14/39/surface-455124_640.jpg";
    // const capitalizeFirstLetter = (str) => {
    //     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    // };
    return (
        <div className="infoBox">

            <div className="cardContainer">
                <Card sx={{ Width: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? Rain_Url : info.temp > 15 ? Hot_Url : Cold_url}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temparature:{info.temp}&deg;C </p>
                            <p>Humidity:{info.humidity}</p>
                            <p>Minimum Temparature:{info.tempMin}</p>
                            <p>Maximum Temparature:{info.tempMax}</p>
                            <p>The weather can be described as {info.weather} feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>

        </div>
    )
};