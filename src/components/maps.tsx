import React, { ReactNode, useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import {DataPeta, CulturalLocation } from "../Model/local-data";
import Image from "next/image";
import Link from "next/link";

type MapProps = {
  center: [number, number];
  zoom: number;
  children?: ReactNode;
};



export default function Map(prop: MapProps) {
  const pin = L.icon({
    iconUrl: "/pin.svg",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const [markers, setMarkers] = useState<CulturalLocation[]>([]);

  useEffect(() => {
      DataPeta.getDataMarker().then((data) => setMarkers(data));
  },[]);

  return (
    <MapContainer
      markerZoomAnimation
      zoomAnimation
      className="z-0 shadow-xl"
      center={prop.center}
      zoom={prop.zoom}
      style={{ height: "89vh", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        zIndex={1}
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />

      {
        markers.map((marker, index) => (
          <Marker key={index} position={marker.coordinates} icon={pin} title={marker.name}>
            <Popup>
              <h2>{marker.name}</h2>
              <Image src={marker.imageUrl} alt={marker.name} width={300} height={300} className=" rounded-md "/>
              <p>{marker.description}</p>
              <Link href={`/artikel/detail/${marker.id}`}>
                Detail
              </Link>
            </Popup>
          </Marker>
        ))
      }
    </MapContainer>
  );
}
