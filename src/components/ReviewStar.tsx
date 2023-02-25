import starSvg from "../assets/icon-star.svg";
import { useEffect, useState } from "react";

type ReviewStarProps = {
  stars: { rating: number; reviewer: string }[];
};

const ReviewStar = ({ stars }: ReviewStarProps) => {
  const [starsRendered, setStarsRendered] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (starsRendered < stars[0].rating) {
        setStarsRendered(starsRendered + 1);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [starsRendered, stars]);

  return (
    <div className="h-[78px] w-[327px] lg:w-[465px] lg:h-[56px] bg-[#F7F2F8] flex flex-col lg:flex-row items-center lg:justify-evenly justify-center rounded-[8px] shadow-lg">
      <div className="flex flex-row items-center mb-2 w-32">
        {Array.from({ length: starsRendered }).map((_, i) => (
          <img src={starSvg} alt="" key={i} className="mr-2 animate-star" />
        ))}
      </div>
      <h2 className="font-bold text-[#502050] lg:text-[17px] lg:mr-5 ">
        Rated {stars[0].rating.toFixed(0)} Stars in {stars[0].reviewer}
      </h2>
    </div>
  );
};

export default ReviewStar;
