import { Link } from "react-router-dom";
import teamMember from "../../types/teamMember";

const TeamBio = () => {
  return (
    <>
      <div className="team-wrapper flex gap-6 justify-center mt-[40px]">
        {teamMember.slice(0, 3).map((member, index) => (
          <div key={index}>
            <img src={member.image} alt={member.alt} />
            <h6 className="text-[#E1CFB4] text-[16px] md:text-[20px] mt-2 font-[500]">
              {member.name}
            </h6>
            <h4 className="text-[#F9FAFB] text-[16px] md:text-[18px] font-[600] mt-2">
              {member.title}
            </h4>
            <Link
              to={`/team/${member.id}`}
              className="text-[#D2CCB9] text-[12px] underline md:text-[14px] font-[400]"
            >
              Read Bio
            </Link>
          </div>
        ))}
      </div>

      <div className="team-wrapper flex gap-6 justify-center mt-[40px]">
        {teamMember.slice(3).map((member, index) => (
          <div key={index}>
            <img src={member.image} alt={member.alt} />
            <h6 className="text-[#E1CFB4] text-[16px] md:text-[20px] mt-2 font-[500]">
              {member.name}
            </h6>
            <h4 className="text-[#F9FAFB] text-[16px] md:text-[18px] font-[600] mt-2">
              {member.title}
            </h4>
            <Link
              to={`/team/${member.id}`}
              className="text-[#D2CCB9] text-[12px] underline md:text-[14px] font-[400]"
            >
              Read Bio
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamBio;
