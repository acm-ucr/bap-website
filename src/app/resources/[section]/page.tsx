import Link from "next/link";

export async function generateStaticParams() {
  const pages = ["resume", "cover", "interview", "prof"];

  return pages.map((post) => ({
    section: post,
  }));
}
const Page = ({ params }: { params: { section: string } }) => {
  const { section } = params;
  switch (section) {
    case "resume":
      return (
        <div className="pb-16 pl-[5%] pr-[5%]">
          <p className="text-left font-sans text-4xl font-extralight text-white underline decoration-bap-red-200 underline-offset-8">
            RESOURCES
          </p>

          <p className="pt-4 text-left font-sans text-3xl font-normal text-white">
            Resume 101
          </p>

          <Link href="https://careers.ucr.edu/sites/default/files/2023-09/business_admin_accounting_concentration_23-24.pdf">
            <p className="pt-3 text-left font-sans text-xl font-thin text-white underline hover:underline-offset-1">
              Resume Template
            </p>
          </Link>

          <p className="pt-2 text-left font-sans text-xl font-thin text-white">
            Tips:
          </p>

          <div className="text-center sm:text-left">
            <ul className="list-disc pl-11">
              <li className="text-left font-sans text-xl font-thin text-white">
                Always put your CPA eligibility date.
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <ul className="list-disc pl-11">
              <li className="text-left font-sans text-xl font-thin text-white">
                Don’t underestimate a minimum wage service job. These roles
                often highlight your ability to communicate, work with others,
                provide customer service, and think on your feet. These valuable
                soft skills are frequently listed in job requirements and are
                what recruiters look for in a candidate.
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <ul className="list-disc pl-11">
              <li className="text-left font-sans text-xl font-thin text-white">
                Make sure that your resume is clean and neat: use a consistent
                font, size, and alignment, and avoid using color. Double-check
                for spelling and grammar mistakes.
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <ul className="list-disc pl-11">
              <li className="text-left font-sans text-xl font-thin text-white">
                Recruiters understand that students are unlikely to have
                relevant accounting experience, so be sure to showcase your soft
                skills through leadership roles, volunteer work, and other job
                experiences.
              </li>
            </ul>
          </div>
        </div>
      );

    case "cover":
      return (
        <div className="pb-16 pl-[5%] pr-[5%]">
          <p className="text-left font-sans text-4xl font-extralight text-white underline decoration-bap-red-200 underline-offset-8">
            RESOURCES
          </p>

          <p className="pt-4 text-left font-sans text-3xl font-normal text-white">
            Cover Letter
          </p>

          <Link href="https://studentdocs.ucr.edu/career-center/uc-riverside_career-center_cover-letter-handout.pdf">
            <p className="pt-3 text-left font-sans text-xl font-thin text-white underline hover:underline-offset-1">
              Cover Letter Template
            </p>
          </Link>

          <p className="pt-2 text-left font-sans text-xl font-thin text-white">
            Tips:
          </p>

          <div className="text-center sm:text-left">
            <ul className="list-disc pl-11">
              <li className="text-left font-sans text-xl font-thin text-white">
                Ensure that you highlight what you can provide to the firm.
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <ul className="list-disc pl-11">
              <li className="text-left font-sans text-xl font-thin text-white">
                Use the cover letter to show your genuine interest in the
                position by showing your enthusiasm for the position and firm.
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <ul className="list-disc pl-11">
              <li className="text-left font-sans text-xl font-thin text-white">
                Elaborate on your experience and skills to show how they align
                with the position.
              </li>
            </ul>
          </div>
        </div>
      );

    case "interview":
      return (
        <div className="pb-16 pl-[5%] pr-[5%]">
          <p className="text-left font-sans text-4xl font-extralight text-white underline decoration-bap-red-200 underline-offset-8">
            RESOURCES
          </p>

          <p className="pt-4 text-left font-sans text-3xl font-normal text-white">
            Interviewing
          </p>

          <div className="text-center sm:text-left">
            <p className="pt-3 text-left font-sans text-xl font-thin text-white">
              Ever since COVID, most firms have conducted their interviews
              online. Make sure your Wi-Fi connection is stable, the lighting is
              good, and that you wear business professional attire.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <p className="pt-2 text-left font-sans text-xl font-thin text-white">
              Your interviewer will likely focus on behavioral questions rather
              than technical ones. They just want to get to know you, so the
              interview may sometimes be more of a conversation.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <p className="pt-2 text-left font-sans text-xl font-thin text-white">
              Common interview questions:
            </p>
          </div>

          <div className="text-center sm:text-left">
            <ul className="list-disc pl-11">
              <li className="text-left font-sans text-xl font-thin text-white">
                Why us?/How did you hear about us?
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <ul className="list-disc pl-11">
              <li className="text-left font-sans text-xl font-thin text-white">
                Why this role?
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <ul className="list-disc pl-11">
              <li className="text-left font-sans text-xl font-thin text-white">
                Can you give me a time when you disagreed with someone on your
                team, how did you go about it?
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <ul className="list-disc pl-11">
              <li className="text-left font-sans text-xl font-thin text-white">
                Can you give me a time when you had a lot on your plate, how did
                you juggle it?
              </li>
            </ul>
          </div>
        </div>
      );

    case "prof":
      return (
        <div className="pb-16 pl-[5%] pr-[5%]">
          <p className="text-left font-sans text-4xl font-extralight text-white underline decoration-bap-red-200 underline-offset-8">
            RESOURCES
          </p>

          <p className="pt-4 text-left font-sans text-3xl font-normal text-white">
            Professionalism
          </p>

          <div className="text-center sm:text-left">
            <p className="pt-3 text-left font-sans text-xl font-thin text-white">
              Most of our meetings are speaker events with firms. These events
              are a great opportunity to get to know the recruiters and
              professionals. Treat the events as a “pre-interview”.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <p className="pt-2 text-left font-sans text-xl font-thin text-white">
              Wear business casual attire, stay off your phone, and listen
              attentively. If you need to leave early, sit in the back so you
              can leave quietly without disrupting the presentation.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <p className="pt-2 text-left font-sans text-xl font-thin text-white">
              Introduce yourself to the speakers with a firm handshake. Ask
              follow-up questions about anything presented during the event to
              demonstrate your engagement and interest in the firm and the
              position.
            </p>
          </div>
        </div>
      );
  }
};

export default Page;
