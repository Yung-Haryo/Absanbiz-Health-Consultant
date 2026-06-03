import { useState } from "react";

import patient1 from "../assets/patient/patient1.jpg";
import patient2 from "../assets/patient/patient2.jpg";
import patient3 from "../assets/patient/patient3.jpg";

const Testimonials = () => {
  const [expanded, setExpanded] = useState(null);

  const reviews = [
    {
      name: "Mr. Smith",
      image: patient1,
      review:
        "Excellent care with reliable service and very professional staff. The doctors explained everything clearly and I felt comfortable throughout my treatment.",
    },
    {
      name: "Hon. Bayo",
      image: patient2,
      review:
        "The staff were friendly and the environment was clean. I received quality healthcare and would gladly recommend this facility to others.",
    },
    {
      name: "Emmanuel Tina",
      image: patient3,
      review:
        "Very impressive service. The consultation process was smooth and the medical team was highly professional and supportive.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50 text-center px-6">
      <h2 className="text-3xl font-bold mb-12">
        Patient Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />

            <div className="text-yellow-500 mb-3">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-600 mb-4">
              {expanded === i
                ? review.review
                : `${review.review.substring(0, 80)}...`}
            </p>

            <button
              onClick={() =>
                setExpanded(expanded === i ? null : i)
              }
              className="text-blue-600 font-semibold hover:underline"
            >
              {expanded === i ? "Show Less" : "Read More"}
            </button>

            <h4 className="font-bold mt-4">
              — {review.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;