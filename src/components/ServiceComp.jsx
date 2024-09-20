const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description:
      "From sleek and responsive front-end interfaces to robust and scalable back-end solutions, we craft websites and applications that are both visually stunning and technically sound. Whether it's a personal blog or a full-fledged business platform, our web development services ensure a seamless experience for users.",
    image: "website.svg",
  },
  {
    num: "02",
    title: "Data Science & AI Solutions",
    description:
      "Unlock the power of data with our advanced data science services. We specialize in Natural Language Processing (NLP), Machine Learning (ML), and leveraging tools like LangChain to help businesses extract meaningful insights and automate complex tasks. From predictive models to AI-driven systems, we turn your data into a competitive advantage",
    image: "data_science.svg",
  },
  {
    num: "03",
    title: "Data Analytics",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deleniti sint totam, corrupti non repellendus",
    image: "data_analytics.svg",
  },
  {
    num: "04",
    title: "Digital Marketing",
    description:
      "Boost your brand's online presence with our strategic digital marketing solutions. We help you reach your target audience through data-driven strategies, SEO optimization, and targeted campaigns. Whether you're looking to increase traffic or enhance conversion rates, we've got you covered.",
    image: "digital_marketing.svg",
  },
];

const ServiceComp = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-center md:w-2/3 lg:w-full gap-6 lg:grid-cols-4 xl:grid-cols-4 md:gap-8 py-3 px-3 mx-auto">
      {services.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-col gap-3 md:gap-3 py-2 px-2 group border border-accent-hover rounded-lg hover:shadow-[4px_4px_#000] cursor-pointe hover:bg-zinc-950 hover:-translate-y-1 duration-500 group-hover:text-white items-center mx-auto max-w-[250px] h-[350px] relative"
          >
            <div className="flex justify-between items-center font-extrabold group-hover:text-primary">
              <img
                src={item.image}
                alt=""
                className="rounded-full w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] mx-auto mix-blend-lighten p-5"
              />
            </div>
            <h2 className="font-semibold text-2xl text-center group-hover:text-white bottom-0 p-4 absolute ">
              {item.title}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceComp;
