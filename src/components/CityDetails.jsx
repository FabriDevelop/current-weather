import React, { useEffect } from "react";
import { getFlagEmoji } from "../utils/Flag";
import { motion } from "framer-motion";

export default function CityDetails({ weather }) {
  return (
    <motion.section
      initial={{
        scale: 0.8,
      }}
      animate={{
        x: 0,
        scale: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 1,
      }}
      className="mt-4 bg-background-500 rounded-xl p-10 text-white flex flex-col gap-3"
    >
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
    </motion.section>
  );
}
