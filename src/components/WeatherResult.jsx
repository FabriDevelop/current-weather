import Image from "next/image";
import { BiArrowToRight, BiMapPin } from "react-icons/bi";
import { motion } from "framer-motion";

export default function WeatherResult({ weather, error }) {
  if (error) {
    return <h2 className="text-red-600">Dígita una ciudad válida</h2>;
  }
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
        duration: 0.4,
      }}
      className="mt-4 bg-background-500 rounded-xl p-10 text-white flex flex-col justify-center"
    >
      <div className="grid grid-cols-2 gap-2 items-center">
        <div className="flex flex-col gap-3">
          <p>Hoy</p>
          <p className="font-semibold text-4xl flex gap-1">
            {weather?.main.temp}
            <span className="text-base text-yellow-400">°C</span>
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <div className="self-center justify-self-center">
            <Image
              src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
              alt={weather?.weather[0].description}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <p className="flex items-center gap-2 text-lg font-semibold">
        <span className="text-yellow-400">
          <BiMapPin />
        </span>
        {weather?.name}
      </p>
      <p className="flex items-center gap-2 capitalize text-sm">
        <span className="text-yellow-400">
          <BiArrowToRight />
        </span>
        {weather?.weather[0].description}
      </p>
      <p className="flex items-center gap-2 mt-2 text-sm">
        <span className="text-yellow-400">Se siente como: </span>
        {weather?.main.feels_like} °C
      </p>
    </motion.section>
  );
}
