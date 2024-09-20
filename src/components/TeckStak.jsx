const tools = [
  { name: "vscode", icon: "vscode.png" },
  { name: "code", icon: "vscode.png" },
  { name: "code", icon: "vscode.png" },
  { name: "mongodb", icon: "mongodb.png" },
  { name: "git", icon: "git.png" },
  { name: "gitHub", icon: "vscode.png" },
];

const TeckStak = () => {
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5 py-3 mx-auto">
      {tools.map((item, idx) => {
        return (
          <div
            className="flex items-center justify-center w-12 sm:w-14 text-white aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500 hover:text-hover hover:bg-zinc-950"
            key={idx}
          >
            <img
              src={item.icon}
              alt=""
              className="rounded-full items-center justify-center w-10 h-10 mx-auto mix-blend-lighten py-1 px-1 aspect-square"
            />
          </div>
        );
      })}
    </div>
  );
};

export default TeckStak;
