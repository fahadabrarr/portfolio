import React from "react";

const About = () => {
  return (
    <section className="max-w-screen-2xl mt-12 md:mt-20 w-full mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-3 items-center justify-start w-full min-h-screen">
        <div className=" flex flex-col md:items-start items-center justify-center w-1/4 max-h-screen gap-5 px-5  py-5">
          <p className="cursor-pointer">
            <a href="#"></a> about
          </p>
          <p className="cursor-pointer">
            {" "}
            <a href="#"></a> education
          </p>
          <p className="cursor-pointer">
            {" "}
            <a href="#"></a> skill
          </p>
          <p className="cursor-pointer">
            {" "}
            <a href="#"></a> experience
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 w-3/4 max-h-screen px-2 py-5">
          <h1>about</h1>
          <p className="">
            I am a skilled backend developer and data scientist with a strong
            foundation in designing and implementing scalable and efficient
            solutions. <br /> My expertise spans across modern backend
            technologies, including Node.js, Express.js, Django REST Framework,
            and Prisma, along with experience in managing databases using
            MongoDB, SQL, and Redis.
            <br /> I am well-versed in real-time data streaming and messaging
            systems like Kafka and RabbitMQ, which I leverage to build robust
            and responsive applications.
            <br /> My proficiency in Python allows me to integrate advanced data
            science techniques, such as Natural Language Processing (NLP) and
            Machine Learning (ML), into backend systems, providing data-driven
            insights and enhancing the intelligence of applications.
            <br /> I am passionate about building seamless and powerful backend
            infrastructures that not only meet business requirements but also
            adapt to future needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
