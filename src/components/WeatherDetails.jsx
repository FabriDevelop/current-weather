import React from "react";
import { FaTemperatureLow } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import { AiFillFire, AiOutlineCompress } from "react-icons/ai";

export default function WeatherDetails({ weather }) {
  return (
    <section className="mt-4 bg-background-500 rounded-xl p-10 text-white flex flex-col">
      <h3 className="font-semibold text-lg">Detalles de temperatura</h3>
      <div className="flex flex-col gap-4 mt-3">
        <p className="flex items-center gap-2">
          <span className="text-yellow-400 flex items-center gap-2">
            <FaTemperatureLow /> Temperatura Mínima:
          </span>
          {weather?.main.temp_min} °C
        </p>
        <p className="flex items-center gap-2">
          <span className="text-yellow-400 flex items-center gap-2">
            <FaTemperatureLow /> Temperatura Máxima:
          </span>
          {weather?.main.temp_max} °C
        </p>
        <p className="flex items-center gap-2">
          <span className="text-yellow-400 flex items-center gap-2">
            <AiFillFire />
            Presión:
          </span>
          {weather?.main.pressure}
        </p>
        <p className="flex items-center gap-2">
          <span className="text-yellow-400 flex items-center gap-2">
            <MdOutlineWaterDrop />
            Humedad:
          </span>
          {weather?.main.humidity}
        </p>
      </div>
    </section>
  );
}
