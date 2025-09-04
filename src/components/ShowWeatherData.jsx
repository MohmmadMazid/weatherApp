import React, { useEffect, useState } from "react";

const ShowWeatherData = ({ data, currentcity }) => {
  const [cityData, setCityData] = useState(null);

  // using useEffect if data is coming form parent componet during mounting of web page
  // if data is present then using the useEffect for dynamic changing
  useEffect(() => {
    if (data) {
      setCityData(data);
    }
  }, [data]);

  // if the data of the city is not present then we will show this
  if (!cityData) {
    return (
      <h2 className="text-center text-lg text-gray-600 mt-10">
        No data available
      </h2>
    );
  }
  // we will show the images  based on the temparatue if the temprature is less than 16 deg then show the cold image

  let Cold_URL =
    "https://images.unsplash.com/photo-1641894102782-336c10a26341?w=800&auto=format&fit=crop&q=80";
  //if the temprature is heigh then show the hot image
  let Hot_URL =
    "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=800&auto=format&fit=crop&q=80";
  // if the humidity is heigh then show the rainy image
  let Rainy_URL =
    "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?w=800&auto=format&fit=crop&q=80";

  return (
    <div className="flex flex-col bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden max-w-2xl mx-auto my-10 transition hover:scale-[1.02] hover:shadow-3xl duration-300">
      {/* Weather Image */}
      <div className="relative w-full h-60">
        <img
          src={
            cityData.humidity > 80
              ? Rainy_URL
              : cityData.temp < 15
              ? Cold_URL
              : Hot_URL
          }
          alt="Weather"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-lg">
            {cityData.city ? cityData.city : currentcity}
          </h1>
        </div>
      </div>

      {/* we are showing all the  Weather Details in the form of cards */}
      <div className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-indigo-200 to-indigo-400 p-4 rounded-xl shadow-md text-center hover:scale-105 transition">
            <p className="text-sm text-gray-700">🌡️ Temperature</p>
            <p className="text-xl font-bold text-gray-900">
              {data.temp ? data.temp : cityData.temp} °C
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-200 to-yellow-400 p-4 rounded-xl shadow-md text-center hover:scale-105 transition">
            <p className="text-sm text-gray-700">🤔 Feels Like</p>
            <p className="text-xl font-bold text-gray-900">
              {data.feels_like ? data.feels_like : cityData.feelslike} °C
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-200 to-blue-400 p-4 rounded-xl shadow-md text-center hover:scale-105 transition">
            <p className="text-sm text-gray-700">🔻 Min Temp</p>
            <p className="text-xl font-bold text-gray-900">
              {data.temp_min ? data.temp_min : cityData.tempMin} °C
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-200 to-red-400 p-4 rounded-xl shadow-md text-center hover:scale-105 transition">
            <p className="text-sm text-gray-700">🔺 Max Temp</p>
            <p className="text-xl font-bold text-gray-900">
              {data.temp_max ? data.temp_max : cityData.tempMax} °C
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-200 to-green-400 p-4 rounded-xl shadow-md text-center hover:scale-105 transition">
            <p className="text-sm text-gray-700">💧 Humidity</p>
            <p className="text-xl font-bold text-gray-900">
              {cityData.humidity} %
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-200 to-purple-400 p-4 rounded-xl shadow-md text-center col-span-1 sm:col-span-1 hover:scale-105 transition">
            <p className="text-sm text-gray-700">☁️ Weather</p>
            <p className="text-xl font-bold text-gray-900">
              {data.weather ? data.weather : cityData.weather}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowWeatherData;
