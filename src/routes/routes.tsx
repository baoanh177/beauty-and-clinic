import DefaultLayout from "@/layouts/DefaultLayout";
import { IRoute } from "./renderRoutes";
import Home from "@/pages/Home";
import Home2 from "@/pages/Home2";
import Home2Layout from "@/layouts/Home2Layout";
import About from "@/pages/About";
import Service from "@/pages/Service";
import Gallery from "@/pages/Gallery";
import Team from "@/pages/Team";
import Blog from "@/pages/Blog";
import BlogLayout from "@/layouts/BlogLayout";
import Contact from "@/pages/Contact";

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
      {
        path: "/service",
        element: () => <Service />,
      },
      {
        path: "/gallery",
        element: () => <Gallery />,
      },
      {
        path: "/team",
        element: () => <Team />,
      },
      {
        path: "/contact",
        element: () => <Contact />,
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
  },
  {
    path: "/",
    layout: () => <BlogLayout />,
    pages: [
      {
        path: "/blog",
        element: () => <Blog />,
      },
    ]
  }
];
