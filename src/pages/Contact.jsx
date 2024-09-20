import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const contact = () => {
  return (
    <section className="max-w-screen-2xl mt-12 md:mt-16 w-full mx-auto px-4 min-h-screen">
      <div className=" flex flex-col items-center justify-center min-h-screen gap-5 mb-10">
        <ContactInfo />

        <ContactForm />
      </div>
    </section>
  );
};

export default contact;
