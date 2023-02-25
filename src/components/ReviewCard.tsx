type ReviewCardProps = {
  imageSrc: string;
  name: string;
  verified: boolean;
  review: string;
};
const ReviewCard = ({ imageSrc, name, verified, review }: ReviewCardProps) => {
  return (
    <div className="h-[248px] w-[327px] lg:h-[234px] lg:w-[354px] bg-[#511F50] px-[32px] py-[40px] rounded-[8px]">
      <div className="flex items-center justify-start">
        <img src={imageSrc} alt="" className="rounded-full h-[40px] object-cover" />
        <h3 className="text-[#fff] font-bold ml-6">
          {name}
          <span>
            {verified && (
              <p className="text-[#ee68a4] font-light leading-none opacity-80 ">Verified Buyer</p>
            )}
          </span>
        </h3>
      </div>
      <div>
        <p className="text-[#fff] text-[15px] lg:text-[16px] mt-6 mr-3 lg:mr-0 tracking-wide lg:leading-[1.35em] ">{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
