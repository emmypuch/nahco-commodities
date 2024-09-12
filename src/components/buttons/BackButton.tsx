import { Link } from "react-router-dom";
import BackBtn from "../../assets/svg/back-btn.svg";

const BackButton = () => {
  return (
    <>
      <Link to="/">
        <img src={BackBtn} alt="" />
      </Link>
    </>
  );
};

export default BackButton;
