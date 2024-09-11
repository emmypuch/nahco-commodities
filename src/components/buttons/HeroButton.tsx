import RightArrow from "../../assets/svg/right-arrow.svg";

const HeroButton = () => {
  return (
    <div className="">
      <button className="bg-[#A99474] text-white rounded-full h-[56px] w-[218px] flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-[#8c7d6e] focus:outline-none focus:ring-2 focus:ring-[#E4CAA4]">
        <span className="text-base font-bold">Get a Quote</span>
        <img
          src={RightArrow}
          alt="Right arrow"
          className="w-4 h-4 ml-2 transition-transform duration-300"
        />
      </button>
    </div>
  );
};

export default HeroButton;
