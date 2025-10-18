// SolarIrradianceMap.jsx
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";

const SolarMap = () => {
    useEffect(() => {
        // Initialize map
        const map = L.map("solar-map", {
            center: [20.5937, 78.9629],
            zoom: 5,
            zoomControl: true,
            scrollWheelZoom: true,
            tap: false,
        });


        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
            maxZoom: 18,
        }).addTo(map);


        const irradianceData = [
            [28.6139, 77.209, 6],
            [19.076, 72.8777, 7.5],
            [13.0827, 80.2707, 5.5],
            [22.5726, 88.3639, 4.5],
            [12.9716, 77.5946, 6.5],
            [18.5204, 73.8567, 7],
            [26.9124, 75.7873, 6],
            [23.0225, 72.5714, 7.2],
            [15.2993, 74.124, 5],
            [21.1458, 79.0882, 6.8],
        ]


        const maxValue = 8;
        const heatData = irradianceData.map(([lat, lng, value]) => [
            lat,
            lng,
            value / maxValue,
        ]);

        L.heatLayer(heatData, {
            radius: 35,
            blur: 20,
            maxZoom: 10,
            gradient: {
                0.2: "blue",
                0.5: "lime",
                0.7: "yellow",
                1.0: "red",
            },
        }).addTo(map);


        map.on("click", (e) => {
            const { lat, lng } = e.latlng;
            const randomValue = (Math.random() * 5 + 3).toFixed(2)
            L.popup()
                .setLatLng(e.latlng)
                .setContent(`
          <div style="font-size:14px;">
            <b>📍 Location</b><br>
            Lat: ${lat.toFixed(3)}, Lng: ${lng.toFixed(3)}<br>
            ☀️ <b>Solar Irradiance:</b> ${randomValue} kWh/m²/day
          </div>
        `)
                .openOn(map);
        });

        // Legend
        const legend = L.control({ position: "bottomright" });
        legend.onAdd = function () {
            const div = L.DomUtil.create(
                "div",
                "info legend bg-white p-3 rounded-xl shadow-lg text-sm border border-gray-300"
            );
            div.innerHTML = `
        <h4 class="font-semibold text-gray-800 mb-2">☀️ Irradiance Levels</h4>
        <div><span style="background:red;display:inline-block;width:20px;height:10px;margin-right:5px;"></span> High (6–8 kWh/m²)</div>
        <div><span style="background:yellow;display:inline-block;width:20px;height:10px;margin-right:5px;"></span> Medium (4–6 kWh/m²)</div>
        <div><span style="background:lime;display:inline-block;width:20px;height:10px;margin-right:5px;"></span> Low (2–4 kWh/m²)</div>
        <div><span style="background:blue;display:inline-block;width:20px;height:10px;margin-right:5px;"></span> Very Low (<2 kWh/m²)</div>
      `;
            return div;
        };
        legend.addTo(map);


        return () => map.remove();
    }, []);

    return (
        <div className="flex flex-col mt-18 items-center justify-center py-8 bg-gray-100 min-h-screen">
            <div className="text-center mb-6">
                <h1
                    className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2
               bg-gradient-to-r from-teal-600 to-green-700 bg-clip-text text-transparent"
                    aria-label="Solar Irradiance Map"
                >
                    ☀️ Solar Irradiance Map
                </h1>

                <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Visualize solar energy potential across regions of India. The heatmap
                    highlights solar irradiance intensity — from cool blues (low) to warm
                    reds (high), helping identify high-potential areas for solar deployment.
                </p>
            </div>

            <div
                id="solar-map"
                className="w-[90%] h-[70vh] rounded-2xl shadow-lg border border-gray-300"
            ></div>

            <p className="text-sm text-gray-500 mt-4">
                * Demo Data – Visualization Purpose Only
            </p>
        </div>
    );
};

export default SolarMap;









