import "./Metric.css";
import GroundnutImage from "../../assets/svg/metric-groundnut.svg";
import { useEffect } from "react";

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
        <div className="metric-card fade-in-element p-4 md:p-[24px]">
          <div className="metric-content flex flex-col md:flex-row justify-between gap-[40px]">
            <div className="numbers-container fade-in-element">
              <div className="metric-content-card mt-0 md:mt-4 flex flex-row justify-between gap-4">
                <div className="metric-card-bg bg-white fade-in-element shadow-lg border border-[#E5E7EB] rounded-[24px] w-[248px] px-[20px] py-[15px] h-full">
                  <div className="">
                    <p className="text-[#3B6D3E] font-[500] text-[14px] md:text-[18px] mt-2">
                      Export Volume
                    </p>
                    <p className="text-[#3B6D3E] font-[500] text-[14px] md:text-[18px] mt-2">
                      (Tonnes/Month)
                    </p>
                    <h2 className="text-[#3B6D3E] font-[600] text-[24px] md:text-[36px] mt-4">
                      1500
                    </h2>
                  </div>
                </div>
                <div className="metric-card-bg bg-white fade-in-element shadow-lg border border-[#E5E7EB] rounded-[24px] w-[248px] px-[20px] py-[15px] h-full">
                  <div className="">
                    <p className="text-[#3B6D3E] font-[500] text-[14px] md:text-[18px] mt-2">
                      Export Value
                    </p>
                    <p className="text-[#3B6D3E] font-[500] text-[14px] md:text-[18px] mt-2">
                      ($)
                    </p>
                    <h2 className="text-[#3B6D3E] font-[600] text-[24px] md:text-[36px] mt-4">
                      5M
                    </h2>
                  </div>
                </div>
              </div>

              <div className="metric-content-card flex fade-in-element flex-col md:flex md:flex-row justify-between gap-4 mt-4">
                <div className="metric-card-bg bg-white shadow-lg border border-[#E5E7EB] rounded-[24px] w-[248px] px-[20px] py-[15px] h-full">
                  <div className="">
                    <p className="text-[#3B6D3E] font-[500] text-[14px] md:text-[18px] mt-2">
                      Logistics Efficiency
                    </p>
                    <p className="text-[#3B6D3E] font-[500] text-[14px] md:text-[18px] mt-2">
                      (Days/Shipment)
                    </p>
                    <h2 className="text-[#3B6D3E] font-[600] text-[24px] md:text-[36px] mt-4">
                      8
                    </h2>
                  </div>
                </div>
                <div className="metric-card-bg bg-white fade-in-element shadow-lg border border-[#E5E7EB] rounded-[24px] w-[248px] px-[20px] py-[15px] h-full">
                  <div className="">
                    <p className="text-[#3B6D3E] font-[500] text-[14px] md:text-[18px] mt-2">
                      Processing Efficiency
                    </p>
                    <p className="text-[#3B6D3E] font-[500] text-[14px] md:text-[18px] mt-2">
                      (Units/Hour)
                    </p>
                    <h2 className="text-[#3B6D3E] font-[600] text-[24px] md:text-[36px] mt-4">
                      100
                    </h2>
                  </div>
                </div>
              </div>

              <div className="metric-content-card flex flex-col fade-in-element md:flex md:flex-row justify-between gap-4 mt-4">
                <div className="metric-card-bg bg-white shadow-lg border border-[#E5E7EB] rounded-[24px] w-[248px] px-[20px] py-[15px] h-full">
                  <div className="">
                    <p className="text-[#3B6D3E] font-[500] text-[14px] md:text-[18px] mt-2">
                      Employee Productivity
                    </p>
                    <p className="text-[#3B6D3E] font-[500] text-[14px] md:text-[18px] mt-2">
                      (Units/Day)
                    </p>
                    <h2 className="text-[#3B6D3E] font-[600] text-[24px] md:text-[36px] mt-4">
                      50
                    </h2>
                  </div>
                </div>
                <div className="metric-card-bg bg-white fade-in-element shadow-lg border border-[#E5E7EB] rounded-[24px] w-[248px] px-[20px] py-[15px] h-full">
                  <div className="">
                    <p className="text-[#3B6D3E] font-[500] text-[14px] md:text-[18px] mt-2">
                      Order Fulfillment Rate
                    </p>
                    <p className="text-[#3B6D3E] font-[500] text-[14px] md:text-[18px] mt-2">
                      (%)
                    </p>
                    <h2 className="text-[#3B6D3E] font-[600] text-[24px] md:text-[36px] mt-4">
                      98
                    </h2>
                  </div>
                </div>
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
