import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import FooterTop from "./components/ui/FooterTop";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HerbsofBharat",
  description:
    "Buy 100% Genuine from Original Seller of HerbsofBharat at Cheapest Price",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <FooterTop />
        <Footer />
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          toastOptions={{
            style: {
              backgroundColor: "black",
              color: "white",
            },
          }}
        />
      </body>
    </html>
  );
}
