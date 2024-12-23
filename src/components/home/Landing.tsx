import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="absolute left-0 top-0 z-[-1] h-[700px] w-full bg-[url('/clubimage1.webp')] bg-cover bg-center bg-no-repeat">
        <div className="h-[700px] w-full bg-bap-brown-400 bg-opacity-[93%]"></div>
      </div>
      <div className="relative flex w-5/6 animate-fade-down flex-col bg-bap-brown-100 bg-opacity-50 p-4 sm:w-[50%] sm:pb-7 sm:pl-12 sm:pr-14 sm:pt-10">
        <h1 className="absolute -left-4 -top-5 mb-4 text-4xl font-thin sm:-left-12 sm:-top-8 sm:text-5xl sm:tracking-wide lg:-left-20 lg:-top-12 lg:text-7xl">
          {" "}
          BETA ALPHA PSI{" "}
        </h1>
        <p className="text-xl font-thin lg:text-2xl lg:leading-8">
          Honors Organization for Financial Information Students and
          Professionals at UCR
        </p>

        <div className="flex w-full flex-row justify-end">
          <p className="mt-1 w-4/5 text-sm font-thin leading-tight sm:w-[65%]">
            Empowering Tomorrow's Leaders in Finance and Business Through
            Excellence, Ethics, and Engagement
          </p>
        </div>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSck3Q0dWxRiUjs4VKRAwED7inrMH1NC8SbHVAgIWSHVnZW_5A/viewform">
          <div className="absolute -bottom-5 -right-4 cursor-pointer self-center rounded bg-bap-red-200 px-4 py-2 font-semibold text-white hover:bg-red-800 md:-right-10">
            Join Us
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
