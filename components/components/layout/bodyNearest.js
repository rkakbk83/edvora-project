import "./body.css";
import Ride from "./Ride";

const closest = (arr, num) => {
  return arr.reduce((acc, val) => {
    if (Math.abs(val - num) < Math.abs(acc)) {
      return val - num;
    } else {
      return acc;
    }
  }, Infinity) + num;
}
function BodyNearest(props) {
  // console.log(props.nearestArray);
  const Array = props.nearestArray.sort((a, b) => {
    if (Math.abs(closest(a.station_path, props.stCode)) > Math.abs(closest(b.station_path, props.stCode))) {
      return 1
    } else {
      return -1;
    }
  })
  // console.log(Array);
  return (
    <div className="rides">
      {Array.map((oneRide, index) => (
        <Ride
          key={index}
          id={oneRide.id}
          os_code={oneRide.origin_station_code}
          s_path={oneRide.station_path.toString()}
          date={new Date(oneRide.date).toDateString({})}
          map_url={oneRide.map_url}
          state={oneRide.state}
          city={oneRide.city}
          distance={Math.abs(props.closest(oneRide.station_path, props.stCode) - props.stCode)}
        />
      ))}
    </div>
  )
}

export default BodyNearest