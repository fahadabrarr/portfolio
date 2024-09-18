import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex fixed top-0 left-0 w-full h-20 items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center">
        <div className="h-[40px] w-[100px] text-center rounded-lg shadow-md px-5 py-2 hover:bg-hover hover:text-primary hover:shadow-primary transition-all">
          blog
        </div>
        <div className="hidden h-[40px] w-[350px] md:flex px-2 py-2 gap-10 transition-all shadow-xl">
          <Navbar />
        </div>

        <div className="hidden md:flex rounded-lg h-[40px] w-[100px] shadow-md px-5 py-2 text-center hover:bg-hover hover:text-primary hover:shadow-primary transition-all">
          <a href="">Hire me</a>
        </div>
        <div className="flex text-center px-5 py-2  items-center justify-center rounded-lg h-[40px] w-[100px] hover:shadow-primary md:hidden">
          menu
        </div>
      </div>
    </header>
  );
};

export default Header;
