import { useEffect, useState } from "react";
import BackButton from "../buttons/BackButton";
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
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-[30px]">
      <div className="px-[50px] py-[30px]">
        <div className="fade-in-element">
          <BackButton />
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 w-full md:w-[800px] h-[771px] rounded-lg shadow-md mt-8 overflow-y-auto"
        >
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block fade-in-element text-[#111827] text-[12px] md:text-[14px] font-[500]">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 block fade-in-element  w-full text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block fade-in-element  text-[#111827] text-[12px] md:text-[14px] font-[500]">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 block w-full fade-in-element  text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[#111827] fade-in-element  text-[12px] md:text-[14px] font-[500]">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full fade-in-element  text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block fade-in-element  text-[#111827] text-[14px] font-[500]">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="Enter your company name"
              value={formData.companyName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full fade-in-element  text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#111827] fade-in-element  text-[12px] md:text-[14px] font-[500]">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="+234 201-555-0123"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 p-2 block w-full fade-in-element  text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#111827] fade-in-element  text-[12px] md:text-[14px] font-[500]">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 block w-full h-[179px] fade-in-element  text-[#6B7280] text-[12px] md:text-[14px] font-[400] border border-[#D1D5DB] focus:outline-none"
            />
          </div>

          <p className="text-[10px] md:text-[12px] font-[400] fade-in-element  text-[#6B7280] mb-4">
            By pressing the submit button, I agree to Rollpay contacting me by
            email and/or phone to share opportunities exclusively available to
            Select or Enterprise customers. I also understand that any
            information I’ve shared in this form is subject to NAHCO’s Privacy
            Policy.
          </p>

          <button
            type="submit"
            className="bg-[#263C28] fade-in-element  text-white py-2 px-4 w-full rounded-full hover:bg-[#111827] transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
