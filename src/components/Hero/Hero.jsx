import React from "react";
import Book1 from "../../assets/website/audi-rm2.png";
import Book2 from "../../assets/website/bmw-rmx5.png";
import Book3 from "../../assets/website/m-rm.png";
import bgBmw from "../../assets/website/bgBmw.jpg";
import bgAudi from "../../assets/website/bgAudi.jpg";
import bgMercedes from "../../assets/website/bgMercedes2.jpg";
import background from "../..//assets/website/background.jpg"
import Vector from "../../assets/website/bgZoom.jpg";


const bgBMW = {
  backgroundImage: `url(${background})`,
  backgroundColor :" #000",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  // height: "100%",
  width: "100%",
};
const bgAUDI = {
  backgroundImage: `url(${background})`,
  backgroundColor :" #000",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  // height: "100%",
  width: "100%",
};
const bgMERCEDES = {
  backgroundImage: `url(${background})`,
  backgroundColor :" #000",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  // height: "100%",
  width: "100%",
};


const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "The Audi Q7 is a luxurious and powerful SUV with a spacious interior, advanced technology,  a smooth ride.",
    description:
      " It combines elegance, comfort, and performance in a versatile package",
      backgroundID:bgAUDI ,
  },
  {
    id: 2,
    img: Book2,
    title: "The BMW X5 is a luxurious and sporty SUV with a powerful engine, agile handling, and a premium interior.",
    description:
      " It offers advanced technology, ample cargo space, and a comfortable ride. The X5 combines performance, style, and versatility in a refined package",
      backgroundID:bgBMW ,
    },
  {
    id: 3,
    img: Book3,
    title: "Mercedes-Benz is a luxury car brand known for its high-quality craftsmanship, advanced technology, and elegant design.  ",
    description:
      "The Mercedes-Benz offers a smooth and comfortable ride, luxurious interior, and powerful performance. It is a symbol of prestige and sophistication.",
      backgroundID: bgMERCEDES,
    },
];

const Hero = ({ handleOrderPopup }) => {
  const [imageId, setImageId] = React.useState(Book1);
  const [title, setTitle] = React.useState(" Audi Q7 is a luxurious and powerful SUV with a spacious interior advanced technology a smooth ride ");
  const [description, setDescription] = React.useState(
    "It combines elegance, comfort, and performance in a versatile package."
  );
  const [background,setBackground]=React.useState(bgBMW);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundColor :" #000",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // height: "100%",
    // width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[450px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={background}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
            
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-4xl font-bold"
              >
                {title}
                <p class="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary ">
               {/* " Ahmad Saeed " */}
                </p>{" "}
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm "
              >
                {description}
              </p>
              <div>
                <button
                  onClick={handleOrderPopup}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                >
                  Order Now
                </button>
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 " >
              <div className="h-[300px] sm:h-[450px] opacity-0.3  overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  alt="biryani img"
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white border rounded-full"
               style={bgImage}   >
              
                {ImageList.map((item) => (
                  <img
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? Book1 : item.id === 2 ? Book2 : Book3
                      );
                      setTitle(item.title);
                      setDescription(item.description);
                      setBackground(item.backgroundID);
                    }}
                    alt="biryani img"
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
