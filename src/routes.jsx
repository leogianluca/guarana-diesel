import { Home, About } from "@/pages";

export const routes = [
  {
    name: "Início",
    path: "/",
    element: <Home />,
  },
  {
    name: "Sobre Nós",
    path: "/sobre",
    element: <About />,
  },
  {
    name: "Serviços",
    path: "/servicos",
    // element: <Services />,
  },
  {
    name: "Notícias",
    path: "/noticias",
    // element: <News />,
  },
  {
    name: "Fale Conosco",
    path: "/fale-conosco",
    // element: <Contact />,
  },
];

export default routes;
