import { Home, About } from "@/pages";

export const routes = [
  {
    name: "Início",
    path: "/",
    element: <Home />,
  },
  {
    name: "Sobre Nós",
    path: "/about",
    element: <About />,
  },
  {
    name: "Serviços",
    path: "/",
    // element: <Services />,
  },
  {
    name: "Notícias",
    path: "/",
    // element: <News />,
  },
  {
    name: "Fale Conosco",
    path: "/",
    // element: <Contact />,
  },
];

export default routes;
