import starSvg from "../assets/icon-star.svg";

type ReviewStarProps = {
  stars: { rating: number; reviewer: string }[];
};
const animateStars = () => {
  const starImages = document.querySelectorAll(".animate-star");
  starImages.forEach((star, index) => {
    setTimeout(() => {
      star.classList.add("animate-star");
    }, index * 100);
  });
};

window.addEventListener("load", animateStars);
const ReviewStar = ({ stars }: ReviewStarProps) => {
  return (
    <div className="h-[78px] w-[327px] lg:w-[465px] lg:h-[56px] bg-[#F7F2F8] flex flex-col lg:flex-row items-center lg:justify-evenly justify-center rounded-[8px] shadow-lg">
      <div className="flex flex-row items-center mb-2 animate-star">
        {Array.from({ length: stars[0].rating }).map((_, i) => (
          <img src={starSvg} alt="" key={i} className="mr-2" />
        ))}
      </div>
      <h2 className="font-bold text-[#502050] lg:text-[17px] lg:mr-5 ">
        Rated {stars[0].rating.toFixed(0)} Stars in {stars[0].reviewer}
      </h2>
    </div>
  );
};

export default ReviewStar;
