const Landing = () => {
  return (
    <div className="flex w-[50%] flex-col bg-bap-brown-100 bg-opacity-50 pb-7 pl-12 pr-14 pt-10">
      <div className="absolute left-0 top-0 z-[-1] h-[700px] w-full bg-[url('/clubimage1.webp')] bg-center bg-no-repeat">
        <div className="h-[700px] w-full bg-bap-brown-400 bg-opacity-[93%]"></div>
      </div>
      <p className="text-2xl font-thin leading-8">
        Honors Organization for Financial Information Students and Professionals
        at UCR
      </p>
      <div className="flex w-full flex-row justify-end">
        <p className="mt-1 w-[65%] text-sm font-thin leading-tight">
          Empowering Tomorrow's Leaders in Finance and Business Through
          Excellence, Ethics, and Engagement
        </p>
      </div>
    </div>
  );
};

export default Landing;
