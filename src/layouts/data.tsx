export interface IMenuItem {
  key: string;
  name: string;
  path: string;
}

export const menu: IMenuItem[] = [
  {
    key: "",
    name: "Home",
    path: "/",
  },
  {
    key: "home2",
    name: "Home 2",
    path: "/home2",
  },
  {
    key: "team",
    name: "Team",
    path: "/team",
  },
  {
    key: "about",
    name: "About",
    path: "/about",
  },
  {
    key: "service",
    name: "Service",
    path: "/service",
  },
  {
    key: "gallery",
    name: "Gallery",
    path: "/gallery",
  },
  {
    key: "blog",
    name: "Blog",
    path: "/blog",
  },
];
