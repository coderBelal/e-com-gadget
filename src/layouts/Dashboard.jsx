import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaCar, FaMotorcycle, FaDollarSign, FaChartLine, FaCog, FaSignOutAlt, FaLock, FaUnlock, FaUserCircle, FaTachometerAlt, FaUsers, FaMobileAlt, FaExchangeAlt, FaExclamationCircle, FaTags, FaChartBar, FaPen, FaBell, FaMoneyBillWave, FaHeadset } from "react-icons/fa";

const sidebarVariants = {
  collapsed: { width: "80px", transition: { duration: 0.3 } },
  expanded: { width: "250px", transition: { duration: 0.3 } },
};

const SidebarItem = ({ label, Icon, isCollapsed, to }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-3 cursor-pointer rounded-md hover:bg-gray-800 transition-all duration-300 ${
      isCollapsed ? "justify-center" : ""
    }`}
  >
    <Icon className="text-gray-400 scale-75" size={24} />
    <span className={`text-gray-300 font-medium ${isCollapsed ? "hidden" : "block"}`}>{label}</span>
  </Link>
);

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isLocked, setIsLocked] = useState(false);

  const handleMouseEnter = () => {
    if (!isLocked) setIsCollapsed(false);
  };

  const handleMouseLeave = () => {
    if (!isLocked) setIsCollapsed(true);
  };

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div className=" flex p-5 gap-5">
      {/* Sidebar */}
      <motion.div
        className="bg-[#101623] shadow-sm p-3 rounded-lg flex flex-col gap-2 overflow-hidden h-full fixed left-0 top-0 bottom-0"
        variants={sidebarVariants}
        initial={isCollapsed ? "collapsed" : "expanded"}
        animate={isCollapsed ? "collapsed" : "expanded"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Lock/Unlock Button */}
        <div
          className={`absolute top-4 right-4 cursor-pointer ${
            isCollapsed ? "hidden" : "block"
          }`}
          onClick={toggleLock}
        >
          {isLocked ? (
            <FaLock className="text-gray-400" size={20} />
          ) : (
            <FaUnlock className="text-gray-400" size={20} />
          )}
        </div>

        {/* Sidebar Header */}
        {!isCollapsed && <h2 className="text-base mt-1 font-semibold mb-4 text-gray-300 pl-5">Admin Dashboard</h2>}

        {/* Sidebar Items */}
        <SidebarItem label="Dashboard" Icon={FaTachometerAlt} isCollapsed={isCollapsed} to="/dashboard" />
<SidebarItem label="Users" Icon={FaUsers} isCollapsed={isCollapsed} to="/dashboard/users" />
{/* <SidebarItem label="Listings" Icon={FaMobileAlt} isCollapsed={isCollapsed} to="/dashboard/listings" /> */}
<SidebarItem label="Order" Icon={FaMobileAlt} isCollapsed={isCollapsed} to="" />
<SidebarItem label="Order Pending" Icon={FaMobileAlt} isCollapsed={isCollapsed} to="/dashboard/order-pending" />
<SidebarItem label="Order Completed" Icon={FaMobileAlt} isCollapsed={isCollapsed} to="/dashboard/order-completed" />
<SidebarItem label="Order  Processing" Icon={FaMobileAlt} isCollapsed={isCollapsed} to="/dashboard/order-processing" />
<SidebarItem label="Order  Cancel" Icon={FaMobileAlt} isCollapsed={isCollapsed} to="/dashboard/order-cancel" />
<SidebarItem label="Transactions" Icon={FaExchangeAlt} isCollapsed={isCollapsed} to="/dashboard/transactions" />
{/* <SidebarItem label="Reports" Icon={FaExclamationCircle} isCollapsed={isCollapsed} to="/dashboard/reports" /> */}
<SidebarItem label="Categories" Icon={FaTags} isCollapsed={isCollapsed} to="/dashboard/categories" />
<SidebarItem label="Analytics" Icon={FaChartBar} isCollapsed={isCollapsed} to="/dashboard/analytics" />
 
<SidebarItem label="Order Tracking" Icon={FaPen} isCollapsed={isCollapsed} to="/dashboard/order-tracking" />
<SidebarItem label="CourierCheck" Icon={FaBell} isCollapsed={isCollapsed} to="/dashboard/courier-check" />
<SidebarItem label="Payments" Icon={FaMoneyBillWave} isCollapsed={isCollapsed} to="/dashboard/payments" />
<SidebarItem label="Support" Icon={FaHeadset} isCollapsed={isCollapsed} to="/dashboard/support" />
<SidebarItem label="Settings" Icon={FaCog} isCollapsed={isCollapsed} to="/dashboard/settings" />

        <SidebarItem label="Logout" Icon={FaSignOutAlt} isCollapsed={isCollapsed} to="/dashboard/logout" />
      </motion.div>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col gap-5 transition-all duration-300 absolute right-0  ${
          isCollapsed ? "ml-[80px] w-[92%]" : "ml-[250px] w-[79%]"
        }`}
      >
         {/* <div className="bg-[#101623] p-5 shadow-sm rounded-lg flex items-center justify-between">
          <div className="text-[#EC4899] text-xl font-semibold">Rental Seba</div>
          <div className="flex items-center gap-2">
            <span className="text-gray-300 font-medium">Hello, Admin</span>
            <FaUserCircle className="text-gray-400" size={30} />
          </div>
        </div> */}
        <div className="bg-[#101623] py-5 px-5 shadow-sm rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
