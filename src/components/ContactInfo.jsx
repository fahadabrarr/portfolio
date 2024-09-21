import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+088)-01723 565 656",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "fahad@gamil.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Mirpur-1, Dhaka",
  },
];

const ContactInfo = () => {
  return (
    <div className="flex justify-between flex-col items-center font-extrabold md:mb-0">
      <div className="flex flex-col items-center justify-center">
        <img
          src="service.svg"
          alt=""
          className=" rounded-lg w-[350px] h-[350px] mx-auto mix-blend-lighten"
        />
        <div className="border-[3px] border-text_highlight w-full"></div>
        <h1 className="text-text_highlight font-thin px-5 pb-5 text-2xl mt-2">
          {" "}
          {` ----- lets work together -----`}{" "}
        </h1>
      </div>
    </div>
  );
};

export default ContactInfo;
