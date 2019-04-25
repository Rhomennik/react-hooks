import React, { useState, useEffect } from 'react';

export default function App() {
  const [location, setLocation] = useState({});
 // Component didUpdate
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived)

    // component willunmount
    return () => navigator.geolocation.clearWatch(watchId)
  }, []);

  function handlePositionReceived(coords) {
    const { latitude, longitude } = coords.coords;
    setLocation({ latitude, longitude });
  }



  return (
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
  );
}
