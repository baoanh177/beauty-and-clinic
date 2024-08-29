import DefaultLayout from "@/layouts/DefaultLayout";
import { IRoute } from "./renderRoutes";
import Home from "@/pages/Home";
import Home2 from "@/pages/Home2";
import Home2Layout from "@/layouts/Home2Layout";
import About from "@/pages/About";

export const routes: IRoute[] = [
  {
    path: "/",
    layout: () => <DefaultLayout />,
    pages: [
      {
        path: "/",
        element: () => <Home />,
      },
      {
        path: "/about",
        element: () => <About />,
      },
    ],
  },
  {
    path: "/",
    layout: () => <Home2Layout />,
    pages: [
      {
        path: "/home2",
        element: () => <Home2 />,
      },
    ]
  }
];
