
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const apikey = import.meta.env.VITE_REACT_API_KEY;

  const [data, setData] = useState(null);
  const [inputlocation, setInputlocation] = useState("");
  const currenttime = (q) => {
    axios
      .get(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${q}`)
      .then((res) => setData(res.data));
  };

  return (
    <>
      <div>WeatherAPP</div>
      {data ? (
        <>
          <div>country: {data.location.country}</div>
          <div>name: {data.location.name}</div>
          <div>region: {data.location.region}</div>
          <div>temp_c: {data.current.temp_c}</div>
          <div>text: {data.current.condition.text}</div>
          <img src={data.current.condition.icon} alt="" />
          <div>localtime: {data.location.localtime}</div>
        </>
      ) : null}
      <input type="text" onChange={(e) => setInputlocation(e.target.value)} />
      <br />
      <button onClick={() => currenttime(inputlocation)}>search</button>
    </>
  );
}

export default App;
