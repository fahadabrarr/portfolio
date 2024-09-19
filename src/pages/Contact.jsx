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

const contact = () => {
  return (
    <section className="max-w-screen-2xl mt-12 md:mt-16 w-full mx-auto px-4">
      <div className=" flex flex-col items-center justify-center">
        <div className="flex flex-col px-10 pt-10 rounded-xl items-center justify-center">
          <h3 className="text-4xl text-accent-hover">{`Let's work together`}</h3>
        </div>
        <div className="flex flex-col w-full xl:gap-8 lg:flex-row  mx-auto justify-items-center pt-10">
          <div className="md:h-[54%] w-full lg:w-2/3  order-2 lg:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#24272c] rounded-xl">
              <h3 className="text-4xl text-accent-hover">Send Message</h3>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <input
                  type="fastname"
                  placeholder="Fast Name"
                  className="flex h-[48px] rounded-md border-white/10 focus:border-accent-hover font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                />
                <input
                  type="lastname"
                  placeholder="Last Name"
                  className="flex h-[48px]  rounded-md border-white/10 focus:border-accent-hover font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="flex h-[48px] rounded-md border-white/10 focus:border-accent-hover font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                />
                <input
                  type="phone"
                  placeholder="Phone"
                  className="flex h-[48px] rounded-md border-white/10 focus:border-accent-hover font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                />
              </div>
              <div>
                <textarea className="flex min-h-[80px] w-full rounded-md border border-white/10 bg-primary px-4 py-5 placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-hover focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"></textarea>
              </div>

              <button className="w-full rounded-md border border-white/10 bg-primary px-4 py-3 hover:bg-hover hover:font-semibold transition-opacity duration-500">
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div className="flex-1 items-center w-full lg:w-1/3 justify-between md:h-[54%] order-1 pt-5 xl:order-none mb-8 md:mb-0">
            <div className="flex justify-between flex-col items-center font-extrabold">
              <img
                src={"service.svg"}
                alt=""
                className="rounded-full w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] mx-auto mix-blend-lighten p-5"
              />
              <div className="flex-1 items-center justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
