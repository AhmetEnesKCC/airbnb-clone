import { getCenter } from "geolib";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

function Map({ searchResults }) {
  const coordinates = searchResults?.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [selectedLocation, setSelectedLocation] = useState({});

  const [viewPort, setViewPort] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    width: "100%",
    height: "100%",
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/ahmeteneskcc/cks0i5gbn60wu18nxqcyym8m0"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewPort}
      onViewportChange={(nextViewPort) => setViewPort(nextViewPort)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              className="cursor-pointer animate-bounce text-2xl"
              aria-label="push-pin"
              onClick={() => setSelectedLocation(result)}
            >
              📍
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
