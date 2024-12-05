import React from 'react';

const TopTravelDestinations = () => {
    const destinations = [
        {
            title: "USA",
            img: "https://i.ibb.co/F4NYbnb/viaggi-stati-uniti-new-york-i-Stock-1225580270-1080x720.jpg",
            alt: "New York City, USA",
        },
        {
            title: "Portugal",
            img: "https://i.ibb.co/yqJjsHZ/TAL-header-azenhas-do-mar-portugal-PRTGREECE0922-1b53ba0a4b4c4eef999ae4190f7981cd.jpg",
            alt: "Azenhas do Mar, Portugal",
        },
        {
            title: "Malaysia",
            img: "https://i.ibb.co/R9qZvj8/Malaysia-snapshot-cover-iso.jpg",
            alt: "Kuala Lumpur, Malaysia",
        },
        {
            title: "Germany",
            img: "https://i.ibb.co/rxvwBC9/germany.jpg",
            alt: "Berlin, Germany",
        },
        {
            title: "Italy",
            img: "https://i.ibb.co/Db7bMNH/italy-tours-hero.jpg",
            alt: "Venice, Italy",
        },
        {
            title: "Japan",
            img: "https://i.ibb.co/7VDWB1X/Senso-ji-Tempel-Tokio.jpg",
            alt: "Senso-ji Temple, Japan",
        },
    ];

    return (
        <div className="container mx-auto my-14 px-4">
            <h1 className="my-10 text-center text-4xl font-bold">Top Travel Destinations</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {destinations.map((destination, index) => (
                    <div key={index} className="relative group">
                        <img
                            className="w-full h-64 object-cover rounded-lg"
                            src={destination.img}
                            alt={destination.alt}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                            <p className="text-white text-lg font-semibold">{destination.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopTravelDestinations;
