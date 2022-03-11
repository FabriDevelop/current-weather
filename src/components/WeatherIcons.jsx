import {
  WiCloudy,
  WiDayCloudy,
  WiDayRain,
  WiDayShowers,
  WiDaySnow,
  WiDaySunny,
  WiDayThunderstorm,
  WiMoonAltFull,
  WiMoonset,
  WiNightAltCloudy,
  WiNightRain,
  WiNightShowers,
  WiNightSnow,
  WiNightThunderstorm,
  WiWindy,
} from "react-icons/wi";

export default function WeatherIcons({ code }) {
  console.log(code);
  switch (code) {
    case "01d": {
      return (
        <div className="text-yellow-400">
          <WiDaySunny fontSize={100} />
        </div>
      );
    }
    case "01n": {
      return (
        <div className="text-blue-500">
          <WiMoonset fontSize={100} />
        </div>
      );
    }

    case "02d": {
      return (
        <div className="text-yellow-400">
          <WiDayCloudy fontSize={100} />
        </div>
      );
    }
    case "02n": {
      return (
        <div className="text-blue-500">
          <WiNightAltCloudy fontSize={100} />
        </div>
      );
    }

    case "03d": {
      return (
        <div className="text-yellow-400">
          <WiCloudy fontSize={100} />
        </div>
      );
    }
    case "03n": {
      return (
        <div className="text-blue-500">
          <WiCloudy fontSize={100} />
        </div>
      );
    }

    case "04d": {
      return (
        <div className="text-yellow-400">
          <WiCloudy fontSize={100} />
        </div>
      );
    }
    case "04n": {
      return (
        <div className="text-blue-500">
          <WiCloudy fontSize={100} />
        </div>
      );
    }

    case "09d": {
      return (
        <div className="text-yellow-400">
          <WiDayShowers fontSize={100} />
        </div>
      );
    }
    case "09n": {
      return (
        <div className="text-blue-500">
          <WiNightShowers fontSize={100} />
        </div>
      );
    }

    case "10d": {
      return (
        <div className="text-yellow-400">
          <WiDayRain fontSize={100} />
        </div>
      );
    }
    case "10n": {
      return (
        <div className="text-blue-500">
          <WiNightRain fontSize={100} />
        </div>
      );
    }

    case "11d": {
      return (
        <div className="text-yellow-400">
          <WiDayThunderstorm fontSize={100} />
        </div>
      );
    }
    case "11n": {
      return (
        <div className="text-blue-500">
          <WiNightThunderstorm fontSize={100} />
        </div>
      );
    }

    case "13d": {
      return (
        <div className="text-yellow-400">
          <WiDaySnow fontSize={100} />
        </div>
      );
    }
    case "13n": {
      return (
        <div className="text-blue-500">
          <WiNightSnow fontSize={100} />
        </div>
      );
    }

    case "100d": {
      return (
        <div className="text-yellow-400">
          <WiWindy fontSize={100} />
        </div>
      );
    }
    case "100n": {
      return (
        <div className="text-blue-500">
          <WiWindy fontSize={100} />
        </div>
      );
    }

    default: {
      return <h1>Not icon available</h1>;
    }
  }
}
