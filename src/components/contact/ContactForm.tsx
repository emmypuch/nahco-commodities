import { useEffect, useState } from "react";
import BackButton from "../back-button/BackButton";
import "./ContactHero.css";

const ContactForm = () => {
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    message: "",
    countryCode: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCountryChange = (e: any) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      countryCode: value,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="fade-in-element bg-[#FBFAF9] px-[30px] py-[30px]">
        <BackButton />
      </div>
      <div className="flex items-center bg-[#FBFAF9] justify-center min-h-screen">
        <div className="px-[20px] md:px-[50px] py-[15px] md:py-[20px]">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 w-full md:w-[500px] fade-in-element scrollable-content overflow-x-auto max-h-[600px] rounded-lg shadow-md mt-4 overflow-y-auto"
          >
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#111827] text-[12px] md:text-[14px] font-[500]">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-[#111827] text-[12px] md:text-[14px] font-[500]">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[#111827] text-[12px] md:text-[14px] font-[500]">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#111827] text-[14px] font-[500]">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter your company name"
                value={formData.companyName}
                onChange={handleChange}
                className="mt-1 p-2 block w-full text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
              />
            </div>

            <div className="mb-6 relative">
              <label className="block text-[#111827] text-[12px] md:text-[14px] font-[500]">
                Phone Number
              </label>
              <div className="relative">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleCountryChange}
                  className="absolute inset-y-0 left-0  border-[#D1D5DB] text-[#6B7280] bg-white rounded-l z-10"
                >
                  <option value="NG" data-flag="🇳🇬">
                    🇳🇬 NG
                  </option>
                  <option value="US" data-flag="🇺🇸">
                    🇺🇸 US
                  </option>
                </select>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="+234 201-555-0123"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="pl-16 pr-3 py-2 block w-full text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[#111827] text-[12px] md:text-[14px] font-[500]">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 block w-full h-[179px] text-[#6B7280] text-[12px] md:text-[14px] font-[400] border border-[#D1D5DB] focus:outline-none"
              />
            </div>

            <p className="text-[10px] md:text-[12px] font-[400] fade-in-element text-[#6B7280] mb-4">
              By pressing the submit button, I agree to Rollpay contacting me by
              email and/or phone to share opportunities exclusively available to
              Select or Enterprise customers. I also understand that any
              information I’ve shared in this form is subject to NAHCO’s Privacy
              Policy.
            </p>

            <button
              type="submit"
              className="bg-[#263C28] fade-in-element font-[500] text-white py-2 px-4 w-full rounded-full hover:bg-[#111827] transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
