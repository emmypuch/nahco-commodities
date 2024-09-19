import React from "react";
import PriceButton from "../buttons/price/PriceButton";
import "../buttons/price/PriceButton.css";

const LatestPrices: React.FC = () => {
  const prices = [
    {
      label: "Raw Cashew Nuts",
      price: "N5000/KG",
      change: 2,
      isPositive: true,
    },
    { label: "Hibiscus", price: "N5000/KG", change: +2, isPositive: true },
    { label: "Sesame Seeds", price: "N5000/KG", change: -2, isPositive: false },
  ];

  return (
    <div className="latest-prices">
      <h2 className="text-[#C8C0B4] font-[600] text-[16px]">Latest Prices</h2>
      <div className="mt-4">
        {prices.map((priceItem, index) => (
          <PriceButton
            key={index}
            label={priceItem.label}
            price={priceItem.price}
            change={priceItem.change}
            isPositive={priceItem.isPositive}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestPrices;
