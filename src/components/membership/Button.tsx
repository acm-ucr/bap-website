import Link from "next/link";

const Button = () => {
  return (
    <div className="flex justify-center pt-4">
      <button className="rounded-md bg-bap-red-200 p-8 px-12 transition-all hover:bg-red-800 active:bg-red-900">
        <Link
          className="font-sans text-5xl text-white no-underline"
          href="https://forms.gle/DKi1W7nD3SzV4syB6"
          target="_blank"
        >
          MEMBERSHIP FORM
        </Link>
      </button>
    </div>
  );
};

export default Button;
