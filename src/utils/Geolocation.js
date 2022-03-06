const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const success = (pos) => {
  const crd = pos.coords;

  return {
    lat: crd.latitude,
    lon: crd.longitude,
  };
};

const error = (err) => {
  console.err(new Error(err));
};

export default navigator.geolocation.getCurrentPosition(success, error, options);
