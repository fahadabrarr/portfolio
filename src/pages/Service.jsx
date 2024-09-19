import Footer from "../components/Footer";
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

const Service = () => {
  return (
    <section className="max-w-screen-2xl mt-12 md:mt-16 w-full mx-auto px-4">
      <div className=" mb-10 py-20">
        <div className="flex flex-col gap-6 p-10 md:mb-10">
          <div className="flex items-center justify-center">
            <h3 className="text-4xl text-accent-hover p-3">
              Innovative Technology Services
            </h3>
          </div>
        </div>
        <div className=" flex flex-col md:grid items-center justify-center gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 py-3 px-3 mx-auto">
          {services.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col gap-3 md:gap-3 py-2 px-2 group border border-accent-hover rounded-lg hover:shadow-[4px_4px_#000] cursor-pointe hover:bg-zinc-950 hover:-translate-y-1 duration-500 group-hover:text-white items-center mx-auto max-w-[250px] h-[400px]"
              >
                <div className="flex justify-between items-center font-extrabold group-hover:text-primary">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-full w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] mx-auto mix-blend-lighten p-5"
                  />
                </div>
                <h2 className="font-semibold text-2xl text-center group-hover:text-white ">
                  {item.title}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto py-3">
        <img
          src="service.svg"
          alt=""
          className=" rounded-full w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] mx-auto mix-blend-lighten p-5"
        />

        <p className="max-w-[750px] text-center p-3 text-white/60 border rounded-lg border-accent-hover hover:bg-zinc-950 hover:-translate-y-1 duration-500 ">
          I offer a complete web development services, from front-end design to
          back-end architecture. My expertise extends to data science, including
          NLP, machine learning, and LangChain. Additionally, I provide
          strategic digital marketing services to help businesses grow, backed
          by cutting-edge AI and data-driven insights.
        </p>
      </div>
    </section>
  );
};

export default Service;
