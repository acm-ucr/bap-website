import Link from "next/link";
const NotFound = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="flex py-2 text-8xl font-bold text-red-400">404</div>
      <div className="text-rishi-black flex py-2 text-2xl font-bold">
        Page Not Found
      </div>

      <Link href="/">
        <div className="flex py-4">
          <button className="transform rounded-md border border-white px-5 py-1 transition-transform hover:scale-105">
            Back to Home
          </button>
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
