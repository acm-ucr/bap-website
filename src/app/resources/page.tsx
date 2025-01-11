import Link from "next/link";
import Title from "@/components/Title";

const Page = () => {
  return (
    <div className="animate-fade-down pb-16 pl-[5%] pr-[5%] animate-once">
      <p className="text-left font-sans text-4xl font-extralight text-white underline decoration-bap-red-200 underline-offset-8">
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
          <li className="text-left font-sans text-xl font-thin text-white">
            Don’t underestimate a minimum wage service job. These roles often
            highlight your ability to communicate, work with others, provide
            customer service, and think on your feet. These valuable soft skills
            are frequently listed in job requirements and are what recruiters
            look for in a candidate.
          </li>
          <li className="text-left font-sans text-xl font-thin text-white">
            Make sure that your resume is clean and neat: use a consistent font,
            size, and alignment, and avoid using color. Double-check for
            spelling and grammar mistakes.
          </li>
          <li className="text-left font-sans text-xl font-thin text-white">
            Recruiters understand that students are unlikely to have relevant
            accounting experience, so be sure to showcase your soft skills
            through leadership roles, volunteer work, and other job experiences.
          </li>
        </ul>
      </div>

      <p className="pt-4 text-left font-sans text-4xl font-extralight text-white underline decoration-bap-red-200 underline-offset-8">
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
          <li className="text-left font-sans text-xl font-thin text-white">
            Use the cover letter to show your genuine interest in the position
            by showing your enthusiasm for the position and firm.
          </li>
          <li className="text-left font-sans text-xl font-thin text-white">
            Elaborate on your experience and skills to show how they align with
            the position.
          </li>
        </ul>
      </div>

      <p className="pt-4 text-left font-sans text-4xl font-extralight text-white underline decoration-bap-red-200 underline-offset-8">
        Interviewing
      </p>

      <div className="text-center sm:text-left">
        <p className="pt-3 text-left font-sans text-xl font-thin text-white">
          Ever since COVID, most firms have conducted their interviews online.
          Make sure your Wi-Fi connection is stable, the lighting is good, and
          that you wear business professional attire.
        </p>
        <p className="pt-2 text-left font-sans text-xl font-thin text-white">
          Your interviewer will likely focus on behavioral questions rather than
          technical ones. They just want to get to know you, so the interview
          may sometimes be more of a conversation.
        </p>
        <p className="pt-2 text-left font-sans text-xl font-thin text-white">
          Common interview questions:
        </p>
        <ul className="list-disc pl-11">
          <li className="text-left font-sans text-xl font-thin text-white">
            Why us?/How did you hear about us?
          </li>
          <li className="text-left font-sans text-xl font-thin text-white">
            Why this role?
          </li>
          <li className="text-left font-sans text-xl font-thin text-white">
            Can you give me a time when you disagreed with someone on your team,
            how did you go about it?
          </li>
          <li className="text-left font-sans text-xl font-thin text-white">
            Can you give me a time when you had a lot on your plate, how did you
            juggle it?
          </li>
        </ul>
      </div>

      <p className="pt-4 text-left font-sans text-4xl font-extralight text-white underline decoration-bap-red-200 underline-offset-8">
        Professionalism
      </p>

      <div className="text-center sm:text-left">
        <p className="pt-3 text-left font-sans text-xl font-thin text-white">
          Most of our meetings are speaker events with firms. These events are a
          great opportunity to get to know the recruiters and professionals.
          Treat the events as a “pre-interview”.
        </p>
        <p className="pt-2 text-left font-sans text-xl font-thin text-white">
          Wear business casual attire, stay off your phone, and listen
          attentively. If you need to leave early, sit in the back so you can
          leave quietly without disrupting the presentation.
        </p>
        <p className="pt-2 text-left font-sans text-xl font-thin text-white">
          Introduce yourself to the speakers with a firm handshake. Ask
          follow-up questions about anything presented during the event to
          demonstrate your engagement and interest in the firm and the position.
        </p>
      </div>

      <div className="pt-8 text-center font-sans text-2xl font-thin text-white">
        For one-on-one guidance, sign up for office hours with Allen Lien, our
        VP of Professional Development, to get you on the right path towards
        your dream internship or full-time offer.
      </div>
      <div className="text-center">
        <Link href="https://calendly.com/allenlien/bap-office-hours">
          <button className="hover:bg-bap-red-300 mt-4 rounded bg-bap-red-200 px-6 py-3 text-xl font-thin text-white transition duration-300">
            Sign Up for Office Hours
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
