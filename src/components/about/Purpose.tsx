const Purpose = () => {
  return (
    <div className="flex flex-col">
      <p className="text-3xl">
        OUR PURPOSE <br />
      </p>
      <p>
        Beta Alpha Psi's purpose is to cultivate professional and personal
        growth,
        <br />
        academic excellence, and a strong sense of community among its members.
      </p>

      <div className="max-w-10xl row-auto mx-auto grid grid-cols-1 gap-x-20 bg-bap-brown-100 md:grid-cols-4">
        <div className="flex flex-col items-center">
          <img src="diploma.webp" className="l-40 w-40"></img>
          <span className="text-center text-2xl">
            ACADEMIC <br />
            EXCELLENCE
          </span>
        </div>

        <div className="flex flex-col items-center">
          <img src="thinking.webp" className="l-40 w-40"></img>
          <span className="text-center text-2xl">
            PERSONAL <br />
            DEVELOPMENT
          </span>
        </div>

        <div className="flex flex-col items-center">
          <img src="handshake.webp" className="l-40 w-40"></img>
          <span className="text-center text-2xl">
            PROFESSIONAL <br />
            DEVELOPMENT
          </span>
        </div>

        <div className="flex flex-col items-center">
          <img src="discussion.webp" className="l-40 w-40"></img>
          <span className="text-center text-2xl">
            SENSE OF <br />
            COMMUNITY
          </span>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
