import Image from "next/image";
import { Mail, Phone, MapPinCheckInside } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 mt-10">
      <div className="w-full mx-auto px-6 flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 ">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 md:ml-20">
          <div>
            <h3 className="font-bold text-xl mb-3">Herbs of Bharat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aboutus" className="hover:text-blue-500">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="hover:text-blue-500">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">Quick Links </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aboutus" className="hover:text-blue-500">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="hover:text-blue-500">
                  My Orders
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="hover:text-blue-500">
                  Our Products
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">Know About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aboutus" className="hover:text-blue-500">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="hover:text-blue-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="hover:text-blue-500">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">Our Team</h3>
            <ul className=" space-y-2">
              <li className="flex flex-row gap-2">
                <span>
                  <Mail size={20} />
                </span>
                <Link href="#" className="hover:text-blue-500">
                  care@herbsofbharat.com
                </Link>
              </li>
              <li className="flex flex-row gap-2">
                <span>
                  <Phone size={20} />
                </span>
                <Link href="#" className="hover:text-blue-500">
                  0123-333555
                </Link>
              </li>
              <li className="flex flex-row gap-2">
                <span>
                  <MapPinCheckInside size={20} />
                </span>
                <Link href="#" className="hover:text-blue-500">
                  Dwarika Tower 2, 3rd Floor, 6th Main, Roorkee, Uttarkhand,
                  India
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="w-full md:w-auto text-center md:text-left">
          <h3 className="font-bold text-xl mb-4">Join Our Newsletter</h3>
          <form className="flex justify-center md:justify-start">
            <input
              type="email"
              className="p-2 w-full md:w-64 text-gray-900 rounded-l-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            <button className="bg-blue-600 p-2 text-white rounded-r-lg hover:bg-blue-800 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Payment Icons */}
      <div className="mt-12 flex justify-center space-x-4">
        <Image
          src="/assets/google-pay.svg"
          alt="google pay"
          className="invert-0 hover:invert"
          width={60}
          height={60}
        />
        <Image
          src="/assets/master-card-icon.svg"
          alt="MasterCard"
          className="invert-0 hover:invert"
          width={60}
          height={60}
        />
        <Image
          src="/assets/paytm-icon.svg"
          alt="Paytm"
          className="invert-0 hover:invert"
          width={60}
          height={60}
        />
        <Image
          src="/assets/apple-pay-icon.svg"
          alt="Apple Pay"
          className="invert-0 hover:invert"
          width={60}
          height={60}
        />
        <Image
          src="/assets/paypal-icon.svg"
          alt="PayPal"
          className="invert-0 hover:invert"
          width={60}
          height={60}
        />
      </div>
      {/* Copyright */}
      <div className="bg-gray-800 text-gray-500 text-sm text-center py-6 mt-8">
        <p>&copy; Herbs of Bharat 2024. All rights reserved.</p>
        <p>
          <Link href="/aboutus" className="hover:underline">
            Terms & Conditions
          </Link>{" "}
          •
          <Link href="/aboutus" className="hover:underline ml-2">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
