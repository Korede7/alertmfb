import { ROUTES } from "../constants/routes";
import HomeLayout from "../layouts/HomeLayout";
import AboutUs from "../pages/about-us/AboutUs";
import BlogPost from "../pages/about-us/BlogPost";
import CareerPage from "../pages/about-us/CareerPage";
import Managements from "../pages/about-us/Managements";
import NewsAndBlogs from "../pages/about-us/NewsAndBlogs";
import BusinessBanking from "../pages/businessbanking/BusinessBanking";
import ContactUs from "../pages/Help-and-support/ContactUs";
import HelpAndSupport from "../pages/Help-and-support/HelpAndSupport";
import Home from "../pages/Home";
import Loans from "../pages/loans/Loans";
import PersonalBanking from "../pages/personalbanking/PersonalBanking";

export const routes = [
  {
    element: <HomeLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ROUTES.PERSONAL_BANKING.PERSONAL_BANKING,
        element: <PersonalBanking />,
      },
      {
        path : ROUTES.BUSINESS_BANKING.OVERVIEW,
        element : <BusinessBanking/>
      },
      {
        path : ROUTES.LOANS.LOANS,
        element : <Loans/>
      },
      {
        path : ROUTES.ABOUT_US.OUR_STORY,
        element : <AboutUs/>
      },
      {
        path : ROUTES.ABOUT_US.CAREERS,
        element : <CareerPage/>
      },
      {
        path : ROUTES.ABOUT_US.MANAGEMENT_TEAM,
        element : <Managements/>
      },
      {
        path : ROUTES.ABOUT_US.NEWS_BLOG,
        element : <NewsAndBlogs/>
      },
      {
        path : ROUTES.ABOUT_US.BLOG_POST,
        element : <BlogPost/>
      },
      {
        path : ROUTES.HELP.CONTACT_US,
        element : <ContactUs/>
      },
      {
        path : ROUTES.HELP.REPORT_FRAUD,
        element : <HelpAndSupport/>
      }

    ],
  },
];