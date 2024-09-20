const ContactForm = () => {
  return (
    <form className="flex flex-col gap-6 p-3 w-2/3 items-center justify-center md:p-10 bg-[#24272c] rounded-xl">
      <h3 className="text-2xl md:text-4xl text-hover text-center">
        Send Message
      </h3>

      <div className="grid grid-cols-1 w-full xl:grid-cols-2 gap-6">
        <input
          type="fastname"
          placeholder="Fast Name"
          className="flex h-[48px] rounded-md border-white/10 focus:border-accent-hover font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
        />
        <input
          type="lastname"
          placeholder="Last Name"
          className="flex h-[48px] rounded-md border-white/10 focus:border-accent-hover font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
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
      <textarea
        placeholder="plz provide some info through this message"
        className="flex min-h-[100px] w-full rounded-md border border-white/10 bg-primary px-4 py-5 placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-hover focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
      ></textarea>

      <button className="w-full rounded-md border border-white/10 bg-primary px-4 py-3 hover:bg-hover hover:font-semibold transition-opacity duration-500">
        SEND MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;
