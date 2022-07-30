import React, { useState } from "react";
import ReactMapboxGl from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useSetAlgolia, useSetCoordsRecoil } from "hooks/atom";

function MapboxComp() {
  const [query, setQuery] = useState("");
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [coords, setCoords] = useSetCoordsRecoil();

  const tokenMapBox =
    "pk.eyJ1IjoiYWRyaWFuODQyMiIsImEiOiJjbDFteWtkMXEwanFxM2N1a3U4N3ljOThxIn0.KgNsisHDoUb9VN-TEHzoGQ";
  const Map = ReactMapboxGl({
    accessToken: tokenMapBox,
  });
  const toSearch = async () => {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?worldview=cn&access_token=${tokenMapBox}`
    );
    const json = await res.json();
    return json;
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.key == "Enter") {
      setQuery(e.target.value);
      toSearch();
    }
  };
  const setSearch = () => {
    toSearch().then((json) => {
      setLat(json.features[0].center[0]);
      setLng(json.features[0].center[1]);
      setCoords({
        lat: json.features[0].center[0],
        lng: json.features[0].center[1],
        location: json.features[0].text,
      });
    });
  };

  const mapboxStyleForm: any = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const buttonStyle: any = {
    minWidth: "169px",
    height: "28px",
    borderRadius: "7px",
    border: "transparent",
    fontFamily: "Mochiy Pop One",
    boxShadow: "5px 3px 6px 1px #162626",
    backgroundColor: "#cb4b4bc2",
  };
  const inputStyle: any = {
    height: "27px",
    width: "197px",
    borderRadius: "6px",
    border: "transparent",
    fontFamily: "Mochiy Pop One",
    fontSize: "13px",
  };

  return (
    <div style={mapboxStyleForm}>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: " 30vh",
          width: "309px",
          borderRadius: "24px",
        }}
        center={lat && lng ? [lat, lng] : [-58.6207062, -34.8055484]}
        zoom={[14]}
      ></Map>
      <div>
        <input
          style={inputStyle}
          type="text"
          onChange={handleChange}
          onKeyDown={handleChange}
          value={query}
          placeholder="example: Ezeiza"
        />
        <button style={buttonStyle} onClick={setSearch}>
          Confirmar ubication
        </button>
      </div>
      ;
    </div>
  );
}

export { MapboxComp };
