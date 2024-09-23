import React, { useEffect, useRef, useState } from "react";
import GroundnutImage from "../../assets/svg/metric-groundnut.svg";
import "./Metric.css";

interface MetricCardProps {
  title: string;
  subtitle: string;
  targetValue: number;
  format: (value: number) => string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  subtitle,
  targetValue,
  format,
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 10000;
      const increment = (targetValue / duration) * 10;

      const interval = setInterval(() => {
        setCurrentValue((prev) => {
          if (prev < targetValue) {
            return Math.min(prev + increment, targetValue);
          } else {
            clearInterval(interval);
            return targetValue;
          }
        });
      }, 10);
    }
  }, [isVisible, targetValue]);

  return (
    <div
      ref={cardRef}
      className="metric-card-bg bg-white fade-in-element shadow-lg border border-[#E5E7EB] rounded-[24px] w-[248px] px-[20px] py-[15px] h-full"
    >
      <p className="text-[#3B6D3E] text-center font-[500] text-[14px] md:text-[18px] mt-2">
        {title}
      </p>
      <p className="text-[#3B6D3E] text-center font-[500] text-[14px] md:text-[18px] mt-2">
        {subtitle}
      </p>
      <h2 className="text-[#3B6D3E] text-center font-[600] text-[24px] md:text-[36px] mt-4">
        {format ? format(currentValue) : Math.floor(currentValue)}
      </h2>
    </div>
  );
};

const Metric = () => {
  const formatValue = (val: number): string => {
    if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
    return Math.floor(val).toString();
  };

  return (
    <div className="px-[20px] md:px-[50px] pt-[20px] md:pt-[40px]">
      <div className="fade-in-element">
        <h2 className="text-[#166534] font-[700] text-[28px] md:text-[36px] text-center">
          Measuring Impact
        </h2>
        <p className="text-center font-[400] text-[14px] md:text-[20px] text-[#4B5563] mt-6">
          By tracking these metrics, we demonstrate our commitment to
          accountability, <br />
          effectiveness, and driving positive change in the global marketplace.
        </p>
      </div>

      <div className="flex justify-center items-center min-h-[70vh] md:min-h-screen">
        <div className="metric-card fade-in-element p-4 md:p-[24px]">
          <div className="metric-content flex flex-col md:flex-row justify-between gap-[40px]">
            <div className="numbers-container fade-in-element">
              <div className="metric-content-card mt-0 md:mt-0 flex flex-row justify-between gap-4">
                <MetricCard
                  title="Export Volume"
                  subtitle="(Tonnes/Month)"
                  targetValue={1500}
                  format={formatValue}
                />
                <MetricCard
                  title="Export Value"
                  subtitle="($)"
                  targetValue={5000000}
                  format={formatValue}
                />
              </div>

              <div className="metric-content-card flex fade-in-element flex-col md:flex-row justify-between gap-4 mt-4">
                <MetricCard
                  title="Logistics Efficiency"
                  subtitle="(Days/Shipment)"
                  targetValue={8}
                  format={formatValue}
                />
                <MetricCard
                  title="Processing Efficiency"
                  subtitle="(Units/Hour)"
                  targetValue={100}
                  format={formatValue}
                />
              </div>

              <div className="metric-content-card flex flex-col fade-in-element md:flex-row justify-between gap-4 mt-4">
                <MetricCard
                  title="Employee Productivity"
                  subtitle="(Units/Day)"
                  targetValue={50}
                  format={formatValue}
                />
                <MetricCard
                  title="Order Fulfillment Rate"
                  subtitle="(%)"
                  targetValue={98}
                  format={formatValue}
                />
              </div>
            </div>

            <div className="metric-img fade-in-element mt-6 md:mt-0">
              <img src={GroundnutImage} alt="Metric" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metric;
