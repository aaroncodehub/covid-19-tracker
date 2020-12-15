import React from 'react'
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import './Map.scss'
import "leaflet/dist/leaflet.css";
import {showDataOnMap} from '../util'

const Map = ({ countries, casesType, center, zoom }) => {

    return (
        <div className="map">
          <LeafletMap center={center} zoom={zoom}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {showDataOnMap(countries,casesType)}
          </LeafletMap>
        </div>
      );
}

export default Map
