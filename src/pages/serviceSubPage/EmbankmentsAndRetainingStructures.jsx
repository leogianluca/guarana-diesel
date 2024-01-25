import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function EmbankmentsAndRetainingStructures() {
  return (
    <>
      <div className="relative flex content-center items-center justify-center pt-32 pb-0"
        style={{ height: "0vh", background: "#11114e" }}
      />

      <section className="bg-white px-4 pt-12 pb-12">
        <div className="container mx-auto">
          <Typography
            variant="h3"
            className="mb-8 font-bold text-center"
            color="blue-gray"
          >
            Manutenção de Terraplenos e Estruturas de Contenção
          </Typography>

          <div className="mx-auto mt-32 flex flex-col w-full px-4 md:w-6/12 lg:mt-0">
            <img className="rounded-lg w-full h-full" src="" alt="service-image" />
          </div>

          <div className="mt-12 flex flex-wrap items-center">
            <div className="space-y-4">
              <p>A conservação dos terraplenos de uma rodovia e das estruturas de contenção tem por finalidade proteger o leito da estrada e manter as encostas dentro dos padrões normais previstos, preservando-as contra qualquer desagregação, procurando garantir a estabilidade dos taludes de aterros e de cortes e maciços naturais, visando à segurança e boas condições de tráfego.</p>
              <p>Apesar da realização de monitorações periódicas dos terraplenos existentes ao longo da rodovia, é comum durante o período de chuva a instabilidade de alguns taludes em função da saturação do solo.</p>
              <p>Principais serviços de manutenção de terraplenos realizados:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Remoção de deslizamentos.</li>
                <li>Limpeza dos dispositivos de drenagem.</li>
                <li>Inspeção e reparos das estruturas de contenção da rodovia.</li>
                <li>Recomposição de erosão em cortes e aterros (Escavação, Carga, Transporte e compactação).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default EmbankmentsAndRetainingStructures;
