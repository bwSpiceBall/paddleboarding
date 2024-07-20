import "../features.json";
import {
  APIProvider as GMapsProvider,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { useState } from "react";
import mapStyle from "./assets/mapStyle.json";
import "./index.css";


export default function App() {
  const position = { lat: 54.02013940885722, lng: -4.462459976422213 };
  const [markerPosition, setMarkerPosition] = useState<{lat: number, lng: number} | null>(null);

  const [ viewState, updateViewState] = useState({
    latitude: position.lat,
    longitude: position.lng,
    zoom: 5
  });

  const mapProps = {
    options: { styles: mapStyle  }
  }

  const handleMapClick = (e: any) => {
    updateViewState(e.map.viewState)      
    setMarkerPosition(e.detail.latLng)
  }

  return (
    <GMapsProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="mainPage__app-container">
        <div className="mainPage__map_container">
          <Map 
            {...mapProps}
            onClick={(e) => handleMapClick(e)} 
            viewState={viewState}
            >
            <Marker position={markerPosition} />
          </Map>
        </div>
        <div className="mainPage__card-container">
          <Card>
            <CardHeader>
              <CardTitle>Paddling Lake</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum</p>
            </CardContent>
            <CardFooter>
              <p>Lorem Ipsum</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </GMapsProvider>
  );
}
