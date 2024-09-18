import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import MainSideBar from "./MainSideBar/MainSideBar";
import NewLaptop from "./MainSideBar/NewLaptops";
import UsedLaptops from "./MainSideBar/UsedLaptops";
import Apple from "./MainSideBar/Apple";
import Tablets from "./MainSideBar/Tablets";
import Desktop from "./MainSideBar/Desktop";
import HardDrive from "./MainSideBar/HardDrive";
import Printers from "./MainSideBar/Printers";
import Scanners from "./MainSideBar/Scanners";
import Gadgets from "./MainSideBar/Gadgets";
import Cameras from "./MainSideBar/Cameras";
import Multimedia from "./MainSideBar/Multimedia";
import Gaming from "./MainSideBar/Gaming";
import DailyDeals from "./header2components/DailyDeals";
import MyAccount from "./headercomponents/MyAccount";
import WishList from "./headercomponents/WishList";
import MyCart from "./headercomponents/MyCart";
import BestSeller from "./header2components/BestSeller";
import Blog from "./header2components/Blog";
import ContactUs from "./header2components/ContactUs";
import CrouselMain from "./components/CrouselMain";
import GamingLaptop from "./components/GamingLaptop";
import NewLaptops from "./MainSideBar/NewLaptops";
import LaptopDetails from "./components/LaptopDetails";
import Banners from "./components/Banners";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import CategoryDetailPage from "./components/CategoryDetailPage";
import SubcategoryDetailPage from "./components/SubcategoryDetailPage";
import CreateAccount from "./headercomponents/CreateAccount";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: (
            <>
              <div className="d-flex">
                <MainSideBar />
                <CrouselMain />
              </div>
              
                <NewLaptops />
                <GamingLaptop />
                <Banners/>
                <FeatureSection/>
                <Footer/>
            </>
          ),
        },
        {
          path: "/newlaptops",
          element: <NewLaptop />,
        },
        {
          path: "/usedlaptops",
          element: <UsedLaptops />,
        },
        {
          path: "/apple",
          element: <Apple />,
        },
        {
          path: "/tablets",
          element: <Tablets />,
        },
        {
          path: "/desktop",
          element: <Desktop />,
        },
        {
          path: "/harddrive",
          element: <HardDrive />,
        },
        {
          path: "/printers",
          element: <Printers />,
        },
        {
          path: "/scanners",
          element: <Scanners />,
        },
        {
          path: "/gadgets",
          element: <Gadgets />,
        },
        {
          path: "/cameras",
          element: <Cameras />,
        },
        {
          path: "/multimedia",
          element: <Multimedia />,
        },
        {
          path: "/gaming",
          element: <Gaming />,
        },
        {
          path: "/dailydeals",
          element: <DailyDeals />,
        },
        {
          path: "/myaccount",
          element: <MyAccount />,
        },
        {
          path: "/wishlist",
          element: <WishList />,
        },
        {
          path: "/mycart",
          element: <MyCart />,
        },
        {
          path: "/bestseller",
          element: <BestSeller />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/contactUs",
          element: <ContactUs />,
        },
        {
          path:"/laptopDetails/:id",
          element:<LaptopDetails/>
        },
        {
          path:"/category/:categoryName",
          // element:<CategoryDetailPage/>
        },
        {
          path:"/subcategory/:subcategoryName",
          element:<SubcategoryDetailPage/>    
        },
        {
          path:"/createAccount",
          element:<CreateAccount/>
        },      
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
