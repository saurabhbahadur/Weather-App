import "./WeatherApp.css"
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import Footer from "./footer";
import { useState } from "react";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "delhi",
        feelsLike: 18.91,
        humidity: 77,
        temp: 18.95,
        tempMax: 19.05,
        tempMin: 18.95,
        weather: "thunderstorm",
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return (
        <div>
            <h1 color="warning" className="main" >Weather app</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
            <Footer />
        </div>
    );
};