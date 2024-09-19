import CEO from "../assets/svg/ceo.svg";
import Director from "../assets/svg/director.svg";
import DirectorTwo from "../assets/svg/directorr.svg";
import DirectorThree from "../assets/svg/director3.svg";
import DirectorFour from "../assets/svg/director4.svg";
import DirectorFive from "../assets/svg/director5.svg";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  alt: string;
  bio: string[]; 
}

const teamMember: TeamMember[] = [
  {
    id: "Ijeoma Ezenwa",
    name: "Ijeoma Ezenwa",
    title: "Chief Executive Officer",
    image: CEO,
    alt: "CEO",
    bio: [
      `A distinguished legal professional with an LL.M in International Arbitration and Business Law from Erasmus University Rotterdam, Ijeoma has over a decade of experience in corporate and commercial law, dispute resolution, regulatory compliance, and contract management.`,
      `Her leadership at NAHCO Commodities Limited extends beyond her legal expertise, as she drives strategic initiatives aimed at positioning the company as a key player in the dry commodities market. Ijeoma’s commitment to operational excellence, regulatory adherence, and business growth has made her an integral figure in the organization.`,
      `Previously, she served as the Head of Legal Services and Company Secretariat at NAHCO PLC, where she was recognized for her ability to safeguard the company’s interests in the dynamic aviation industry.`
    ]
  },
  {
    id: "Mr. Salman Oluwatoyin Taofeeq",
    name: "Mr. Salman Oluwatoyin Taofeeq",
    title: "Chief Executive Officer",
    image: Director,
    alt: "Director",
    bio: [
      `As the Managing Partner at Canary Legal, Salman Oluwatoyin Taofeeq leads a foremost corporate and commercial law firm renowned for its expertise. He is at the helm of the firm’s corporate governance, secretarial services, and legal advisory divisions. His specialization in Foreign Investment, Project Finance, and Public-Private Partnerships (PPP) enables him to provide clients with strategic insights, both locally and globally, ensuring seamless navigation through complex legal terrains.`,
      `Taofeeq is a legal luminary with an LLB (Hons) from the University of Ilorin, Nigeria, and a Barrister at Law degree from the Nigerian Law School. His academic journey continued in the UK, where he earned an LLM from the University of East Anglia, Norwich. His membership in elite organizations like the Nigerian Bar Association, International Bar Association, Chartered Institute of Arbitrators (UK), and Institute of Directors (IOD) reflects his commitment to legal excellence.`,
      `Salman’s career story includes pivotal roles at Rosehill Group Limited, where he served as the Head of Legal and Compliance and later as Managing Director. These roles have highlighted his remarkable leadership acumen and strategic foresight.`,
      `Beyond his duties at Canary Legal, Salman contributes his seasoned expertise to the boards of Asokoro Island, Sycor Private Investment Limited, and Central Cement and Logistics (CENCEM), fostering growth and prosperity in various industries.`
    ]
  },
  {
    id: "Mr. Tajudeen Shobayo",
    name: "Mr. Tajudeen Shobayo",
    title: "Director",
    image: DirectorTwo,
    alt: "Director Two",
    bio: [
      `Mr. Tajudeen Shobayo is an astute professional with over 38 years of experience gathered from various sectors, including oil & gas, education, real estate, and agriculture, operating at both management and board levels.`,
      `He has a strong foundation in corporate finance and commercial expertise. His extensive experience in finance, decision analysis, and strategic planning, in addition to his adeptness in negotiation and stakeholder management, has earned deserved recognition in his industry.`,
      `Shobayo, an alumnus of the University of Liverpool, UK, and a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN), has cultivated a distinguished career marked by continuous learning and professional development. Throughout this journey, he has pursued numerous professional courses in Economics and Valuation, Project Management, Contract Management, and Strategic Cost Leadership, among others, across Nigeria, Netherlands, UK, and the United States.`
    ]
  },
  {
    id: "Revd. Victor Abimbola Olaiya",
    name: "Revd. Victor Abimbola Olaiya",
    title: "Director",
    image: DirectorThree,
    alt: "Director Three",
    bio: [
      `Reverend Victor Abimbola Olaiya, born in 1956, is a distinguished professional with a diverse educational background and extensive experience in the oil and gas industry. He holds an Ordinary National Diploma in Mechanical Engineering from Yaba College of Technology (1977), a Bachelor of Science degree in Mechanical Engineering from the University of Ife (1981), and a Master of Business Administration from the University of Lagos in 1988.`,
      `Reverend Olaiya is a well-noted member of several professional bodies, including the Society of Petroleum Engineers (SPE), the Nigerian Society of Engineers (NSE), and the Nigerian Institute of Management (NIM). He further expanded his knowledge base by obtaining a Bachelor of Theology degree from the Baptist College of Theology, Lagos.`,
      `His illustrious career spanning over three decades in the oil and gas sector includes roles such as Facilities Engineer, Drilling Engineering and Operations, and General Manager, Venture Relations Department of the Upstream Affiliates of ExxonMobil.`,
      `In addition to his corporate accomplishments, Reverend Olaiya has made significant contributions to the Society of Petroleum Engineers (SPE), serving as the Chairman of Lagos Section 61 in 1988. His commitment to service extends beyond the corporate world, as evidenced by his tenure as the pastor of New Insight Baptist Church, Ogudu, Lagos, from which he retired in October 2021 after nearly seven years of dedicated service.`
    ]
  },
  {
    id: "Prince Saheed Lasisi",
    name: "Prince Saheed Lasisi",
    title: "Director",
    image: DirectorFour,
    alt: "Director Four",
    bio: [
      `Prince Saheed Lasisi brings a distinguished record of leadership and expertise to the NACHO. His career, spanning over 17 years, is marked by a strong foundation in accounting, strategic planning, and a commitment to innovation.`,
      `Lasisi’s influence extends beyond the realm of pure finance. He has established himself as a leader across diverse industries, including maritime and oil & gas sectors. His previous role as Group General Manager of Business Development & Strategic Planning at SIFAX GROUP exemplifies his ability to drive growth and implement innovative strategies.`,
      `Lasisi’s dedication extends beyond corporate success. He is a passionate advocate for education and empowerment, actively participating in seminars and training programs both domestically and internationally. His areas of expertise in bank risk analysis and corporate finance contribute significantly to the development of knowledge within these fields.`,
      `A noteworthy accomplishment of Lasisi’s career was his leadership of the transition team at Skyway Aviation Handling Company Limited (SAHCOL). His contribution to the financial restructuring and smooth integration of the Company into SIFAX GROUP stands as a testament to his strategic vision and leadership capabilities.`,
      `Lasisi holds a bachelor’s degree in Accounting and a subsequent master’s degree from the prestigious University of Lagos. His expertise is further bolstered by his Fellowship with the Institute of Chartered Accountants of Nigeria, ICAN.`
    ]
  },
  {
    id: "Mr. Olumuyiwa Olumekun",
    name: "Mr. Olumuyiwa Olumekun",
    title: "Director",
    image: DirectorFive,
    alt: "Director Five",
    bio: [
      `Mr. Olumuyiwa Olumekun is a graduate of the University of Ibadan and an alumnus of Lagos Business School (LBS), having attended the Chief Executive Programme and the Advanced Management Programme at different times. He also attended IESE Business School in Spain and Harvard.`,
      `A member of the Institute of Directors (IoD), Olumekun was Executive Director at Red Star Express, one of the frontline courier firms in Nigeria. At Red Star Express, he provided support for the CEO and directed Sales, Marketing, Operations, Strategy, Business Development, Customer Service, and Information Technology at different times. He also served as the Acting Managing Director of the organization and was a member of the Board of Directors for 10 years.`,
      `He managed clients that included banks, FMCGs, oil and gas, aviation, logistics, and public sectors in his illustrious career. Olumekun has, for more than 25 years, mentored, coached, and advised executives and managers as they focused on business building and career development. He was Group Executive Director at NAHCO Plc from 2019 to 2022.`
    ]
  }
];

export default teamMember;
