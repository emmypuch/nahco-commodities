import { useParams } from "react-router-dom";
import teamMember from "../../types/teamMember";
import BackBtn from "../../components/buttons/back-button/BackBtn";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const TeamBioDetail = () => {
  const { id } = useParams();
  const member = teamMember.find((member) => member.id === id);

  if (!member) {
    return <p>Member not found</p>;
  }

  return (
    <>
      <Header />
      <div className="bg-[#263C28] px-[20px] md:px-[50px] py-[50px]">
        <BackBtn />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-6 md:gap-16 p-6">
          <div className="w-full md:w-auto md:flex-shrink-0">
            <img
              src={member.image}
              alt={member.alt}
              className="w-full h-auto md:w-[300px] md:h-[400px] object-cover rounded-md"
            />
          </div>
          <div className="w-full md:w-[60%] text-left">
            <p className="text-[#E1CFB4] font-[500] text-[16px] md:text-[20px] mt-4">
              {member.name}
            </p>
            <h5 className="text-[#FFFBEB] font-[500] text-[18px] md:text-[24px] mt-2">
              {member.title}
            </h5>
            {member.bio.map((paragraph: string, index: number) => (
              <p
                key={index}
                className="text-[#E1CFB4] font-[400] text-justify text-[14px] md:text-[16px] mt-[20px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamBioDetail;
