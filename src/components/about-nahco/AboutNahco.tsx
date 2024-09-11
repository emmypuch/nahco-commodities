import Mission from "../../assets/svg/mission.svg";
import NahcoCard from "./NahcoCard";

const AboutNahco = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center">
          <img src={Mission} alt="" />
        </div>
        <NahcoCard />
      </div>
    </>
  );
};

export default AboutNahco;
