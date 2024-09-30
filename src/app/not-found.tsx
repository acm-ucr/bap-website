import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-grow flex-col items-center justify-center gap-4">
      <div className="flex text-6xl font-bold md:text-9xl">404</div>
      <div className="flex text-2xl font-bold md:text-4xl">Page Not Found</div>

      <Link className="mt-6" href="/">
        <button className="rounded border px-4 py-2 font-bold">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
