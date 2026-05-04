import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css"
const Map = ({lat,lon}) => {
    if (!lat || !lon) return <p>Loading map...</p>;
  return (
    <div>
        <MapContainer
              center={[lat, lon]} // Delhi
              zoom={10}
            //   style={{ height: "400px", width: "100%" }}
              className='map-container' 
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="© OpenStreetMap contributors"
              />

              <Marker position={[lat, lon]}>
                <Popup>
                  Hello from Leaflet 🌍
                </Popup>
              </Marker>
            </MapContainer>
    </div>
  )
}

export default Map