import { ROUTES } from "../constants/routes";
import HomeLayout from "../layouts/HomeLayout";
import AboutUs from "../pages/about-us/AboutUs";
import CareerPage from "../pages/about-us/CareerPage";
import BusinessBanking from "../pages/businessbanking/BusinessBanking";
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
        path : ROUTES.ABOUT_US.OUR_STORY,
        element : <AboutUs/>
      },
      {
        path : ROUTES.ABOUT_US.CAREERS,
        element : <CareerPage/>
      }
    ],
  },
];