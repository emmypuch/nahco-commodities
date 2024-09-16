import TeamBio from "./TeamBio";
import "./NahcoTeam.css";

const NahcoTeam = () => {
  return (
    <>
      <div className="bg-[#263C28] px-[20px] md:px-[50px] py-[30px]">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-[#E4CAA4] text-[28px] md:text-[36px] font-[600]">
            Our Team
          </h2>
          <p className="text-[#C8C0B4] font-[400] text-[14px] md:text-[16px] mt-4 max-w-[600px]">
            Our team is comprised of experienced professionals who are
            passionate about delivering exceptional results. We are dedicated to
            the success of your business and the satisfaction of our customers
            worldwide.
          </p>
        </div>

        <TeamBio />
      </div>
    </>
  );
};

export default NahcoTeam;
