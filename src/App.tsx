import { useEffect, useState } from "react";

import Heading from "./components/Heading";
import ReviewStar from "./components/ReviewStar";
import ReviewCard from "./components/ReviewCard";

import bgMobileTop from "./assets/bg-pattern-top-mobile.svg";
import bgMobileBot from "./assets/bg-pattern-bottom-mobile.svg";

import bgDesktopTop from "./assets/bg-pattern-top-desktop.svg";
import bgDesktopBot from "./assets/bg-pattern-bottom-desktop.svg";

import coltonImage from "./assets/image-colton.jpg";
import ireneImage from "./assets/image-irene.jpg";
import anneImage from "./assets/image-anne.jpg";

const reviews = [
  {
    imageSrc: coltonImage,
    name: "Colton Smith",
    verified: true,
    review:
      '" We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "',
  },
  {
    imageSrc: ireneImage,
    name: "Irene Roberts",
    verified: true,
    review:
      '" Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
  },
  {
    imageSrc: anneImage,
    name: "Anne Wallace",
    verified: true,
    review:
      '" Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "',
  },
];

const stars = [
  {
    rating: 5,
    reviewer: "Reviews",
  },
  {
    rating: 5,
    reviewer: "Report Guru",
  },
  {
    rating: 5,
    reviewer: "BestTech",
  },
];
function App() {
  const [isLgScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsLargeScreen(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) =>
      setIsLargeScreen(event.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <main className="flex flex-col lg:flex-row items-center justify-center relative z-10 min-h-screen py-20">
      {isLgScreen ? (
        <>
          <div className="absolute top-0 left-0">
            <img src={bgDesktopTop} alt="" className="-z-10"/>
          </div>
          <div className="absolute bottom-0 right-0">
            <img src={bgDesktopBot} alt="" className="-z-10"/>
          </div>
        </>
      ) : (
        <>
          <div className="absolute top-0 left-20">
            <img src={bgMobileTop} alt="" className="-z-10" />
          </div>
          <div className="absolute bottom-0 right-0 w-full items-center">
            <img src={bgMobileBot} alt="" className="-z-10" />
          </div>
        </>
      )}

      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="">
            <Heading />
          </div>
          <div className="z-10 mt-10 lg:mt-2 flex flex-col gap-4 ">
            {stars.map((star, i) => (
              <div
                key={i}
                style={{
                  marginLeft: isLgScreen ? `${(i + 1) * 3}rem` : 0,
                  paddingLeft: isLgScreen ? 128 : 0,
                }}
              >
                <ReviewStar stars={[star]} />
              </div>
            ))}
          </div>
        </div>

        <div className="z-10 mt-10 lg:mt-0 flex flex-col items-center gap-4 lg:justify-center lg:flex-row">
          {reviews.map((review, i) => (
            <div
              key={i}
              style={{
                marginTop: isLgScreen ? `${(i + 1) * 2}rem` : 0,
                marginRight: isLgScreen ? 15 : 0,
              }}
            >
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
export default App;
