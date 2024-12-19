import { Link } from "react-router-dom";

 
const Footer = () => {
  return (
    <footer className="mt-32 py-10">
      <div className="container mx-auto px-4">
        {/* Logo and Description */}
        <div className="md:flex justify-between mb-10">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
       
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm border-t border-gray-300 pt-6">
          <div>
            <h4 className="font-semibold text-white mb-3">Mobile Gadgets</h4>
            <ul className="space-y-1 text-white">
              <li>Smartphones</li>
              <li>Tablets</li>
              <li>Smart Watches</li>
              <li>Earphones & Headphones</li>
              <li>Chargers & Accessories</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Laptops & Accessories</h4>
            <ul className="space-y-1 text-white">
              <li>Laptops</li>
              <li>External Hard Drives</li>
              <li>Keyboards & Mice</li>
              <li>Adapters</li>
              <li>Portable Chargers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Smart Devices</h4>
            <ul className="space-y-1 text-white">
              <li>Smart Speakers</li>
              <li>Smart TVs</li>
              <li>AirPods</li>
              <li>Smart Lights</li>
              <li>Home Security Systems</li>
            </ul>
          </div>

          <div className="flex flex-col">
  <h4 className="font-semibold text-white mb-3">Our Company</h4>
  <ul className="space-y-1 text-white">
    <li>
      <Link to="/termsandcondition" >Terms And Condition</Link>
    </li>
    <li>
      <Link to="/aboutus"  >About</Link>
    </li>
    <li>
      <Link to="/privacyandpolicy"  >Privacy and Policy</Link>
    </li>
  </ul>
</div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex justify-between items-center text-sm text-white">
          <p>© 2024 All Rights Reserved.</p>
          <div className="flex space-x-4">
            <img src="/path-to-paypal-logo.png" alt="PayPal" className="h-6" />
            <img src="/path-to-visa-logo.png" alt="Visa" className="h-6" />
            <img src="/path-to-mastercard-logo.png" alt="Mastercard" className="h-6" />
            <img src="/path-to-stripe-logo.png" alt="Stripe" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
