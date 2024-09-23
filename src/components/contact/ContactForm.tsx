import { useEffect, useState } from "react";
import BackButton from "../buttons/back-button/BackButton";
import "./ContactHero.css";
import countries from "../../assets/data/countries.json";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  message: string;
  countryCode: string;
}

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-[16px] text-[#263C28] font-bold">Success!</h2>
      <p className="text-[14px] font-[400] text-[#6B7280]">
        Your message has been sent successfully.
      </p>
      <button
        onClick={onClose}
        className="mt-4 bg-[#263C28] text-white text-[12px] py-2 px-4 rounded-full"
      >
        Close
      </button>
    </div>
  </div>
);

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

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    message: "",
    countryCode: "NG",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [showModal, setShowModal] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.toLowerCase(),
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!/^[a-z]+$/.test(formData.firstName)) {
      newErrors.firstName =
        "First name should not contain numbers or uppercase letters.";
    }
    if (!/^[a-z]+$/.test(formData.lastName)) {
      newErrors.lastName =
        "Last name should not contain numbers or uppercase letters.";
    }

    if (!/^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/.test(formData.email)) {
      newErrors.email =
        "Email should not start with a digit and must be in lowercase.";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
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
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        phoneNumber: "",
        message: "",
        countryCode: "",
      });
      setShowModal(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="fade-in-element px-[30px] py-[30px]">
        <BackButton />
      </div>
      <div className="flex items-center justify-center min-h-screen">
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
                  className={`mt-1 p-2 block w-full text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 ${
                    errors.firstName ? "border-red-500" : "border-[#D1D5DB]"
                  } focus:outline-none`}
                  required
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs">{errors.firstName}</p>
                )}
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
                  className={`mt-1 p-2 block w-full text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 ${
                    errors.lastName ? "border-red-500" : "border-[#D1D5DB]"
                  } focus:outline-none`}
                  required
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs">{errors.lastName}</p>
                )}
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
                className={`mt-1 p-2 block w-full text-[#6B7280] text-[12px] md:text-[14px] font-[400] border-b-2 ${
                  errors.email ? "border-red-500" : "border-[#D1D5DB]"
                } focus:outline-none`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
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
              By pressing the submit button, I agree to NAHCO contacting me by
              email and/or phone to share opportunities exclusively available to
              Select or Enterprise customers. I also understand that any
              information I’ve shared in this form is subject to NAHCO’s Privacy
              Policy.
            </p>
            <button
              type="submit"
              className="bg-[#263C28] fade-in-element font-[500] text-white py-2 px-4 w-full rounded-full hover:bg-[#111827] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {showModal && <SuccessModal onClose={closeModal} />}
    </>
  );
};

export default ContactForm;
