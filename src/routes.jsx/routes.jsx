import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layouts/Main";
import PreOrderForm from "../components/pages/PreOrder";
import ProductDetail from "../components/pages/ProductDetails";
import ProductDetailCard from "../components/pages/ProductDetailCard";
import ShoppingCart from "../components/pages/ShoppingCart";
import CheckoutPage from "../components/pages/CheckOut";
import PhoneTabs from "../components/featuredPage/PhoneTabs";
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
            path:"/checkout/:productId",
            element: <CheckoutPage/>
        },
        {
            path:"/phones-tab",
            element: <PhoneTabs/>
        },
        {
            path:"/offer-card",
            element: <OfferCards/>
        },
        {
            path:"/all-brand",
            element: <AllBrands/>
        },
        

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
                path: "/dashboard/reports",
                element: <Reports />,
            },
            {
                path: "/dashboard/categories",
                element: <CategoriesManagement />,
            },
            {
                path: "/dashboard/analytics",
                element: <Analytics />,
            },
            // {
            //     path: "/dashboard/cms",
            //     element: <CMS />,
            // },
            // {
            //     path: "/dashboard/notifications",
            //     element: <Notifications />,
            // },
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