const AboutUs = () => {
    return (
      <div className=" min-h-screen lg:mt-24 p-8">
        <div className="max-w-4xl mx-auto  border border-purple-700  shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold    mt-12   gradient-text  mb-4">About Us</h1>
          <p className="text-gray-300 mb-4">
            Welcome to Gadget and Tech, your one-stop solution for the latest gadgets, tech insights, and innovative solutions. We are committed to providing our customers with high-quality products and exceptional service.
          </p>
  
          <h2 className="text-xl font-semibold    gradient-text mb-2">Our Mission</h2>
          <p className="text-gray-300 mb-4">
            At Gadget and Tech, our mission is to empower people with technology. We aim to bridge the gap between innovation and accessibility, ensuring that everyone can experience the best of modern technology.
          </p>
  
          <h2 className="text-xl font-semibold   gradient-text mb-2">Our Values</h2>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>Customer Satisfaction</li>
            <li>Innovation and Excellence</li>
            <li>Integrity and Transparency</li>
            <li>Community Engagement</li>
          </ul>
  
          <h2 className="text-xl font-semibold    gradient-text mb-2">Why Choose Us?</h2>
          <p className="text-gray-300 mb-4">
            With years of experience in the tech industry, we offer unparalleled expertise, a curated selection of top-tier products, and dedicated support to help you find what you need.
          </p>
  
          <h2 className="text-xl font-semibold     gradient-text mb-2">Contact Us</h2>
          <p className="text-gray-300 mb-4">
            Got questions or feedback? We’d love to hear from you! Reach out to us at <a href="mailto:contact@gadgetandtech.com" className="text-blue-500 underline">contact@gadgetandtech.com</a>.
          </p>
  
          <div className="mt-6 text-center">
            <button className="   gradient-bg text-white py-2 px-4 rounded hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  