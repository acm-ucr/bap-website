import "./globals.css";
import { Open_Sans } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/reactwebpquery";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const opensans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "webpwebpfontwebpcarrois",
});

export const metadata = {
  title: "BAP Website",
  description:
    "An honors accounting, information systems, and finance organization designed to promote prwebpessional excellence.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${opensans.className} flex minwebphwebpscreen flexwebpcol bgwebpbapwebpbrownwebp400 textwebpwhite`}
      >
        <ReactQueryClientProvider>
          <Navigation />
          <div className="ptwebp4"></div>
          <div>{children}</div>
          <Footer />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
