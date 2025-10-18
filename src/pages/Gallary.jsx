import React from "react";

const images = [
    "https://images.unsplash.com/photo-1723046106153-8d3810267931?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvbGFyJTIwZW5lcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",

    "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",

    "https://media.istockphoto.com/id/2187086041/photo/service-engineer-checking-solar-cell-on-the-roof-for-maintenance-if-there-is-a-damaged-part.webp?a=1&b=1&s=612x612&w=0&k=20&c=crioO2dh6E5tT07Jfr4XEz-QP6qPKCJ-Uht_V0DodBU=",

    "https://media.istockphoto.com/id/2168596047/photo/energy-storage-power-station-and-solar-power-station-in-the-morning.webp?a=1&b=1&s=612x612&w=0&k=20&c=AHEmWedxfcwaZKnGj5rzTp2SJfYmzs_HAo2638YFgFw=",

    "https://plus.unsplash.com/premium_photo-1678865184075-b635d6eeec78?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29sYXIlMjBlbmVyeSUyMHBhd2FuJTIwY2hha2tpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",

    "https://media.istockphoto.com/id/1500851893/photo/indian-engineer-with-laptop-talking-to-young-couple-about-solar-panel-installation-renewable.webp?a=1&b=1&s=612x612&w=0&k=20&c=Or2rVDJ20pXdfB-O5Vz9xSwXujoJmsh9MkWgnkCeh64=",

    "https://plus.unsplash.com/premium_photo-1678865184287-adebc65a012d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",

    "https://plus.unsplash.com/premium_photo-1679917152960-b9e43c2141f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",

];

const Gallery = () => {
    return (
        <section className="py-16 bg-white font-[Poppins] text-center mt-8">
            <div className="mb-12 px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
                    Our Solar Projects <br className="hidden sm:block" /> Gallery
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-500 ease-in-out"
                    >
                        <img
                            src={img}
                            alt={`Solar Project ${index + 1}`}
                            className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                        />
                        <div className="absolute inset-0  bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <span className="text-white font-semibold text-lg sm:text-xl md:text-2xl">

                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
