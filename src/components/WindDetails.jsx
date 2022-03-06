import React from "react";
import { GiWindSlap } from "react-icons/gi";
import { BiDirections } from "react-icons/bi";
import { WiStrongWind } from "react-icons/wi";

export default function WindDetails({ wind }) {
  return (
    <section className="mt-4 bg-background-500 rounded-xl p-10 text-white flex flex-col gap-3">
      <h3 className="font-semibold text-lg">Viento </h3>
      <p className="flex items-center gap-2">
        <span className="text-yellow-400 flex items-center gap-2">
          <WiStrongWind />
          Velocidad:
        </span>
        {wind.speed} m/s
      </p>
      <p className="flex items-center gap-2">
        <span className="text-yellow-400 flex items-center gap-2">
          <BiDirections />
          Dirección:
        </span>
        {wind.deg} °
      </p>
      <p className="flex items-center gap-2">
        <span className="text-yellow-400 flex items-center gap-2">
          <GiWindSlap />
          Ráfaga:
        </span>
        {wind.gust} m/s
      </p>
    </section>
  );
}
