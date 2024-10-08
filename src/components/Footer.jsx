import Social from "./Socials";
const Footer = () => {
  return (
    <footer className="flex left-0 w-full  items-center z-40 bg-[#1E201E] pb-10">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center mt-8 flex-1 flex-col md:flex-row ">
        <div className="">
          <img
            src="sale_flag.svg"
            alt=" "
            className="w-[150px] h-[100px] mx-auto mb-2 md:opacity-15"
          />
        </div>
        <div className="text-center flex-col gap-3  items-center justify-between">
          <Social />
          <p className="gap-3 py-3">@ 2024 all rights reserved</p>
          <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li>
              <a href="" className="text-2xl text-text_highlight">
                --------
              </a>
            </li>
            <li>
              <a href="" className="text-2xl text-text_highlight">
                --------
              </a>
            </li>
            <li>
              <a href="" className="text-2xl text-text_highlight">
                --------
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <img
            src="sale_flag.svg"
            alt=" "
            className="w-[150px] h-[100px] mx-auto mb-2 opacity-15"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
