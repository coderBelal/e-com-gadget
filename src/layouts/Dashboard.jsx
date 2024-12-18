import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome,  FaCog, FaSignOutAlt, FaLock, FaUnlock, FaUserCircle, FaTachometerAlt, FaUsers,FaBan, FaBox, FaExchangeAlt, FaTags, FaChartBar, FaPen, FaBell, FaMoneyBillWave, FaHeadset, FaHourglassStart, FaCheckCircle, FaTimesCircle,FaClock,FaSpinner, FaList, FaChevronRight, FaFilter, FaTrademark, FaShoppingBag, FaReceipt, FaRegClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { logout } from "../store/actions/userLogout";
import { useDispatch, useSelector } from "react-redux";
import { RiMenuFold4Fill , RiMenuFold3Fill } from "react-icons/ri";
import { LogOut } from "lucide-react";
const sidebarVariants = {
  collapsed: { width: "70px", transition: { duration: 0.3 } },
  expanded: { width: "220px", transition: { duration: 0.3 } },
};

const SidebarItem = ({ label, Icon, isCollapsed, to, onClick, SideIcon }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-3 cursor-pointer rounded-md hover:bg-gray-800 transition-all duration-300 ${
      isCollapsed ? "justify-center" : ""
    }`}
    onClick={onClick}
  >
    <Icon className="text-gray-400 scale-75" size={24} />

    <span className={`text-gray-300 font-medium ${isCollapsed ? "hidden" : "block"}`}>{label}</span>
    {SideIcon && <SideIcon className="text-gray-400 scale-75" size={40} />} 
  </Link>
);

const SidebarMobilItem = ({ label, Icon,  to, onClick,SideIcon }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-3 cursor-pointer rounded-md hover:bg-gray-800 transition-all duration-300  justify-start `}
    onClick={onClick}  // Add onClick to handle dropdown toggle
  >
    <Icon className="text-gray-400 scale-75" size={24} />
    <span className={`text-gray-300 font-medium `}>{label}</span>
    {SideIcon && <SideIcon className="text-gray-400 scale-75" size={40} />} 
  </Link>
);

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isLocked, setIsLocked] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);  // State to manage Order dropdown
  const [isProductOpen, setIsProductOpen] = useState(false); 
  const handleMouseEnter = () => {
    if (!isLocked) setIsCollapsed(false);
  };

  const handleMouseLeave = () => {
    if (!isLocked) setIsCollapsed(true);
  };

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };
  const toggleProductDropdown = () => {
    setIsProductOpen(!isProductOpen);  // Toggle the dropdown visibility
  };

  
  const toggleOrderDropdown = () => {
    setIsOrderOpen(!isOrderOpen);  // Toggle the dropdown visibility
  };


  ///// Mobile/////
  const [isOpenMobil, setIsOpenMobil] = useState(false);

  // Sidebar toggle function
  const toggleMobilSidebar = () => {
    setIsOpenMobil(!isOpenMobil);
  };

  // Close sidebar on outside click
  const handleClose = (e) => {
    if (e.target.id === "overlay") {
      setIsOpenMobil(false);
    }
  };

 const navigate = useNavigate()
  const userState = useSelector((state) => state.user);
  const userId = userState?.userInfo?.data?.user?._id;
  console.log(userState)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
 

const location = useLocation()
  // Ensure hooks are not conditionally used
  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        if (userState?.userInfo?.user && userState?.userInfo?.user?.role === "superadmin" || userState?.userInfo?.user?.role === "admin") {
          setIsAdmin(true);
        } else {
          navigate("/");
          toast.error("You are not allowed to access the admin panel.");
        }
      } catch (error) {
        console.error(error);
        navigate("/");
        toast.error("Failed to check admin status.");
      } finally {
        setLoading(false);
      }
    };

    checkAdminStatus();
  }, [userState, navigate]);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };


  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h3 className="text-2xl text-slate-700">Loading...</h3>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }
  return (

    <div>
    {/* Desktop & large Device */}
    <div className="lg:flex hidden p-5 gap-5">
      {/* Sidebar */}
      <motion.div
        className="bg-[#101623] shadow-sm  z-[1000] p-1 overflow-y-scroll rounded-lg flex flex-col gap-2 overflow-hidden h-full fixed left-0 top-0 bottom-0"
        variants={sidebarVariants}
        initial={isCollapsed ? "collapsed" : "expanded"}
        animate={isCollapsed ? "collapsed" : "expanded"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Lock/Unlock Button */}
        <div
          className={`absolute top-4 right-4 cursor-pointer ${isCollapsed ? "hidden" : "block"}`}
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

        {/* Order Item with Dropdown Toggle */}
        {!isCollapsed && (
  <div>
    <SidebarItem 
      label="Order" 
      Icon={FaReceipt} 
      isCollapsed={isCollapsed} 
      to="" 
      SideIcon={IoMdArrowDropdown}  
      onClick={toggleOrderDropdown} 
    />
    {isOrderOpen && ( // Only show this when the sidebar is expanded
      <div className="ml-5">
        <SidebarItem label="Order Pending" Icon={FaClock} isCollapsed={isCollapsed} to="/dashboard/order-pending" />
        <SidebarItem label="Order Completed" Icon={FaCheckCircle} isCollapsed={isCollapsed} to="/dashboard/order-completed" />
        <SidebarItem label="Order Processing" Icon={FaSpinner} isCollapsed={isCollapsed} to="/dashboard/order-processing" />
        <SidebarItem label="Order Cancel" Icon={FaBan} isCollapsed={isCollapsed} to="/dashboard/order-cancel" />
      </div>
    )}
  </div>
)}

{!isCollapsed && (  // Only show this when the sidebar is expanded
          <div>
            <SidebarItem 
              label="Products" 
              Icon={FaRegClock} 
              isCollapsed={isCollapsed} 
              to="" 
              SideIcon={IoMdArrowDropdown} 
              onClick={toggleProductDropdown}  // Trigger toggle
            />
            {isProductOpen && (  // Show dropdown if order is open
              <div className="ml-5">
              <SidebarItem label="Categories" Icon={ FaList} isCollapsed={isCollapsed} to="/dashboard/categories" />
              <SidebarItem label="subcategory" Icon={FaFilter} isCollapsed={isCollapsed} to="/dashboard/subcategoryManager" />
              <SidebarItem label="brand" Icon={FaTrademark} isCollapsed={isCollapsed} to="/dashboard/brand" />
              <SidebarItem label="product" Icon={FaShoppingBag} isCollapsed={isCollapsed} to="/dashboard/productManager" />
              </div>
            )}
          </div>
        )}



        <SidebarItem label="Transactions" Icon={FaExchangeAlt} isCollapsed={isCollapsed} to="/dashboard/transactions" />
       
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
        <div className="bg-[#101623] py-5 px-5 shadow-sm rounded-lg">
          <Outlet />
        </div>
      </div>
    </div> 
    
    
    
     <div className="lg:hidden block">
     <div>
      {/* Menu Button */}
      <div className="w-full flex justify-between items-center gap-2 px-2 py-2 bg-[#101623] mb-2">
      <button
        onClick={toggleMobilSidebar}
        className="p-2 bg-blue-600 text-white rounded-md"
      >
       <RiMenuFold3Fill />
      </button>
      <h2 className="text-white">Admin Dashboard</h2>
      <div onClick={LogOut}>
        <LogOut color="#ffffff"></LogOut>
      </div>
      </div>
    

      {/* Sidebar Overlay */}
      {isOpenMobil && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] overflow-y-auto bg-white/10 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpenMobil ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          {/* Close Button */}
          <button
            onClick={toggleMobilSidebar}
            className="p-2 bg-red-500 text-white rounded-md flex justify-end"
          >
            <RiMenuFold4Fill />
          </button>
          {/* Sidebar Content */}
          <ul className="mt-5 space-y-4 ">
             {/* Sidebar Items */}
        <SidebarMobilItem label="Dashboard" Icon={FaTachometerAlt} onClick={toggleMobilSidebar} to="/dashboard" />
        <SidebarMobilItem label="Users" Icon={FaUsers} onClick={toggleMobilSidebar} to="/dashboard/users" />

      
          <div>
            <SidebarMobilItem 
              label="Order" 
              Icon={FaReceipt} 
              SideIcon={IoMdArrowDropdown}  
              to="" 
              onClick={toggleOrderDropdown}  // Trigger toggle
            />
            {isOrderOpen && (  // Show dropdown if order is open
              <div className="ml-5">
                <SidebarMobilItem label="Order Pending"   Icon={FaClock}  onClick={toggleMobilSidebar} to="/dashboard/order-pending" />
                <SidebarMobilItem label="Order Completed"   Icon={FaCheckCircle}  onClick={toggleMobilSidebar} to="/dashboard/order-completed" />
                <SidebarMobilItem label="Order Processing"   Icon={FaSpinner} onClick={toggleMobilSidebar} to="/dashboard/order-processing" />
                <SidebarMobilItem label="Order Cancel"  Icon={FaBan}  onClick={toggleMobilSidebar} to="/dashboard/order-cancel" />
              </div>
            )}
          </div>


          <div>
            <SidebarMobilItem 
              label="Products" 
              Icon={FaRegClock} 
              SideIcon={IoMdArrowDropdown}  
              to="" 
              onClick={toggleProductDropdown}  // Trigger toggle
            />
            {isProductOpen && (  // Show dropdown if order is open
              <div className="ml-5">
              <SidebarMobilItem label="Categories"  Icon={ FaList}  onClick={toggleMobilSidebar} to="/dashboard/categories" />
              <SidebarMobilItem label="subcategory"  Icon={FaFilter}  onClick={toggleMobilSidebar} to="/dashboard/subcategoryManager" />
              <SidebarMobilItem label="brand" Icon={FaTrademark} onClick={toggleMobilSidebar} to="/dashboard/brand" />
              <SidebarMobilItem label="product"  Icon={FaShoppingBag}  onClick={toggleMobilSidebar} to="/dashboard/productManager" />
              </div>
            )}
          </div>
 



        <SidebarMobilItem label="Transactions" Icon={FaExchangeAlt} onClick={toggleMobilSidebar} to="/dashboard/transactions" />
       
        <SidebarMobilItem label="Analytics" Icon={FaChartBar} onClick={toggleMobilSidebar} to="/dashboard/analytics" />
        <SidebarMobilItem label="Order Tracking" Icon={FaPen} onClick={toggleMobilSidebar} to="/dashboard/order-tracking" />
        <SidebarMobilItem label="CourierCheck" Icon={FaBell} onClick={toggleMobilSidebar} to="/dashboard/courier-check" />
        <SidebarMobilItem label="Payments" Icon={FaMoneyBillWave} onClick={toggleMobilSidebar} to="/dashboard/payments" />
        <SidebarMobilItem label="Support" Icon={FaHeadset} onClick={toggleMobilSidebar} to="/dashboard/support" />
        <SidebarMobilItem label="Settings" Icon={FaCog} onClick={toggleMobilSidebar} to="/dashboard/settings" />
        <SidebarMobilItem label="Logout" Icon={FaSignOutAlt} onClick={toggleMobilSidebar} to="/dashboard/logout" />
          </ul>
        </div>
      </div>

   
        <div className="bg-[#101623] py-5 px-5 shadow-sm rounded-lg">
          <Outlet />
        </div>
    
   
    </div>
  
      </div>
    </div>
  );
};

export default Dashboard;
