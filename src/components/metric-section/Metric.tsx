import "./Metric.css";
import MetricImage from "../../assets/svg/metric-img.svg";
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
      {
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="px-[50px] pt-[40px]">
        <div className="fade-in-element">
          <h2 className="text-[#166534] font-[700] text-[36px] text-center">
            Measuring Impact
          </h2>
          <p className="text-center font-[400] text-[16px] md:text-[20px] text-[#4B5563] mt-6">
            By tracking these metrics, we demonstrate our commitment to
            accountability, <br /> effectiveness, and driving positive change in
            the global marketplace.
          </p>
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <div className="metric-card fade-in-element h-[617px] w-[1200px] rounded-[24px] border border-[#E5E7EB] p-[24px]">
            <div className="metric-content flex justify-between">
              <div className="numbers-container fade-in-element">
                <div className="flex justify-between gap-6">
                  <div>
                    <p className="text-[#3B6D3E] font-[500] text-[18px] text-center">
                      Export Volume
                    </p>
                    <p className="text-[#3B6D3E] font-[500] text-[18px] text-center">
                      (Tonnes/Month)
                    </p>
                    <p className="text-[#3B6D3E] font-[600] text-[36px] text-center mt-4">
                      1500
                    </p>
                  </div>
                  <div>
                    <p className="text-[#3B6D3E] font-[500] text-[18px]">
                      Export Value
                    </p>
                    <p className="text-[#3B6D3E] font-[500] text-[18px] text-center">
                      ($)
                    </p>
                    <p className="text-[#3B6D3E] font-[600] text-[36px] text-center mt-4">
                      30M
                    </p>
                  </div>
                </div>
                <div className="flex justify-between gap-6 fade-in-element">
                  <div>
                    <p className="text-[#3B6D3E] font-[500] text-[18px]">
                      Logistics Efficiency
                    </p>
                    <p className="text-[#3B6D3E] font-[500] text-[18px] text-center">
                      (Days/Shipment)
                    </p>
                    <p className="text-[#3B6D3E] font-[600] text-[36px] text-center mt-4">
                      8
                    </p>
                  </div>
                  <div className="ml-0 md:ml-[30px]">
                    <p className="text-[#3B6D3E] font-[500] text-[18px] text-center">
                      Processing Efficiency
                    </p>
                    <p className="text-[#3B6D3E] font-[500] text-[18px] text-center">
                      (Units/Hour)
                    </p>
                    <p className="text-[#3B6D3E] font-[600] text-[36px] mt-4 text-center">
                      100
                    </p>
                  </div>
                </div>
                <div className="flex justify-between gap-6 fade-in-element">
                  <div>
                    <p className="text-[#3B6D3E] font-[500] text-[18px]">
                      Employee Productivity
                    </p>
                    <p className="text-[#3B6D3E] font-[500] text-[18px] text-center">
                      (Units/Day)
                    </p>
                    <p className="text-[#3B6D3E] font-[600] text-[36px] text-center mt-4">
                      50
                    </p>
                  </div>
                  <div className="ml-0 md:ml-[30px]">
                    <p className="text-[#3B6D3E] font-[500] text-[18px]">
                      Order Fulfillment Rate
                    </p>
                    <p className="text-[#3B6D3E] font-[500] text-[18px] text-center">
                      (%)
                    </p>
                    <p className="text-[#3B6D3E] font-[600] text-[36px] text-center mt-4">
                      98%
                    </p>
                  </div>
                </div>
              </div>
              <div className="metric-img fade-in-element">
                <img src={MetricImage} alt="Metric" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Metric;
