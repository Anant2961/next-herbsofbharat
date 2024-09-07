import { Home, MapPin, Shield, RefreshCcw, FileText } from "lucide-react"; // Icons from lucide-react

export default function Page() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700">Herbs of Bharat</h1>
        <p className="text-lg text-gray-600">
          Nature's Finest Remedies for Your Wellness
        </p>
        <img
          src="https://i.ibb.co/7GNTGcD/main-Homebanner.jpg"
          alt="Herbs of Bharat Banner"
          className="mt-8 mx-auto rounded-lg shadow-lg"
        />
      </header>

      {/* Our Beliefs Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold flex items-center text-green-600 mb-4">
          <Home className="mr-2" /> Our Beliefs
        </h2>
        <p className="text-gray-700">
          At Herbs of Bharat, we believe in the ancient wisdom of Ayurveda
          combined with modern science to provide natural wellness solutions.
          Our products are crafted with the highest quality herbs like Shilajit,
          Ashwagandha, and Livo Fuel, ensuring that each ingredient is pure,
          potent, and effective. We are committed to promoting health and
          vitality through nature's best offerings.
        </p>
      </section>

      {/* Our Address Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold flex items-center text-green-600 mb-4">
          <MapPin className="mr-2" /> Our Address
        </h2>
        <address className="text-gray-700">
          <strong>Herbs of Bharat</strong>
          <br />
          Haridwar District Roorkee City Shubhash Nagar,
          <br />
          Uttarkhand City, UK 247667,
          <br />
          India
          <br />
          <a href="tel:+911234567890" className="text-blue-600">
            +91-123-456-7890
          </a>
          <br />
          <a href="mailto:support@herbsofbharat.com" className="text-blue-600">
            support@herbsofbharat.com
          </a>
        </address>
      </section>

      {/* Privacy Policies Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold flex items-center text-green-600 mb-4">
          <Shield className="mr-2" /> Privacy Policies
        </h2>
        <p className="text-gray-700">
          At Herbs of Bharat, your privacy is of utmost importance to us. We
          collect and use your personal information only to provide you with the
          best possible shopping experience. We do not share your information
          with third parties without your consent, and we implement advanced
          security measures to protect your data.
        </p>
        <p className="text-gray-700">
          For more detailed information, please refer to our full privacy policy
          on our website.
        </p>
      </section>

      {/* Return Policies Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold flex items-center text-green-600 mb-4">
          <RefreshCcw className="mr-2" /> Return Policies
        </h2>
        <p className="text-gray-700">
          We offer a 30-day return policy for all our products. If you are not
          completely satisfied with your purchase, you may return the product
          within 30 days of receipt for a full refund. Please ensure the product
          is unused and in its original packaging.
        </p>
        <p className="text-gray-700">
          To initiate a return, please contact our customer support team at{" "}
          <a href="mailto:returns@herbsofbharat.com" className="text-blue-600">
            returns@herbsofbharat.com
          </a>
          .
        </p>
      </section>

      {/* Terms and Conditions Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold flex items-center text-green-600 mb-4">
          <FileText className="mr-2" /> Terms and Conditions
        </h2>
        <p className="text-gray-700">
          Welcome to Herbs of Bharat. By accessing or using our website, you
          agree to comply with and be bound by these terms and conditions. All
          products sold on our site are intended for personal use only and are
          not to be resold. We reserve the right to update or modify these terms
          at any time without prior notice.
        </p>
        <p className="text-gray-700">
          For a detailed overview, please refer to the full terms and conditions
          on our website.
        </p>
      </section>
    </div>
  );
}
