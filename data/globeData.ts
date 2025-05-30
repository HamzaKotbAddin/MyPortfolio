export const myGlobeConfig = {
    globeColor: "#1d072e",
    atmosphereColor: "#ffffff",
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    autoRotate: true,
    autoRotateSpeed: 1,
  };
  
  export const myGlobeData = [
    {
      order: 1,
      startLat: 27.5114, // Hail
      startLng: 41.7208,
      endLat: 24.7136,   // Riyadh
      endLng: 46.6753,
      arcAlt: 0.3,
      color: "#ff6b81",
    },
    {
      order: 2,
      startLat: 27.5114, // Hail
      startLng: 41.7208,
      endLat: 21.3891,   // Jeddah
      endLng: 39.8579,
      arcAlt: 0.3,
      color: "#36c7d9",
    },
    {
    order: 4,
    startLat: 27.5114, // Hail
    startLng: 41.7208,
    endLat: 40.7128, // New York
    endLng: -74.006,
    arcAlt: 0.45,
    color: "#a084e8",
  },

  ];