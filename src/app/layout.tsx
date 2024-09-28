import "./globals.css";
import { Open_Sans } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";

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
        className={`${opensans.className} flex min-h-screen flex-auto flex-col justify-between bg-bap-brown-400 text-white`}
      >
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
