import React, { useState, useEffect } from "react";

const GetUserLocation = () => {
  const [address, setAddress] = useState("Fetching location...");

  useEffect(() => {
    if (!navigator.geolocation) {
      setAddress("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        )
          .then((res) => res.json())
          .then((data) => {
            const { city, town, village, state } = data.address || {};
            if (city || town || village || state) {
              setAddress(
                `${city || town || village || "Unknown"}, ${state || ""}`
              );
            } else {
              setAddress("Unknown location");
            }
          })
          .catch(() => setAddress("Location fetch failed"));
      },
      () => setAddress("Location access denied")
    );
  }, []);

  return <span style={{ fontSize: "0.8rem" }}>{address}</span>;
};

export default GetUserLocation;
