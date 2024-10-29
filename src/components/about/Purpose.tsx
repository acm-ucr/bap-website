import Image from "next/image";
import diploma from "@/public/diploma.webp";
import thinking from "@/public/thinking.webp";
import handshake from "@/public/handshake.webp";
import discussion from "@/public/discussion.webp";

const Purpose = () => {
  return (
    <div className="flex w-10/12 flex-col gap-10 p-20">
      <p className="text-5xl">OUR PURPOSE</p>

      <p className="text-2xl font-light">
        Beta Alpha Psi's purpose is to cultivate professional and personal
        growth, academic excellence, and a strong sense of community among its
        members.
      </p>

      <div className="flex flex-row place-items-center justify-center overflow-hidden bg-bap-brown-100 bg-opacity-50 p-3">
        <div
          id="academic"
          className="group/academic relative flex flex-col items-center justify-center px-3 hover:bg-bap-brown-100"
        >
          <Image alt="diploma" src={diploma} className="l-40 w-40"></Image>
          <span className="text-center text-2xl">
            ACADEMIC <br />
            EXCELLENCE
          </span>

          <div className="hidden flex-row bg-bap-red-200 group-hover/academic:flex group-hover/academic:bg-bap-red-200">
            <ul>
              <li>
                <a className="block">
                  By surrounding yourself with like-minded individuals, you will
                  be able to engage in a supportive and motivating environment.
                  Our GPA requirement of 3.2 helps maintain our professional
                  reputation while encouraging members to sustain strong
                  academic performance. We want to recognize members and reward
                  academic excellence while inspiring all members to achieve
                  their best.
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          id="personal"
          className="group/personal relative flex flex-col items-center justify-center px-3 hover:bg-bap-brown-100"
        >
          <Image alt="thinking" src={thinking} className="l-40 w-40"></Image>
          <span className="text-center text-2xl">
            PERSONAL <br />
            DEVELOPMENT
          </span>

          <div className="hidden flex-col group-hover/personal:flex group-hover/personal:bg-bap-red-200">
            <a className="block">
              We prioritize personal development as it forms the foundation for
              professional success. The opportunities we offer will help you
              refine your networking, communication, and leadership skills.
            </a>
          </div>
        </div>

        <div
          id="prof"
          className="group/prof relative flex flex-col items-center justify-center px-3 hover:bg-bap-brown-100"
        >
          <Image alt="handshake" src={handshake} className="l-40 w-40"></Image>
          <span className="text-center text-2xl">
            PROFESSIONAL <br />
            DEVELOPMENT
          </span>

          <div className="hidden flex-col group-hover/prof:flex group-hover/prof:bg-bap-red-200">
            <a className="block">
              At BAP, we facilitate events with firms for our members to build
              meaningful professional relationships with recruiters and
              professionals. Our strong alumni network also offers valuable
              support and guidance throughout your college and career journey.
            </a>
          </div>
        </div>

        <div
          id="sense"
          className="group/sense relative flex flex-col items-center justify-center px-3 hover:bg-bap-brown-100"
        >
          <Image
            alt="discussion"
            src={discussion}
            className="l-40 w-40"
          ></Image>
          <span className="text-center text-2xl">
            SENSE OF <br />
            COMMUNITY
          </span>

          <div className="hidden flex-col group-hover/sense:flex group-hover/sense:bg-bap-red-200">
            <a className="block">
              BAP promotes participation in community service activities to give
              back to the community, helping members develop a strong sense of
              ethical, social, and public responsibility.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
