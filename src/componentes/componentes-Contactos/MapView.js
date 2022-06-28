import React, { Fragment } from 'react'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapView = () => {
    const position = [-34.6043698,-58.3961688,21]
  return (
    <Fragment>
     <MapContainer id="map" center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
            <Popup>
           ¡Nos encontramos aca! <br/>
           Av. Corrientes 2037, CABA
            </Popup>
        </Marker>
        </MapContainer>
    </Fragment>
  )
}

export default MapView
