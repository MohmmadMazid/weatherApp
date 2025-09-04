import React, { useEffect, useState } from "react";
import ShowWeatherData from "./ShowWeatherData";

/* these are weather api url and its secret key from openweathermap.org */
let API_URL = "https://api.openweathermap.org/data/2.5/weather";
let API_KEY = "d4db279301b8a023458a941ee084d853";

const SearchBox = () => {
  const [getcityData, setGetcityData] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  /* geting the weather data from the web api here we are using fetch method for fetching the data */
  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${getcityData}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        setError(jsonResponse.message);
        return null;
      }
      // for displaying data we are only showing these relevant data to the user or on UI
      let result = {
        city: getcityData,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (err) {
      setError("Something went wrong" + err);
      return null;
    }
  };

  // handling user input
  const handleInput = (e) => {
    setGetcityData(e.target.value);
  };

  // handling form submition
  const handleSumit = async (e) => {
    e.preventDefault();
    const data = await getWeatherInfo();
    if (data) {
      setWeatherData(data);
    }
    setGetcityData("");
  };

  // when the app will initial mount then showing some data we are using the fetch method
  useEffect(() => {
    async function fetchdata() {
      try {
        let response = await fetch(
          `${API_URL}?q=delhi&appid=${API_KEY}&units=metric`
        );
        let jsonResponse = await response.json();
        setWeatherData(jsonResponse.main);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
    fetchdata();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-betwee items-center gap-10 w-full px-6 mt-10 ">
      <div className="bg-white shadow-lg w-full max-w-lg md:max-w-md md:ml-[120px] lg:ml-[120px] xl:ml-[120px]   self-start rounded-2xl p-6  mt-10 md:justify-center">
        <form onSubmit={handleSumit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter City Name"
            onChange={handleInput}
            value={getcityData}
            className="rounded-lg text-center w-full h-[50px] border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-indigo-600 p-3 rounded-lg text-lg font-medium text-white hover:bg-indigo-500 transition active:scale-95">
            Find Result
          </button>
        </form>
        {error ? <p className="text-red-500 mt-4 text-center">{error}</p> : ""}
      </div>

      {/* passing the found data to the child component for diplaying data and also sending the initial data for showing on diplay
       */}
      <div className="w-full max-w-xl ">
        <ShowWeatherData data={weatherData} currentcity={"Delhi"} />
      </div>
    </div>
  );
};

export default SearchBox;
