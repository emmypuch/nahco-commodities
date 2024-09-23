import { useEffect, useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-element");
    const newsletter = document.querySelector(".newsletter");

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

    if (newsletter) {
      observer.observe(newsletter);
    }

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      if (newsletter) {
        observer.unobserve(newsletter);
      }
    };
  }, []);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubscribe = async () => {
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      setErrorModal(true);
      return;
    }

    setErrorMessage("");

    try {
      const response = await fetch("https://api.greenbaq.ai/nahco/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccessModal(true);
        setEmail("");
      } else {
        setErrorMessage("Failed to subscribe. Please try again.");
        setErrorModal(true);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setErrorMessage("Error occurred. Please try again.");
      setErrorModal(true);
    }
  };

  return (
    <div className="newsletter">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 w-full h-full p-6 md:p-12">
        <h2 className="text-[#F0FDF4] fade-in-element text-[24px] md:text-[48px] font-[600] leading-tight text-center md:text-left">
          Subscribe to Our <br /> Newsletter
        </h2>
        <div className="newsletter-contact flex fade-in-element flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <div>
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#121C07] text-[#D0D5DD] rounded-[32px] h-[48px] w-full md:w-[287px] px-[15px] text-[12px] md:text-[14px] font-[400]"
            />
          </div>
          <div>
            <button
              onClick={handleSubscribe}
              className="text-[#166534] bg-[#FBFAF9] rounded-full h-[56px] w-[218px] flex items-center justify-center transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E4CAA4]"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {successModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSuccessModal(false)}>
              &times;
            </span>
            <p>Thank you for subscribing!</p>
          </div>
        </div>
      )}
      {errorModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setErrorModal(false)}>
              &times;
            </span>
            <p className="text-red-500">{errorMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
