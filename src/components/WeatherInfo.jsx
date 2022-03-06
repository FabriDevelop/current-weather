import React from "react";
import WeatherDetails from "../components/WeatherDetails";
import WeatherResult from "../components/WeatherResult";
import CityDetails from "./CityDetails";
import WindDetails from "./WindDetails";

export default function WeatherInfo({ weather, error }) {
  if (error)
    return (
      <p className="text-3xl text-red-500">
        Error en la geolocalización, busca una ciudad o activa la localización
      </p>
    );

  if (weather.cod !== 200)
    return (
      <p className="text-3xl text-red-500 mt-3">
        No hay infomación acerca de la ciudad buscada
      </p>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
      <WeatherResult weather={weather} />
      <WeatherDetails weather={weather} />
      <WindDetails wind={weather.wind} />
      <CityDetails weather={weather} />
    </div>
  );
}
