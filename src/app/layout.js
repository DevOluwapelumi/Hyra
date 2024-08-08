import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Hyra",
  description: "Discover a world where education meets excitement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>
          <Toaster position="top-center" />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
