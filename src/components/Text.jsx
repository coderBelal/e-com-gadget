// import React from "react";

// function Text() {
//   const sections = [
//     {
//       title: "Top Gadget Shop in Bangladesh",
//       content:
//         "We are now going through a period when technology brings the revolution. From dawn to dusk every moment in our life is connected to technology. Various kinds of smart gadgets become inseparable parts of our daily life. Consistent with the demand there is a huge gadget-selling market globally including Bangladesh. In Bangladesh, Gadget and Text is a top-tier gadget-selling shop. They provide consumers a huge collection of gadgets: Phones & Tablets, Laptops & Desktops, Accessories, Smart Home Appliances etc. Gadget and Text satisfies its huge customer base both online and offline. Currently, it serves customers with four outlets around Dhaka city at four different locations. Best customer service makes Gadget and Text a trustworthy retail gadgets shop in Dhaka, Bangladesh.",
//     },
//     {
//       title: "Best Phones & Tablets Online Shop in Bangladesh",
//       content:
//         "From early morning alarm to watching a movie at late night laying on your bed. Literally, we do half of our daily tasks with our smartphones. Phones are now a 24/7 component in our life. Alike phones the demand for tablets is also uplifting rapidly. But, the problem is to find a reliable shop to buy phones and tablets. In terms of buying phones and tablets, Gadget and Text is a name of trust here in Bangladesh. They furnish their outlets with a large number of smartphones from top-notch brands. Such as iPhone, Samsung, Google, Xiaomi, OnePlus, Oppo, Vivo, Motorola, Infinix, Huawei, Honor, Nokia, and many more. Whether you want a smartphone, feature phone, or tablet for your official work, get it from Gadget and Text through online or offline.",
//     },
//     {
//       title: "Leading Mobile Accessories Shop in Bangladesh",
//       content:
//         "From early morning alarm to watching a movie at late night laying on your bed. Literally, we do half of our daily tasks with our smartphones. Phones are now a 24/7 component in our life. Alike phones the demand for tablets is also uplifting rapidly. But, the problem is to find a reliable shop to buy phones and tablets. In terms of buying phones and tablets, Gadget and Text is a name of trust here in Bangladesh. They furnish their outlets with a large number of smartphones from top-notch brands. Such as iPhone, Samsung, Google, Xiaomi, OnePlus, Oppo, Vivo, Motorola, Infinix, Huawei, Honor, Nokia, and many more. Whether you want a smartphone, feature phone, or tablet for your official work, get it from Gadget and Text through online or offline.",
//     },
//     {
//       title: "Prominent Smartwatch Online Shop in Bangladesh",
//       content:
//         "From early morning alarm to watching a movie at late night laying on your bed. Literally, we do half of our daily tasks with our smartphones. Phones are now a 24/7 component in our life. Alike phones the demand for tablets is also uplifting rapidly. But, the problem is to find a reliable shop to buy phones and tablets. In terms of buying phones and tablets, Gadget and Text is a name of trust here in Bangladesh. They furnish their outlets with a large number of smartphones from top-notch brands. Such as iPhone, Samsung, Google, Xiaomi, OnePlus, Oppo, Vivo, Motorola, Infinix, Huawei, Honor, Nokia, and many more. Whether you want a smartphone, feature phone, or tablet for your official work, get it from Gadget and Text through online or offline.",
//     },
//     {
//       title: "Top AirPods & Earbuds Shop in Dhaka, Bangladesh",
//       content:
//         "From early morning alarm to watching a movie at late night laying on your bed. Literally, we do half of our daily tasks with our smartphones. Phones are now a 24/7 component in our life. Alike phones the demand for tablets is also uplifting rapidly. But, the problem is to find a reliable shop to buy phones and tablets. In terms of buying phones and tablets, Gadget and Text is a name of trust here in Bangladesh. They furnish their outlets with a large number of smartphones from top-notch brands. Such as iPhone, Samsung, Google, Xiaomi, OnePlus, Oppo, Vivo, Motorola, Infinix, Huawei, Honor, Nokia, and many more. Whether you want a smartphone, feature phone, or tablet for your official work, get it from Gadget and Text through online or offline.",
//     },
//   ];
//  ;

//   return (
//     <div className="text-gray-800 min-h-screen p-4 mx-auto max-w-7xl">
//       <div>
//         {sections.map((section, index) => (
//           <div
//             key={index}
//             className="p-6 rounded-lg"
//             data-aos={index % 2 === 0 ? "zoom-in" : "zoom-out"}
//           >
//             <h2 className="text-xl gradient-text font-semibold mb-4">
//               {section.title}
//             </h2>
          
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Text;
 

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Text = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-10">
      <div id="accordion-flush">
        {/* Accordion Item 1 */}
        <h3 id="accordion-flush-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 px-4 font-medium text-left border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            onClick={() => handleToggle(1)}
          >
            <span>Top Gadget Shop in Bangladesh</span>
            <motion.svg
              initial={{ rotate: 0 }}
              animate={{ rotate: activeIndex === 1 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </motion.svg>
          </button>
        </h3>
        <AnimatePresence>
          {activeIndex === 1 && (
            <motion.div
              key="content-1"
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="py-5 border-b border-gray-200 dark:border-gray-700"
            >
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              We are now going through a period when technology brings the revolution. From dawn to dusk every moment in our life is connected to technology. Various kinds of smart gadgets become inseparable parts of our daily life. Consistent with the demand there is a huge gadget-selling market globally including Bangladesh. In Bangladesh, Gadget and Text is a top-tier gadget-selling shop. They provide consumers a huge collection of gadgets: Phones & Tablets, Laptops & Desktops, Accessories, Smart Home Appliances etc. Gadget and Text satisfies its huge customer base both online and offline. Currently, it serves customers with four outlets around Dhaka city at four different locations. Best customer service makes Gadget and Text a trustworthy retail gadgets shop in Dhaka, Bangladesh.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Accordion Item 2 */}
        <h3 id="accordion-flush-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 px-4 font-medium text-left border-b border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400"
            onClick={() => handleToggle(2)}
          >
            <span>Best Phones & Tablets Online Shop in Bangladesh</span>
            <motion.svg
              initial={{ rotate: 0 }}
              animate={{ rotate: activeIndex === 2 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </motion.svg>
          </button>
        </h3>
        <AnimatePresence>
          {activeIndex === 2 && (
            <motion.div
              key="content-2"
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="py-5 border-b border-gray-200 dark:border-gray-700"
            >
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              We are now going through a period when technology brings the revolution. From dawn to dusk every moment in our life is connected to technology. Various kinds of smart gadgets become inseparable parts of our daily life. Consistent with the demand there is a huge gadget-selling market globally including Bangladesh. In Bangladesh, Gadget and Text is a top-tier gadget-selling shop. They provide consumers a huge collection of gadgets: Phones & Tablets, Laptops & Desktops, Accessories, Smart Home Appliances etc. Gadget and Text satisfies its huge customer base both online and offline. Currently, it serves customers with four outlets around Dhaka city at four different locations. Best customer service makes Gadget and Text a trustworthy retail gadgets shop in Dhaka, Bangladesh.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Accordion Item 3 */}
        <h3 id="accordion-flush-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 px-4 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            onClick={() => handleToggle(3)}
          >
            <span>Leading Mobile Accessories Shop in Bangladesh</span>
            <motion.svg
              initial={{ rotate: 0 }}
              animate={{ rotate: activeIndex === 3 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </motion.svg>
          </button>
        </h3>
        <AnimatePresence>
          {activeIndex === 3 && (
            <motion.div
              key="content-3"
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="py-5 border-b border-gray-200 dark:border-gray-700"
            >
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              We are now going through a period when technology brings the revolution. From dawn to dusk every moment in our life is connected to technology. Various kinds of smart gadgets become inseparable parts of our daily life. Consistent with the demand there is a huge gadget-selling market globally including Bangladesh. In Bangladesh, Gadget and Text is a top-tier gadget-selling shop. They provide consumers a huge collection of gadgets: Phones & Tablets, Laptops & Desktops, Accessories, Smart Home Appliances etc. Gadget and Text satisfies its huge customer base both online and offline. Currently, it serves customers with four outlets around Dhaka city at four different locations. Best customer service makes Gadget and Text a trustworthy retail gadgets shop in Dhaka, Bangladesh.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Accordion Item 4 */}
        <h3 id="accordion-flush-heading-4">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 px-4 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            onClick={() => handleToggle(4)}
          >
            <span>Prominent Smartwatch Online Shop in Bangladesh</span>
            <motion.svg
              initial={{ rotate: 0 }}
              animate={{ rotate: activeIndex === 4 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </motion.svg>
          </button>
        </h3>
        <AnimatePresence>
          {activeIndex === 4 && (
            <motion.div
              key="content-4"
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="py-5 border-b border-gray-200 dark:border-gray-700"
            >
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              We are now going through a period when technology brings the revolution. From dawn to dusk every moment in our life is connected to technology. Various kinds of smart gadgets become inseparable parts of our daily life. Consistent with the demand there is a huge gadget-selling market globally including Bangladesh. In Bangladesh, Gadget and Text is a top-tier gadget-selling shop. They provide consumers a huge collection of gadgets: Phones & Tablets, Laptops & Desktops, Accessories, Smart Home Appliances etc. Gadget and Text satisfies its huge customer base both online and offline. Currently, it serves customers with four outlets around Dhaka city at four different locations. Best customer service makes Gadget and Text a trustworthy retail gadgets shop in Dhaka, Bangladesh.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Text;
