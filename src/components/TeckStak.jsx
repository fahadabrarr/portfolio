const tools = [
  { name: "html", icon: "html.png" },
  { name: "css3", icon: "css3.svg" },
  { name: "java script", icon: "js.svg" },
  { name: "react", icon: "react.svg" },
  { name: "node-js", icon: "node-js.svg" },
];
const webTools = [
  { name: "git", icon: "git.png" },
  { name: "vscode", icon: "vscode.png" },
  { name: "python", icon: "python.svg" },
  { name: "django", icon: "django.svg" },
  { name: "kafka", icon: "kafka.svg" },
  { name: "flask", icon: "flask.svg" },
  { name: "rabbitmq", icon: "rabbitmq.svg" },
  { name: "redis", icon: "redis.svg" },
  { name: "mysql", icon: "mysql.svg" },
  { name: "mongodb", icon: "mongodb.png" },
];

const TeckStak = () => {
  return (
    <div className="items-center justify-center gap-3 sm:gap-5 py-3 mx-auto">
      <p className="text-center pb-3">
        tools <br /> preferly I used
      </p>

      <div className="flex items-center justify-center gap-3 sm:gap-5 py-3 mx-auto">
        {tools.map((item, idx) => {
          return (
            <div
              className="flex items-center justify-center w-10 sm:w-14 text-white aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500 hover:text-hover hover:bg-zinc-950"
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
      <div className="grid grid-cols-5 md:flex flex-row items-center justify-center gap-3 sm:gap-5 py-3 mx-auto">
        {webTools.map((item, idx) => {
          return (
            <div
              className="flex  items-center justify-center w-10 sm:w-14 text-white aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500 hover:text-hover hover:bg-zinc-950"
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
    </div>
  );
};

export default TeckStak;
