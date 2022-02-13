function ContactUsView() {
  return (
    <div className="flex flex-col py-4 items-start w-full justify-start gap-3">
      <div className=" text-primary text-3xl">
        <h1>How to reach us</h1>
      </div>
      <div className=" text-white text-xl font-thin">
        <a
          href="mailto:info@yallaplay.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          info@yallaplay.com
        </a>
      </div>
    </div>
  );
}

export default ContactUsView;
