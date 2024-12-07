import React from 'react';
import Marquee from 'react-fast-marquee';


const CountryPic = () => {
    const marqueeItems = [
        {
          img: "https://i.ibb.co/F4NYbnb/viaggi-stati-uniti-new-york-i-Stock-1225580270-1080x720.jpg",
          country: "USA",
        },
        {
          img: "https://i.ibb.co.com/47kJD8r/Iconic-Landmarks-in-Rome-original.jpg",
          country: "Italy",
        },
        {
          img: "https://i.ibb.co.com/7Wc9rDF/Website-topbanner-classic-japan-1024x390.png",
          country: "Japan",
        },
        {
          img: "https://i.ibb.co.com/wY9dp9n/dubai-marina-skyline-2c8f1708f2a1.jpg",
          country: "Dubai",
        },
      ];
    return (
        <div>
            
      {/* Marquee Section */}
      <div className="  w-full mt-[]">
        <Marquee>
          {marqueeItems.map((item, index) => (
            <div key={index} className="relative w-80 h-40 mx-5">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={item.img}
                alt={item.country}
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-lg">
                <p className="text-white text-lg font-bold">{item.country}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
        </div>
    );
};

export default CountryPic;