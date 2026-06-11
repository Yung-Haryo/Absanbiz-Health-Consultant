import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import emergencyImg from "../assets/Products/1.jpg";
import cardiologyImg from "../assets/Products/1 (1).jpg";
import dentalImg from "../assets/Products/reishi.webp";
import reviveImg from "../assets/Products/revive.webp";
import product2Img from "../assets/Products/2.jpg";
import padImg from "../assets/Products/pad.png";
import malgilim from "../assets/Products/malgilim.png";

const Services = () => {
  const services = [
    {
      title: "Blood Circulation Machine",
      desc: "A blood circulation machine helps to artificially encourage blood flow and venous return.",
      image: emergencyImg,
    },
    {
      title: "Refresh Tea",
      desc: "Refresh tea, a natural herbal blend, helps reduce internal heat and refresh the body.",
      image: cardiologyImg,
    },
    {
      title: "Reishi Mushroom",
      desc: "It helps stimulate and boost your body's natural immune system.",
      image: dentalImg,
    },
    {
      title: "Revive Product",
      desc: "Herbal supplement formulated to enhance performance and stamina.",
      image: reviveImg,
    },
    {
      title: "Golden 6",
      desc: "Natural herbal supplement formulated to support overall wellness.",
      image: product2Img,
    },
    {
      title: "Health Pad",
      desc: "Designed for comfort, absorbency and feminine hygiene.",
      image: padImg,
    },
    {
      title: "Malgilim Capsule",
      desc: "Supports healthy weight management and metabolism.",
      image: malgilim,
    },
  ];

  const handleOrder = (productName) => {
    const phone = "234 811 887 9057"; // CHANGE TO YOUR WHATSAPP NUMBER

    const message = `Hello, I want to place an order for ${productName}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="products"
      className="py-24 px-6 bg-white text-center"
    >
      <h2 className="text-3xl font-bold mb-12">
        Our Products
      </h2>

      <div className="max-w-6xl mx-auto">

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {services.map((service, index) => (
            <SwiperSlide key={index}>

              <div className="p-8 rounded-2xl shadow hover:scale-105 transition duration-300 bg-gradient-to-br from-blue-50 to-purple-50 h-full flex flex-col">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />

                <h3 className="font-bold text-xl mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 flex-grow">
                  {service.desc}
                </p>

                <button
                  onClick={() => handleOrder(service.title)}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition"
                >
                  Place Order
                </button>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
};

export default Services;