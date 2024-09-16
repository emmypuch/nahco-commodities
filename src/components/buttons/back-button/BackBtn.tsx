import { Link } from "react-router-dom";
import BackButton2 from "../../../assets/svg/backbtn.svg";

const BackBtn = () => {
  return (
    <>
      <Link to="/team" className="back-button">
        {" "}
        <img src={BackButton2} alt="Back Button" />
      </Link>
    </>
  );
};

export default BackBtn;
