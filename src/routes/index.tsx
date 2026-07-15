import { ROUTES } from "../constants/routes";
import HomeLayout from "../layouts/HomeLayout";
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
    ],
  },
];