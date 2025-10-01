import "./App.css";
import SearchBox from "./components/SearchBox";
import { TiWeatherPartlySunny } from "react-icons/ti";
import myweatherImage from "./assets/undraw_weather-app_4cp0 (1).svg";
import rainyImage from "./assets/undraw_raining_j24q (1).svg";
import winterImage from "./assets/undraw_winter-magic_r5xp.svg";
import SomeLines from "./components/SomeLines";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-indigo-400 via-indigo-300 to-indigo-200 flex flex-col">
        {/* Header */}
        <header className="w-full bg-indigo-500 shadow-md sticky top-0 z-10">
          <div className="flex flex-row items-center justify-center gap-2">
            <TiWeatherPartlySunny className="text-white text-3xl sm:text-4xl" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white py-4 tracking-wide">
              Weather Now
            </h1>
          </div>
        </header>

        {/* Hero Section */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between px-4 mt-6 gap-4">
          <img
            src={rainyImage}
            className="w-28 sm:w-32 md:w-40 lg:w-48"
            alt="Rainy"
          />
          <div className="text-center px-2">
            <h1
              className="text-lg sm:text-xl lg:text-2xl font-black 
              bg-gradient-to-r from-blue-900 to-red-900 bg-clip-text text-transparent tracking-widest"
            >
              <span className="bg-gradient-to-r from-pink-900 to-red-600 bg-clip-text text-transparent tracking-widest font-black">
                Your's
              </span>
              &nbsp; Weather App
            </h1>
            <h1
              className="text-base sm:text-lg md:text-xl lg:text-2xl 
              bg-gradient-to-r from-green-900 via-pink-700 to-red-900 bg-clip-text text-transparent 
              tracking-widest leading-relaxed"
            >
              Get real-time weather information{" "}
              <br className="hidden sm:block" /> for any location
            </h1>
          </div>
          <img
            src={winterImage}
            className="w-28 sm:w-32 md:w-40 lg:w-48"
            alt="Winter"
          />
        </div>

        {/* Main Content */}
        <main className="w-full max-w-5xl px-4 md:px-8 mx-auto mt-6">
          <SearchBox />
        </main>

        {/* Weather Illustration */}
        <img
          src={myweatherImage}
          className="w-40 sm:w-60 md:w-80 lg:w-[450px] mx-auto mt-8"
          alt="Weather App"
        />
        {/* some intresting lines */}
        <SomeLines className="self-center" />
        {/* Footer */}
        <footer className="w-full text-center py-4 mt-10 sm:mt-3 lg:mt-2 text-gray-700 text-sm sm:text-base lg:text-xl ">
          Made with ❤️ Mohmmad Mazid 
        </footer>
      </div>
    </>
  );
}

export default App;
