const AboutMeSection = () => {
  return (
    <div>
      <div id="about-me" className="h-[90px]"></div>
      <div className="h-(--entire-screen) w-full flex flex-col">
        <p className="text-8xl">Behind the Code</p>
        <div className="flex h-full w-full">
          <div className="w-3/5 flex items-center justify-center">lrolem</div>
          <div className="w-2/5 rounded-2xl bg-gray-100 m-5 h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
