import { useEffect, useState } from "react";
import GroundnutImg from "../../assets/svg/groundnut.svg";
import BeansImg from "../../assets/svg/form-beans.svg";
import { Link } from "react-router-dom";

const Form = () => {
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
      <div className="quote-form-wrapper flex justify-center items-center min-h-screen gap-4">
        <div>
          <form
            onSubmit={handleSubmit}
            className="quote-form bg-white fade-in-element p-6 w-full md:w-[500px] h-[600px] rounded-lg shadow-md mt-8 overflow-y-auto"
          >
            <p className="text-[10px] md:text-[12px] font-[400] text-[#6B7280] mb-4">
              Your privacy is our priority. We only use your information to
              provide your quote
            </p>
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
                  className="mt-1 p-2 block  w-full text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
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
              <label className="block text-[#111827]   text-[12px] md:text-[14px] font-[500]">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full  text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block  text-[#111827] text-[14px] font-[500]">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter your company name"
                value={formData.companyName}
                onChange={handleChange}
                className="mt-1 p-2 block w-full   text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#111827]   text-[12px] md:text-[14px] font-[500]">
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

            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#111827] text-[12px] md:text-[14px] font-[500]">
                  Product
                </label>
                <select
                  name="product"
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
                  required
                >
                  <option value="" disabled>
                    Select product
                  </option>
                  <option value="product1">Product 1</option>
                  <option value="product2">Product 2</option>
                  <option value="product3">Product 3</option>
                </select>
              </div>

              <div>
                <label className="block text-[#111827] text-[11px] md:text-[14px] font-[500]">
                  Quantity (112MT Minimum)
                </label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="1200 Metric Tonnes"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full   text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[#111827]  text-[12px] md:text-[14px] font-[500]">
                Destination
              </label>
              <input
                type="text"
                name="destination"
                placeholder="Select Location"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 p-2 block w-full   text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#111827] text-[12px] md:text-[14px] font-[500]">
                Desired Shipping Method
              </label>
              <select
                name="destination"
                onChange={handleChange}
                className="mt-1 p-2 block w-full text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
                required
              >
                <option value="" disabled>
                  Select Method
                </option>
                <option value="air">Air</option>
                <option value="sea">Sea</option>
                <option value="land">Land</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-[#111827] text-[12px] md:text-[14px] font-[500]">
                Any Special Requirements?
              </label>
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 block w-full h-[179px]  text-[#6B7280] text-[12px] md:text-[14px] font-[400] border border-[#D1D5DB] focus:outline-none"
              />
            </div>

            <Link
              to="/inquiry"
              type="submit"
              className="bg-[#263C28] font-[500] text-white py-2 px-4 w-full rounded-full hover:bg-[#111827] transition"
            >
              Request a Quote
            </Link>
          </form>
        </div>
        <div className="quote-img hidden md:block">
          <img src={GroundnutImg} alt="" className="w-[400px]" />
          <img src={BeansImg} alt="" className="w-[400px] mt-4" />
        </div>
      </div>
    </>
  );
};

export default Form;
