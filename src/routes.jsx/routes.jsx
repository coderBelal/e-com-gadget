import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layouts/Main";
import PreOrderForm from "../components/pages/PreOrder";
import ProductDetail from "../components/pages/ProductDetails";
import ProductDetailCard from "../components/pages/ProductDetailCard";
import ShoppingCart from "../components/pages/ShoppingCart";
import CheckoutPage from "../components/pages/CheckOut";
 
import OfferCards from "../components/pages/OfferCards";
import AllBrands from "../components/pages/AllBrands";
import Dashboard from "../layouts/Dashboard";
import DashboardOverview from "../components/pages/Dashboard/DashboardOverview";
import UserManagement from "../components/pages/Dashboard/UserManagement";
import ListingsManagement from "../components/pages/Dashboard/ListingsManagement";
import Transactions from "../components/pages/Dashboard/Transactions";
import Reports from "../components/pages/Dashboard/Reports";
import CategoriesManagement from "../components/pages/Dashboard/CategoriesManagement";
import Analytics from "../components/pages/Dashboard/Analytics";
import Payments from "../components/pages/Dashboard/Payments";
import Support from "../components/pages/Dashboard/Support";
import Settings from "../components/pages/Dashboard/Settings";
import PhoneTabs from "../components/pages/FeaturePage/PhoneTabs";
import { Macbook } from "../components/pages/FeaturePage/MacBook";
import { HubDocks } from "../components/pages/FeaturePage/HubDocks";
import { SmartWatch } from "../components/pages/FeaturePage/SmartWork";
import { Headphones } from "../components/pages/FeaturePage/Headphone";
import { PowerAdaptor } from "../components/pages/FeaturePage/PowerAdaptor";
import { CoverGlass } from "../components/pages/FeaturePage/CoverGlass";
import OrderTracking from "../components/pages/Dashboard/OrderTracking";
import CourierCheck from "../components/pages/Dashboard/CourierCheck";
import OrderPending from "../components/pages/Dashboard/OrderPending";
import OrdersCompleted from "../components/pages/Dashboard/OrdersCompleted";
import OrderCancel from "../components/pages/Dashboard/OrderCancel";
import ProcessingOrder from "../components/pages/Dashboard/ProcessingOrder";
import OrderDetails from "../components/pages/Dashboard/OrderDetails";
import { elements } from "chart.js";

import LoginPage from "../auth/LoginPage";
import AdminLogin from "../auth/Admin/AdminLogin";
import SubcategoryManager from "../components/pages/Dashboard/SubCategoriesManagement";
import BrandManagement from "../components/pages/Dashboard/BrandManagement";
import ProductManagment from "../components/pages/Dashboard/ProductManagment";

import Compare from "../components/pages/Compare";
import ErrorPage from "../components/pages/ErrorPage";
import TermsAndCondition from "../components/pages/TermsAndCondition";
import AboutUs from "../components/pages/AboutUs";
import PrivacyAndPolicy from "../components/pages/PrivacyAndPolicy";
 

export const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Main/>, 
    // errorElement: <CommingSoon />, 
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path:"/pre-order",
            element: <PreOrderForm/>
        },
        {
            path:"/products/:productId",
            element: <ProductDetail/>
        },
        {
            path:"/products/:productId",
            element: <ProductDetailCard/>
        },
        {
            path:"/cart",
            element: <ShoppingCart/>
        },
        {
            path:"/checkout",
            element: <CheckoutPage/>
        },
      
        {
            path:"/offer-card",
            element: <OfferCards/>
        },
        {
            path:"/all-brand",
            element: <AllBrands/>
        },
        {
            path:"/phone-tabs",
            element:<PhoneTabs/>
        },
        {
            path:"/mac-book",
            element:<Macbook/>
        },
        {
            path:"/hub-docs",
            element:<HubDocks/>
        },
        {
            path:"/smart-watch",
            element:<SmartWatch/>
        },{
            path:"/headphone",
            element:<Headphones/>
        },
        {
            path:"/power-adaptor",
            element:<PowerAdaptor/>
        }
        ,
        {
            path:"/cover-glass",
            element:<CoverGlass/>
        },
        {
            path:"/login",
            element:<LoginPage/>
        },
{
            path:"/compare",
            element:<Compare/>
        },
        {
            path:"*",
            element:<ErrorPage/>
        },

        {
            path: "/admin-login",
            element: <AdminLogin/>
        },
        {
            path:"/termsandcondition",
            element:<TermsAndCondition/>
        },
        {
            path:"/aboutus",
            element:<AboutUs/>
        },
        {
            path:"/privacyandpolicy",
            element:<PrivacyAndPolicy/>
        }
    ] 
    }, 

    {
        path: "/dashboard",
        element: <Dashboard/>,
        children: [
            {
                path: "/dashboard",
                element: <DashboardOverview/>
            },

           
           
            {
                path: "/dashboard/users",
                element: <UserManagement />,
            },
            {
                path: "/dashboard/listings",
                element: <ListingsManagement />,
            },
            {
                path: "/dashboard/transactions",
                element: <Transactions />,
            },
            {
                path: "/dashboard/order-pending",
                element: <OrderPending />,
              },
              {
                path: "/dashboard/order-pending/order/:OrderId",
                element: <OrderDetails />,
              },
              
             {
                path:"/dashboard/order-completed",
                element:<OrdersCompleted/>
             },
             {
                path:"/dashboard/order-cancel",
                element:<OrderCancel/>
             },
             {
                path:"/dashboard/order-processing",
                element:<ProcessingOrder/>
             },
            {
                path: "/dashboard/reports",
                element: <Reports />,
            },
            {
                path: "/dashboard/subcategoryManager",
                element: <SubcategoryManager />,
            },
            {
                path: "/dashboard/productManager",
                element: <ProductManagment />,
            },
            {
                path: "/dashboard/brand",
                element: <BrandManagement />,
            },
            
            {
                path: "/dashboard/categories",
                element: <CategoriesManagement />,
            },
            {
                path: "/dashboard/analytics",
                element: <Analytics />,
            },
            {
                path: "/dashboard/order-tracking",
                element:<OrderTracking/>  ,
            },
            {
                path: "/dashboard/courier-check",
                element:  <CourierCheck/>,
            },
            {
                path: "/dashboard/payments",
                element: <Payments />,
            },
            {
                path: "/dashboard/support",
                element: <Support />,
            },
            {
                path: "/dashboard/settings",
                element: <Settings />,
            },
            
        ]
    },


   ]);