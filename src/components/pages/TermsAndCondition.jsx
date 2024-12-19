const TermsAndCondition = () => {
    return (
      <div className="  min-h-screen mt-24 p-8">
        <div className="max-w-4xl mx-auto border  border-purple-700 shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold   gradient-text  mb-4">Terms and Conditions</h1>
          <p className="text-gray-300 mb-4">
            Welcome to Gadget and Tech! By using our services, you agree to the following terms and conditions. Please read them carefully before proceeding.
          </p>
  
          <h2 className="text-xl font-semibold gradient-text mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-300 mb-4">
            By accessing or using the Gadget and Tech website or services, you agree to be bound by these terms. If you do not agree, please discontinue use.
          </p>
  
          <h2 className="text-xl font-semibold gradient-text  mb-2">2. Intellectual Property</h2>
          <p className="text-gray-300 mb-4">
            All content provided on this site, including logos, images, and text, is the property of Gadget and Tech and is protected by copyright laws.
          </p>
  
          <h2 className="text-xl font-semibold gradient-text  mb-2">3. User Responsibilities</h2>
          <p className="text-gray-300 mb-4">
            Users are expected to use our services responsibly. Any misuse, illegal activity, or unauthorized use of our resources may result in termination of access.
          </p>
  
          <h2 className="text-xl font-semibold gradient-text  mb-2">4. Limitation of Liability</h2>
          <p className="text-gray-300 mb-4">
            Gadget and Tech will not be held liable for any direct, indirect, or incidental damages arising from the use of our website or services.
          </p>
  
          <h2 className="text-xl font-semibold gradient-text  mb-2">5. Changes to Terms</h2>
          <p className="text-gray-300 mb-4">
            We reserve the right to update or modify these terms at any time without prior notice. Please check this page regularly for updates.
          </p>
  
          <p className="text-gray-300 mb-4">
            If you have any questions regarding our terms and conditions, please contact us at <a href="mailto:support@gadgetandtech.com" className="text-blue-500 underline">support@gadgetandtech.com</a>.
          </p>
  
          <div className="mt-6 text-center">
            <button className="    gradient-bg text-white py-2 px-4 rounded hover:bg-blue-600">
              Accept and Continue
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TermsAndCondition;
  