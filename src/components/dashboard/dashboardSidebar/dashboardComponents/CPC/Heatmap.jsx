import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, HeatmapLayer } from '@react-google-maps/api';

const Heatmap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBN_tvPhUaD4NRgWucmI4LD7iquE2pqV3E",
    libraries: ["visualization"]
  });

  const mapContainerStyle = {
    height: "400px",
    width: "100%"
  };

  const center = {
    lat: 37.7749, // Example: San Francisco
    lng: -122.4194
  };

  const heatmapData = useMemo(() => {
    if (!isLoaded) return [];
    return [
      { location: new window.google.maps.LatLng(37.782, -122.447), weight: 0.5 },
      { location: new window.google.maps.LatLng(37.782, -122.445), weight: 2 },
      { location: new window.google.maps.LatLng(37.782, -122.443), weight: 3 },
      { location: new window.google.maps.LatLng(37.782, -122.441), weight: 2 },
      { location: new window.google.maps.LatLng(37.782, -122.439), weight: 0.5 },
    ];
  }, [isLoaded]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={13}
    >
      <HeatmapLayer data={heatmapData} />
    </GoogleMap>
  );
};

export default Heatmap;