import ServiceComp from "../components/ServiceComp";
import ServiceCompImg from "../components/ServiceCompImg";

const Service = () => {
  return (
    <section className="max-w-screen-2xl mt-12 md:mt-16 w-full mx-auto px-4">
      <div className="flex flex-col gap-5 p-10">
        <ServiceCompImg />
        <ServiceComp />
      </div>
    </section>
  );
};

export default Service;
