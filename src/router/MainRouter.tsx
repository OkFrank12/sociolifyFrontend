import { createBrowserRouter } from "react-router-dom";
import LayOut from "../components/common/LayOut";
import UserPoolPage from "../pages/UserPoolPage";
import NewUser from "../pages/NewUser";
import SearchUser from "../pages/SearchUser";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <UserPoolPage />,
      },
      {
        path: "/:userID/:friendID/accepted",
        element: <UserPoolPage />,
        index: true,
      },
      {
        path: "/:userID/:friendID/declined",
        element: <UserPoolPage />,
        index: true,
      },
      {
        path: "/join",
        index: true,
        element: <NewUser />,
      },
      {
        path: "/search",
        index: true,
        element: <SearchUser />,
      },
    ],
  },
]);
