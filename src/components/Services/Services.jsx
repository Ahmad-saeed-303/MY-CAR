import React from "react";
import Img1 from "../../assets/website/m-rm.png";
import Img2 from "../../assets/website/bmw-rmx5.png";
import Img3 from "../../assets/website/audi-rm2.png";
import { FaStar } from "react-icons/fa";
import bgServices from "../../assets/website/background2.jpg"
const ServicesData = [
  {
    id: 1,
    img: Img1,
    title: "Mercedes",
    description:
      "Mercedes-Benz is a luxury car brand known for its high-quality craftsmanship, advanced technology, and elegant design. The Mercedes-Benz offers a smooth and comfortable ride, luxurious interior, and powerful performance. It is a symbol of prestige and sophistication.",
  },
  {
    id: 2,
    img: Img2,
    title: " BMW X5",
    description:
      "The BMW X5 is a luxurious and sporty SUV with a powerful engine, agile handling, and a premium interior. It offers advanced technology, ample cargo space, and a comfortable ride.",
  },
  {
    id: 3,
    img: Img3,
    title: "Audi Q7",
    description:
      "The Audi Q7 is a luxurious and powerful SUV with a spacious interior, advanced technology, and a smooth ride. It combines elegance, comfort, and performance in a versatile package. ",
  },
];
const bgImage = {
  backgroundImage: `url(${bgServices})`,
  backgroundColor :" #000",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

};

const Services = ({ handleOrderPopup }) => {

  return (
    
    <>
      <span id="services"></span>
      <div className="py-10" style={bgImage}>
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Trending Cars 
            </p>
            <h1 className="text-3xl font-bold">Best Cars </h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105  duration-300 shadow-md"
                  />
                </div>
                <div className="p-2 text-center">
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{service.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
