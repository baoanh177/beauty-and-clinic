interface IMenuItem {
  key: string;
  name: string;
  path: string;
}

export const menu: IMenuItem[] = [
  {
    key: "home",
    name: "Home",
    path: "/",
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