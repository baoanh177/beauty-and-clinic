interface IMenuItem {
  key: string;
  name: string;
  path: string;
}

export const menu: IMenuItem[] = [
  {
    key: "home2",
    name: "Home",
    path: "/home2",
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