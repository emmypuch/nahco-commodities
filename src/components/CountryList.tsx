import React from "react";

interface Country {
  img: string;
  name: string;
}

interface CountryListProps {
  region: string;
  countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ region, countries }) => {
  return (
    <div>
      <p className="text-[#B2B2B2] text-[16px] font-[500] ml-4">{region}</p>
      <ul>
        {countries.map((country, index) => (
          <li
            key={index}
            className="text-[#D5E5DA] flex gap-2 text-[14px] font-[500] list-none m-4"
          >
            <img src={country.img} alt={country.name} />
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
