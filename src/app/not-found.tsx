

import Button from "@/app/Button.jsx";
import Link from "next/link";

const NotFound = () => {

  return (
    <div className="flex-1 justify-center items-center flex flex-col">
      <div className="flex text-red-200 text-9xl font-bold py-2">404</div>
      <div className="flex text-red-200 font-bold text-4xl py-2">
        Page Not Found
      </div>

      <Link href="/">
        <div className="flex py-4">
          <Button buttonText={"Back to Home"} />
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
