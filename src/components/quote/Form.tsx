import { useEffect, useState } from "react";
import GroundnutImg from "../../assets/svg/groundnut.svg";
import BeansImg from "../../assets/svg/form-beans.svg";
import { useNavigate } from "react-router-dom";
import countries from "../../assets/data/countries.json";

const Form = () => {
  const navigate = useNavigate();

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
    countryCode: "NG",
    product: "",
    quantity: "",
    destination: "",
    shippingMethod: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const updateCountryCode = (phoneNumber: string) => {
    const numberWithoutPlus = phoneNumber.replace(/^\+/, "");
    const selectedCountry = countries.find((country) =>
      numberWithoutPlus.startsWith(country.dial_code.replace("+", ""))
    );

    if (selectedCountry) {
      setFormData((prevData) => ({
        ...prevData,
        countryCode: selectedCountry.dial_code,
      }));
    }
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = countries.find(
      (country) => country.code === e.target.value
    );

    if (selectedCountry) {
      setFormData((prevData) => ({
        ...prevData,
        countryCode: selectedCountry.dial_code,
      }));
    } else {
      console.error("Country not found");
    }
  };

  const validateForm = (): boolean => {
    const { firstName, lastName, email, phoneNumber, quantity } = formData;

    if (!firstName || !lastName || !email || !phoneNumber || !quantity) {
      setError("Please fill in all required fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (!/^\+?\d{1,15}$/.test(phoneNumber)) {
      setError("Please enter a valid phone number.");
      return false;
    }

    const quantityNumber = parseFloat(quantity);
    if (isNaN(quantityNumber) || quantityNumber < 112) {
      setError("Quantity must be a number and at least 112.");
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.greenbaq.ai/nahco/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit. Please try again.");
      }

      navigate("/inquiry");
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
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

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

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

            <div className="mb-6">
              <label className="block text-[#111827] text-[12px] md:text-[14px] font-[500]">
                Phone Number
              </label>
              <div className="relative">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleCountryChange}
                  className="absolute inset-y-0 left-0 border-[#D1D5DB] text-[#6B7280] bg-white rounded-l z-10"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.dial_code}
                    </option>
                  ))}
                </select>

                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="+234 201-555-0123"
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    handleChange(e);
                    updateCountryCode(e.target.value);
                  }}
                  className="pl-[8rem] pr-3 py-2 block w-full text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
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
                  <option value="product1">Dried Hibiscus Flowers</option>
                  <option value="product2">Raw Cashew Nuts</option>
                  <option value="product3">Natural Sesame Seeds</option>
                </select>
              </div>

              <div>
                <label className="block text-[#111827] text-[12px] md:text-[14px] font-[500]">
                  Quantity (112MT Minimum)
                </label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="1200 Metric Tonnes"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[#111827] text-[12px] md:text-[14px] font-[500]">
                Destination
              </label>
              <input
                type="text"
                name="destination"
                placeholder="Enter destination"
                value={formData.destination}
                onChange={handleChange}
                className="mt-1 p-2 block w-full text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#111827] text-[12px] md:text-[14px] font-[500]">
                Shipping Method
              </label>
              <select
                name="shippingMethod"
                value={formData.shippingMethod}
                onChange={handleChange}
                className="mt-1 p-2 block w-full text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 border-[#D1D5DB] focus:outline-none"
              >
                <option value="">Select method</option>
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
                className="mt-1 p-2 block w-full h-[179px] text-[#6B7280] text-[12px] md:text-[14px] font-[400] border border-[#D1D5DB] focus:outline-none"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#263C28] font-[500] text-white py-2 px-4 w-full rounded-full hover:bg-[#111827] transition disabled:bg-gray-400"
              >
                {isSubmitting ? "Submitting..." : "Request a Quote"}
              </button>
            </div>
          </form>
        </div>
        <div>
          <img
            src={BeansImg}
            alt="Beans"
            className="hidden md:block fade-in-element"
          />
          <img
            src={GroundnutImg}
            alt="Groundnut"
            className="hidden md:block fade-in-element"
          />
        </div>
      </div>
    </>
  );
};

export default Form;
