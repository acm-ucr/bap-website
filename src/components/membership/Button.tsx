import Link from "next/link";

const Button = () => {
  return (
    <div className="flex justify-center pt-4">
      <button className="rounded-md bg-bap-red-200 p-8 px-12 font-sans text-5xl text-white transition-all hover:bg-red-800 active:bg-red-900">
        <Link
          href="https://docs.google.com/forms/d/17n47x1sm1ptZy3QNdakgPzENCSWlf_-wbFnubNJq9pY/edit"
          target="_blank"
        >
          MEMBERSHIP FORM
        </Link>
      </button>
    </div>
  );
};

export default Button;
