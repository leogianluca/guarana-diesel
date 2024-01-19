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
  Blog,
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
    name: "GreenAreas",
    path: "/servicos/areas-verdes",
    element: <GreenAreas />,
    hidden: true,
  },
  {
    name: "VerticalSignage",
    path: "/servicos/sinalizacao-vertical",
    element: <VerticalSignage />,
    hidden: true,
  },
  {
    name: "ContainmentDevices",
    path: "/servicos/dispositivos-de-contencao",
    element: <ContainmentDevices />,
    hidden: true,
  },
  {
    name: "EmbankmentsAndRetainingStructures",
    path: "/servicos/terraplenos-e-estruturas-de-contencao",
    element: <EmbankmentsAndRetainingStructures />,
    hidden: true,
  },
  {
    name: "DrainageAndOACs",
    path: "/servicos/drenagem-e-oacs",
    element: <DrainageAndOACs />,
    hidden: true,
  },
  {
    name: "Blog",
    path: "/restrito/post",
    element: <Blog />,
    hidden: true,
  },
];

export default routes;
