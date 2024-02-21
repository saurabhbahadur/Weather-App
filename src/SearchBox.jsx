import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import Alert from '@mui/material/Alert';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "cdd6e6da7d8cf2f14d165a3e11f3886b";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };
    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let info = await getWeatherInfo();
            updateInfo(info);
        } catch (err) {
            setError("Search different city");
        }
    };
    return (
        <div className='searchBox'>

            <form action="" onSubmit={handleSubmit}>
                <div>
                    <div className='searchInp' ><TextField id="city" label="Enter City " color='warning' variant="outlined" required value={city} onChange={handleChange} /></div>
                    <div className='searchBtn' ><Button color='warning' variant="contained" type="submit" >
                        Search
                    </Button></div>
                    {error && <Alert style={{ justifyContent: "center", width: "fit-content", margin: "auto" }} severity="error" onClose={() => {setError("") }} color="error" >
                        No such Place found! default close icon.
                    </Alert>}
                </div>


            </form>
        </div>
    )
}