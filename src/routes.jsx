import {
  Home,
  About,
  Contact,
  News,
  NewsDetail,
  Service,
  GreenAreas,
  VerticalSignage,
  ContainmentDevices,
  EmbankmentsAndRetainingStructures,
  DrainageAndOACs,
} from "@/pages";

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
    name: "Notícias",
    path: "/noticias",
    element: <News />,
  },
  {
    name: "Rota Oculta",
    path: "/noticias/:id",
    element: <NewsDetail />,
    hidden: true,
  },
  {
    name: "Serviços",
    path: "/servicos",
    element: <Service />,
  },
  {
    name: "Fale Conosco",
    path: "/fale-conosco",
    element: <Contact />,
  },
  {
    name: "Serviços",
    path: "/servicos/areas-verdes",
    element: <GreenAreas />,
    hidden: true,
  },
  {
    name: "Serviços",
    path: "/servicos/sinalizacao-vertical",
    element: <VerticalSignage />,
    hidden: true,
  },
  {
    name: "Serviços",
    path: "/servicos/dispositivos-de-contencao",
    element: <ContainmentDevices />,
    hidden: true,
  },
  {
    name: "Serviços",
    path: "/servicos/terraplenos-e-estruturas-de-contencao",
    element: <EmbankmentsAndRetainingStructures />,
    hidden: true,
  },
  {
    name: "Serviços",
    path: "/servicos/drenagem-e-oacs",
    element: <DrainageAndOACs />,
    hidden: true,
  },
];

export default routes;
