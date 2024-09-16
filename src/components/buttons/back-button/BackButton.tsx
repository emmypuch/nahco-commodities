import { Link } from "react-router-dom";
import BackBtn from "../../../assets/svg/back-btn.svg";
import "./BackButton.css";

const BackButton = () => {
  return (
    <Link to="/" className="back-button">
      {" "}
      <img src={BackBtn} alt="Back Button" />
    </Link>
  );
};

export default BackButton;
