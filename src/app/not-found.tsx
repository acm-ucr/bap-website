import Button from "@/app/Button.jsx";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="flex py-2 text-9xl font-bold text-red-200">404</div>
      <div className="flex py-2 text-4xl font-bold text-red-200">
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
