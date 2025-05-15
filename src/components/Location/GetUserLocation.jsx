import React, { useState, useEffect } from "react";

const GetUserLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setError(null);
      },
      (err) => {
        setError("Permission denied or unable to get location");
      }
    );
  }, []);

  return (
    <div>
      {location.latitude && location.longitude && (
        <p>
          Your Location: Latitude {location.latitude}, Longitude{" "}
          {location.longitude}
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default GetUserLocation;
