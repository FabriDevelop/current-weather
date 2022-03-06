import React, { useEffect } from "react";
import { getFlagEmoji } from "../utils/Flag";

export default function CityDetails({ weather }) {
  return (
    <section className="mt-4 bg-background-500 rounded-xl p-10 text-white flex flex-col gap-3">
      <h3 className="font-semibold text-lg">{weather.name}</h3>
      <p className="flex items-center gap-2">
        <span className="text-yellow-400 flex items-center gap-2">
          Latitud:
        </span>
        {weather.coord.lat}
      </p>
      <p className="flex items-center gap-2">
        <span className="text-yellow-400 flex items-center gap-2">
          Longitud:
        </span>
        {weather.coord.lon}
      </p>
      <p className="flex items-center gap-2">
        <span className="text-yellow-400 flex items-center gap-2">
          Codigo del pais:
        </span>
        {getFlagEmoji(weather.sys.country)}
      </p>
    </section>
  );
}
