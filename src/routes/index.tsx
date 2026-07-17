import { ROUTES } from "../constants/routes";
import HomeLayout from "../layouts/HomeLayout";
import BusinessBanking from "../pages/businessbanking/BusinessBanking";
import Home from "../pages/Home";
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
      }
    ],
  },
];