import { Home } from "@/pages";

export const routes = [
  {
    name: "Início",
    path: "/",
    element: <Home />,
  },
  {
    name: "Sobre Nós",
    path: "/about",
    // element: <About />,
  },
  {
    name: "Serviços",
    path: "/services",
    // element: <Services />,
  },
  {
    name: "Notícias",
    path: "/news",
    // element: <News />,
  },
  {
    name: "Fale Conosco",
    path: "/contact",
    // element: <Contact />,
  },
];

export default routes;
