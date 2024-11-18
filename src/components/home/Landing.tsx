import Link from 'next/link';

const Landing = () => {
  return (
    <div className="relative flex w-[50%] flex-col bg-bap-brown-100 bg-opacity-50 pb-7 pl-12 pr-14 pt-10">
      <h1 className="absolute -left-20 -top-10 mb-4 text-7xl font-thin tracking-wide">
        {" "}
        BETA ALPHA PSI{" "}
      </h1>
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
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSck3Q0dWxRiUjs4VKRAwED7inrMH1NC8SbHVAgIWSHVnZW_5A/viewform">
        <div className="absolute -bottom-5 -right-10 cursor-pointer self-center rounded bg-bap-red-200 px-4 py-2 font-semibold text-white hover:bg-red-800">
          Join Us
        </div>
      </Link>
    </div>
  );
};

export default Landing;
