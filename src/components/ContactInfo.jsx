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
      <img
        src={"service.svg"}
        alt=""
        className="rounded-lg w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] mx-auto mix-blend-lighten p-5"
      />

      <div className="flex-1 items-center pb-5 justify-center">
        {info.map((item, idx) => {
          return (
            <div
              className="flex flex-row gap-1 items-center justify-start"
              key={idx}
            >
              <div className="items-center justify-center min-w-[100px] font-thin  px-4 py-1">
                {item.title}
              </div>
              <div className="items-center justify-center font-serif font-thin min-w-[100px] px-4 py-1">
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
