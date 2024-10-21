const Mission = () => {
  return (
    <div className="relative h-full w-full">
      <img
        src="/clubimage2.webp"
        alt="Club Image"
        className="h-full w-full object-cover"
      />

      <div className="absolute left-0 top-0 max-w-lg bg-[#a12424] px-10 pb-20 pt-10 text-center">
        <h1 className="mb-6 text-4xl font-thin text-white">
          MISSION STATEMENT
        </h1>
        <p className="text-lg leading-relaxed text-white">
          It provides opportunities for service, professional development, and
          interaction among its members and financial professionals.
          Additionally, Beta Alpha Psi fosters lifelong ethical, social, and
          public responsibilities, shaping its members into leaders in their
          fields.
        </p>
      </div>

      <div className="absolute bottom-0 left-1/2 flex h-[100px] w-[600px] -translate-x-1/2 transform items-center justify-center bg-[#b4966fa4] p-4 text-center text-2xl text-white">
        
        “Knowledge Is The Key To Opening The Doors Of The Financial World”
      </div>
    </div>
  );
};

export default Mission;
