const TitleSections = ({ title }) => {
  return (
    <h1 className="text-[25px] md:text-[35px] lg:text-[35px] capitalize text-transparent bg-clip-text bg-gradient-to-r from-main_color to-white mb-20 mx-auto w-max font-bold">
      {title}
    </h1>
  );
};

export default TitleSections;
