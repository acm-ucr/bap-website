import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="flex py-2 text-9xl font-bold text-bap-red-200">404</div>
      <div className="flex py-2 text-4xl font-bold text-bap-red-200">
        Page Not Found
      </div>

      <Link className ="no-underline" href="/">
        <div className="flex py-4">
          <button className="font-urbanist hover:bg-bap-orange rounded border-2 border-bap-brown-100 bg-bap-brown-400 px-6 text-2xl text-bap-red-200 duration-300 hover:scale-110">
            Back to Home
          </button>
        </div>
      </Link>
    </div>
  );
};

export default NotFound;

/*const NotFound = () => {
  return <div>404 Page Not Found</div>;
};

export default NotFound;

*/
