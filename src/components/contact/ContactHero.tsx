import Herovector from "../../assets/svg/hero-vector.svg";
import "./ContactHero.css";

const ContactHero = () => {
  return (
    <>
      <div className="bg-[#263C28] px-[50px] relative w-full pb-[30px] h-[300px]">
        <div className="absolute inset-0">
          <img
            src={Herovector}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h2 className="text-[28px] md:text-[40px] font-[600] text-[#E4CAA4]">
              We’d love to hear from you!
            </h2>
            <p className="text-[#C8C0B4] font-[400] text-[14px] md:text-[16px] mt-3">
              Contact us regarding any inquiries or concerns.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHero;
