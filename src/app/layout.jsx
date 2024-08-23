import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HerbsOfBharat",
  description:
    "Buy 100% Genuine from Original Seller of HerbsofBharat at Cheapest Price",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
