import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function UseWeather() {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState({
    loaded: false,
    coords: { lat: "", lng: "" },
  });

  const onSuccess = (position) => {
    setLocation({
      loaded: true,
      coords: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error,
    });
    Swal.fire({
      icon: "error",
      title: "Acceso a la ubicación denegado",
      text: "Por favor, activa la ubicación y recarga la página",
    });
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      onError({
        code: 0,
        message: "Geolocalización no soportada",
      });
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!weather && location.loaded && !location.error) {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}&lat=${location.coords.lat}&lon=${location.coords.lng}`
        );
        const data = await res.json();
        setWeather(data);
        setLoading(false);
      }
    };
    fetchData();
  });

  const setCity = async (city) => {
    setLoading(true);
    console.log(city);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}&q=${city}`);
    const data = await res.json();
    setWeather(data);
    setLoading(false);
  };

  return { weather, loading, error, setCity, location };
}
