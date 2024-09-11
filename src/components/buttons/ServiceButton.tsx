import RightArrow from "../../assets/svg/service-arrow.svg";

const ServiceButton = () => {
  return (
    <div>
      <div className="">
        <button className="bg-[#315033] text-[#E1CFB4] rounded-full h-[56px] w-[218px] flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-[#8c7d6e] focus:outline-none focus:ring-2 focus:ring-[#E4CAA4]">
          <span className="text-base font-bold">Contact Us</span>
          <img
            src={RightArrow}
            alt="Right arrow"
            className="w-4 h-4 ml-2 transition-transform duration-300"
          />
        </button>
      </div>
    </div>
  );
};

export default ServiceButton;
