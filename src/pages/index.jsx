import Head from "next/head";
import { useRef, useState } from "react";
import { BiCloud, BiSearch } from "react-icons/bi";
import Loading from "../components/Loading";
import WeatherInfo from "../components/WeatherInfo";
import UseWheater from "../hooks/UseWeather";
import { motion } from "framer-motion";

export default function Home() {
  const cityRef = useRef();
  const { setCity, weather, loading, error } = UseWheater();
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityRef.current.value !== "") {
      setCity(cityRef.current.value);
      cityRef.current.value = "";
    }
    setSearchBarOpen(false);
  };

  return (
    <>
      <Head>
        <title>Current Wheater</title>
      </Head>
      <main className="flex items-center flex-col w-[90%] mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-20 lg:gap-32 my-2">
          <h1 className="font-semibold text-white flex items-end gap-1 mt-7 text-lg text-center">
            Current
            <span className="text-blue-300 flex items-end">
              Weather <BiCloud fontSize={30} />
            </span>
          </h1>
          {!searchBarOpen ? (
            <motion.button
              initial={{
                x: 100,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                scale: 1,
              }}
              transition={{
                type: "tween",
                stiffness: 100,
                duration: 0.4,
              }}
              className="flex gap-2 md:self-end text-blue-400"
              onClick={() => setSearchBarOpen(true)}
            >
              <p className="md:hidden text-lg">Buscar ciudad</p>
              <BiSearch fontSize={25} />
            </motion.button>
          ) : (
            <motion.form
              initial={{
                x: 100,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                scale: 1,
              }}
              transition={{
                type: "tween",
                stiffness: 100,
                duration: 0.4,
              }}
              className="flex gap-2 self-end text-sm"
            >
              <input
                type="text"
                className="bg-background-500 p-3 pl-5 text-blue-400 rounded-lg
              outline-blue-400"
                placeholder="Nombre de la ciudad"
                ref={cityRef}
              />
              <button
                className="bg-blue-400 p-2 rounded-lg font-semibold
              text-background-600"
                type="submit"
                onClick={handleSubmit}
              >
                Ver Clima
              </button>
            </motion.form>
          )}
        </div>

        {loading ? (
          <Loading />
        ) : (
          <WeatherInfo weather={weather} error={error} />
        )}
      </main>
    </>
  );
}
