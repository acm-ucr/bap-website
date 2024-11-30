import "./globals.css";
import { Open_Sans } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const opensans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-carrois",
});

export const metadata = {
  title: "BAP Website",
  description:
    "An honors accounting, information systems, and finance organization designed to promote professional excellence.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${opensans.className} flex min-h-screen flex-col bg-bap-brown-400 text-white`}
      >
        <ReactQueryClientProvider>
          <div className="flex min-h-screen flex-col justify-between">
            <div className="flex flex-col">
              <Navigation />
              <div className="pt-4"></div>
              <div>{children}</div>
            </div>
            <Footer />
          </div>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
