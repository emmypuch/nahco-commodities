import { Link } from "react-router-dom";
import CEO from "../../assets/svg/ceo.svg";
import Director from "../../assets/svg/director.svg";
import DirectorTwo from "../../assets/svg/director2.svg";
import DirectorThree from "../../assets/svg/director3.svg";
import DirectorFour from "../../assets/svg/director4.svg";
import DirectorFive from "../../assets/svg/director5.svg";

const teamMembers = [
  {
    id: "Ijeoma Ezenwa",
    name: "Ijeoma Ezenwa",
    title: "CEO",
    image: CEO,
    alt: "CEO",
  },
  {
    id: "Mr. Salman Oluwatoyin Taofeeq",
    name: "Mr. Salman Oluwatoyin Taofeeq",
    title: "Director",
    image: Director,
    alt: "Director",
  },
  {
    id: "Mr. Tajudeen Shobayo",
    name: "Mr. Tajudeen Shobayo",
    title: "Director",
    image: DirectorTwo,
    alt: "Director Two",
  },
  {
    id: "Revd. Victor Abimbola Olaiya",
    name: "Revd. Victor Abimbola Olaiya",
    title: "Director",
    image: DirectorThree,
    alt: "Director Three",
  },
  {
    id: "Prince Saheed Lasisi",
    name: "Prince Saheed Lasisi",
    title: "Director",
    image: DirectorFour,
    alt: "Director Four",
  },
  {
    id: "Mr. Oluwamuyiwa Olumekun",
    name: "Mr. Oluwamuyiwa Olumekun",
    title: "Director",
    image: DirectorFive,
    alt: "Director Five",
  },
];

const TeamBio = () => {
  return (
    <>
      <div className="team-wrapper flex gap-6 justify-center mt-[40px]">
        {teamMembers.slice(0, 3).map((member, index) => (
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
        {teamMembers.slice(3).map((member, index) => (
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
