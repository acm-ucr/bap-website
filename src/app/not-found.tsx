import Link from "next/link";

const NotFound = () => {

  return (
    <div className="flex-1 justify-center items-center flex flex-col">
      <div className="flex text-bap-red-200 text-9xl font-bold py-2">404</div>
      <div className="flex text-bap-red-200 font-bold text-4xl py-2">
        Page Not Found
      </div>

      <Link href="/">
        <div className="flex py-4">
        <button className="bg-bap-brown-400 border-bap-brown-100 text-bap-red-200 font-urbanist hover:bg-bap-orange rounded rounded-md border-2 px-4 px-6 text-2xl duration-300 hover:scale-110"> 
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
