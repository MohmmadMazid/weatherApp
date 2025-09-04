import "./App.css";
import SearchBox from "./components/SearchBox";
import { TiWeatherPartlySunny } from "react-icons/ti";
import myweatherImage from "./assets/undraw_weather-app_4cp0 (1).svg";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-indigo-300 via-indigo-200 to-indigo-100 flex flex-col ">
        {/* Header */}
        <header className="w-full  bg-indigo-500 shadow-md sticky top-0 z-10">
          <div className="flex flex-row justify-center">
            <TiWeatherPartlySunny className="text-white text-center text-4xl  font-bold " />
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center py-4 tracking-wide">
              Weather Now
            </h1>
          </div>
        </header>
        <div>
          <h1
            className=" lg:text-xl text-xl text-shadow-amber-50  
          bg-gradient-to-r from-blue-900 to-red-900  bg-clip-text text-transparent
          text-center"
          >
            <span className=" bg-gradient-to-r from-pink-900 to-red-600  bg-clip-text text-transparent tracking-wider font-black">
              Jamie's
            </span>
            Weather App
          </h1>
        </div>

        {/* Main Content */}
        <main className="w-full max-w-5xl px-4 md:px-8 self-center">
          <SearchBox />
        </main>
        <img src={myweatherImage} className="max-w-1/2 self-center"></img>

        {/* Footer */}
        <footer className="w-full text-center py-4 mt-auto text-gray-700 text-sm">
          Made with ❤️ Mohmmad Mazid
        </footer>
      </div>
    </>
  );
}

export default App;
