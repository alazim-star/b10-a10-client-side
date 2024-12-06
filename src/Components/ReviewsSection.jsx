import React from "react";
import { Tooltip } from "react-tooltip";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Hameed J",
      rating: 5,
      text: "VISA NAVIGATOR made my visa process to Kenya incredibly smooth and stress-free! Their customer service was excellent—responsive, professional, and supportive every step of the way. They kept me updated throughout the p…",
      posted: "1 weeks ago",
    },
    {
      name: "Anonymous",
      rating: 5,
      text: "Angel Virgil Pantaleon customer service is exceptional. He attended to my requests and ensured that all my needs were met in record time.",
      posted: "3 weeks ago",
    },
    {
      name: "MC F",
      rating: 5,
      text: "VISA NAVIGATOR is a class act! The customer service is impeccable. Virgil, from VISA NAVIGATOR, walked me through my visa application for Australia. He was knowledgeable, patient, and detailed.",
      posted: "2 weeks ago",
    },
    {
        name: "MG Fring",
        rating: 5,
        text: "VISA NAVIGATOR is a class act! The customer service is impeccable. Virgil, from VISA NAVIGATOR, walked me through my visa application for Australia. He was knowledgeable, patient, and detailed.",
        posted: "1 weeks ago",
      },
      {
        name: "Micel",
        rating: 5,
        text: "VISA NAVIGATOR  is very helpful ! IT helped me multiple times this year with getting new passports for the executives of my company and each time we haven't gotten them back in a very timely ",
        posted: "2 weeks ago",
      },
      {
        name: "Jon",
        rating: 5,
        text: "VISA NAVIGATOR is a class act! The customer service is impeccable. Virgil, from VISA NAVIGATOR, walked me through my visa application for Australia. He was knowledgeable, patient, and detailed.",
        posted: "5 days ago",
      },
      {
        name: "Hajard",
        rating: 5,
        text: " John Rico Bejerano was prompt and very helpful with my e-visa application. Walked me through every step needed and also followed up. A pleasure to work with.",
        posted: "2 weeks ago",
      },
  ];

  return (
    <div className="bg-gray-100 py-20">
      
      <div className="lg:max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center lg:mb-8 ">
          <div className="flex justify-center gap-5 items-center">
          <h2 className="lg:text-3xl font-bold text-gray-800">EXCELLENT</h2>
          <span className="text-yellow-500 text-lg font-semibold">★★★★★</span>
          <span className="text-gray-600">4.40 Average</span>
          <span className=" font-bold">(3821 Reviews)</span>
          <h2 className="lg:text-3xl font-bold">REVIEWS</h2>
       



          </div>
          
          <div className="flex justify-center items-center gap-2 mt-2">
           
           
          </div>
        </div>

        {/* Carousel */}
        <div className="carousel w-full">
          {reviews.map((review, index) => (
            <div
              key={index}
              id={`slide${index}`}
              className="carousel-item relative w-full"
            >
              <div className="bg-white shadow-md rounded-lg p-6 mx-auto max-w-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-yellow-500">★★★★★</div>
                  
                </div>
                <span className="font-bold text-xl">{review.name}</span> 
                <br />
                <p className="text-gray-800">{review.text}</p>
                <div className="lg:mt-4 text-sm text-gray-500">
                 <br />
                  <span>Posted {review.posted}</span>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute flex justify-between transform -translate-y-1/2 lg:top-1/2 top-64 w-full px-4">
                <a
                  href={`#slide${(index - 1 + reviews.length) % reviews.length}`}
                  className="btn btn-circle text-5xl text-gray-500"
                >
                  ❮
                </a>
                <a
                  href={`#slide${(index + 1) % reviews.length}`}
                  className="btn btn-circle text-5xl text-gray-500"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
