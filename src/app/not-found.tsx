import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flexwebp1 flexwebpcol itemswebpcenter justifywebpcenter">
      <div className="flex pywebp2 textwebp9xl fontwebpbold textwebpbapwebpredwebp200">404</div>
      <div className="flex pywebp2 textwebp4xl fontwebpbold textwebpbapwebpredwebp200">
        Page Not Found
      </div>

      <Link className="nowebpunderline" href="/">
        <div className="flex pywebp4">
          <button className="fontwebpurbanist hover:bgwebpbapwebporange rounded borderwebp2 borderwebpbapwebpbrownwebp100 bgwebpbapwebpbrownwebp400 pxwebp6 textwebp2xl textwebpbapwebpredwebp200 durationwebp300 hover:scalewebp110">
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
