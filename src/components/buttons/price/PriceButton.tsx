import React from "react";
import "./PriceButton.css";

interface PriceButtonProps {
  label: string;
  price: string;
  change: number;
  isPositive: boolean;
}

const PriceButton: React.FC<PriceButtonProps> = ({
  label,
  price,
  change,
  isPositive,
}) => {
  return (
    <div className={`price-button ${isPositive ? "positive" : "negative"}`}>
      <div className="flex justify-around">
        <span className="text-[#E1CFB4] text-[12px] md:text-[14px] font-[500]">
          {label}
        </span>
        <span className="text-[#FFFFFF] font-[700] text-[14px] md:text-[16px]">
          {price}
        </span>
        <span className={change >= 0 ? "positive-change" : "negative-change"}>
          {change}%
        </span>
      </div>
    </div>
  );
};

export default PriceButton;
