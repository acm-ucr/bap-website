import Link from "next/link";
const NotFound = () => {
  return (
    <div className="flex-1 justify-center items-center flex flex-col">
      <div className="flex text-red-400 text-8xl font-bold py-2">404</div>
      <div className="flex text-rishi-black font-bold text-2xl py-2">
        Page Not Found
      </div>

      <Link href="/">
        <div className="flex py-4">
          <button className="border border-white rounded-md px-5 py-1 transform transition-transform hover:scale-105">Back to Home</button>
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
