
import { FaEnvelope, FaLinkedin, FaGithub, FaSuitcase, FaGraduationCap, FaCode } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope className="text-2xl text-white" />, label: "EMAIL", value: "ayushbisht.me@gmail.com", sub: null
  },
  {
    icon: <FaLinkedin className="text-2xl text-white" />, label: "LINKEDIN", value: "linkedin.com/in/ayushbisht8057", sub: "Professional profile"
  },
  {
    icon: <FaGithub className="text-2xl text-white" />, label: "GITHUB", value: "github.com/phyquie", sub: "Code portfolio"
  },
];

const availability = [
  {
    icon: <FaSuitcase className="text-2xl text-white" />, label: "Internship Availability", value: "All 2026 (June - December)", status: "AVAILABLE", color: "bg-green-600"
  },
  {
    icon: <FaGraduationCap className="text-2xl text-white" />, label: "Graduation", value: "Expected June 2026", status: "ON TRACK", color: "bg-green-700"
  },
  {
    icon: <FaCode className="text-2xl text-white" />, label: "Preferred Roles", value: "Software Development Engineering, Full Stack", status: "OPEN", color: "bg-green-800"
  },
];

const Page = () => {
  return (
    <div className="flex flex-col items-center w-full max-h-[90vh] text-white">
      <h1 className="text-5xl md:text-6xl font-extrabold mt-16 mb-2 text-center">Contact</h1>
      <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl">I&apos;m actively seeking internship opportunities for Summer 2026. I&apos;m passionate about software engineering, AI/ML, and full-stack development.</p>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center">
        {/* Contact Information */}
        <section className="flex-1 bg-black bg-opacity-80 border-2 border-white rounded-3xl shadow-lg p-8 flex flex-col items-center min-w-[320px] max-w-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Information</h2>
          <div className="flex flex-col gap-5 w-full">
            {contactInfo.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-[#232324] rounded-xl p-4 shadow w-full">
                <div className="bg-black bg-opacity-60 p-3 rounded-lg flex items-center justify-center">{item.icon}</div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-semibold tracking-widest">{item.label}</span>
                  <span className="text-base font-medium text-white">{item.value}</span>
                  {item.sub && <span className="text-xs text-gray-400">{item.sub}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Availability & Preferences */}
        <section className="flex-1 bg-black bg-opacity-80 border-2 border-white rounded-3xl shadow-lg p-8 flex flex-col items-center min-w-[320px] max-w-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Availability & Preferences</h2>
          <div className="flex flex-col gap-5 w-full">
            {availability.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-[#232324] rounded-xl p-4 shadow w-full">
                <div className="bg-black bg-opacity-60 p-3 rounded-lg flex items-center justify-center">{item.icon}</div>
                <div className="flex flex-col flex-1">
                  <span className="text-xs text-gray-400 font-semibold tracking-widest">{item.label}</span>
                  <span className="text-base font-medium text-white">{item.value}</span>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.color} ml-auto`}>{item.status}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;