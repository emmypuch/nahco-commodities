import "./Metric.css";
import GroundnutImage from "../../assets/svg/metric-groundnut.svg";
import { useEffect } from "react";

interface MetricItemProps {
  title: string;
  subtitle: string;
  value: string | number;
}

const MetricItem: React.FC<MetricItemProps> = ({ title, subtitle, value }) => (
  <div className="metric-item fade-in-element">
    <p className="text-[#3B6D3E] font-[500] text-[14px] md:text-[18px] text-center">
      {title}
    </p>
    <p className="text-[#3B6D3E] font-[500] text-[14px] md:text-[18px] text-center">
      {subtitle}
    </p>
    <p className="text-[#3B6D3E] font-[600] text-[24px] md:text-[36px] text-center mt-4">
      {value}
    </p>
  </div>
);

const Metric = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-element");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="px-[20px] md:px-[50px] pt-[20px] md:pt-[40px]">
      <div className="fade-in-element">
        <h2 className="text-[#166534] font-[700] text-[28px] md:text-[36px] text-center">
          Measuring Impact
        </h2>
        <p className="text-center font-[400] text-[14px] md:text-[20px] text-[#4B5563] mt-6">
          By tracking these metrics, we demonstrate our commitment to
          accountability, <br /> effectiveness, and driving positive change in
          the global marketplace.
        </p>
      </div>
      <div className="flex justify-center items-center min-h-[70vh] md:min-h-screen">
        <div className="metric-card fade-in-element md:h-[617px] w-full max-w-[1200px] rounded-[24px] border border-[#E5E7EB] p-4 md:p-[24px]">
          <div className="metric-content flex flex-col md:flex-row justify-between gap-6">
            <div className="numbers-container fade-in-element">
              <div className="flex flex-col sm:flex-row justify-between gap-6">
                <MetricItem
                  title="Export Volume"
                  subtitle="(Tonnes/Month)"
                  value="1500"
                />
                <MetricItem title="Export Value" subtitle="($)" value="5M" />
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-6 mt-3 md:mt-6">
                <MetricItem
                  title="Logistics Efficiency"
                  subtitle="(Days/Shipment)"
                  value="8"
                />
                <MetricItem
                  title="Processing Efficiency"
                  subtitle="(Units/Hour)"
                  value="100"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-6 mt-[20px] md:mt-6">
                <MetricItem
                  title="Employee Productivity"
                  subtitle="(Units/Day)"
                  value="50"
                />
                <MetricItem
                  title="Order Fulfillment Rate"
                  subtitle="(%)"
                  value="98%"
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
