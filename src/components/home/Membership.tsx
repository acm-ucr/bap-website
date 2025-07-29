import Link from "next/link";

const Membership = () => {
  return (
    <div className="w-100 flex-col bg-bap-red-200 px-10 py-20 text-center">
      <p className="relative -top-6 text-4xl md:text-5xl"> MEMBERSHIP</p>
      <p className="mx-auto max-w-xl text-wrap text-center text-lg">
        Become a part of our community and connect with like-minded individuals.
        Unlock exclusive opportunities, events, and resources by joining us
        today!
      </p>
      <button>
        <p className="relative -bottom-6 rounded-sm bg-bap-brown-100 bg-opacity-[34%] px-12 py-3 text-center text-3xl shadow-md shadow-black hover:bg-red-800 active:bg-red-600">
          <Link
            href="https://docs.google.com/forms/d/17n47x1sm1ptZy3QNdakgPzENCSWlf_-wbFnubNJq9pY/edit"
            target="_blank"
          >
            Join Us
          </Link>
        </p>
      </button>
    </div>
  );
};

export default Membership;
