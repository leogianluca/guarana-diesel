import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function DrainageAndOACs() {
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
            Manutenção de de Drenagem e OAC's
          </Typography>

          <div className="mx-auto mt-32 flex flex-col w-full px-4 md:w-6/12 lg:mt-0">
            <img className="rounded-lg w-full h-full" src="" alt="service-image" />
          </div>

          <div className="mt-12 flex flex-wrap items-center">
            <div class="space-y-4">
              <p>O sistema de drenagem de uma rodovia tem por objetivo a captação e remoção das águas que escoam superficialmente sobre as estradas e faixa adjacentes. Sendo que as águas superficiais são captadas e conduzidas para fora do corpo estradal, ou para locais apropriados de deságue seguro, para evitar a sua acumulação na estrada, evitando aquaplanagem, bem como visando proporcionar estabilidade aos maciços de terra que constituem a infraestrutura e não causar erosão.</p>
              <p>Os principais serviços realizados em caráter corretivo e preventivo para garantir a funcionalidade do sistema de drenagem são:</p>
              <ul class="list-disc list-inside space-y-2">
                <li>Limpeza/Desobstrução.</li>
                <li>Reparação.</li>
                <li>Implantação de novos dispositivos.</li>
                <li>Reparar ala/testa.</li>
                <li>Prolongamento.</li>
                <li>Canalização de curso d’água.</li>
                <li>Enrocamento do Pé do Aterro.</li>
                <li>Construir Tampa.</li>
              </ul>
              <p>Principais benefícios da manutenção de drenagem:</p>
              <ul class="list-disc list-inside space-y-2">
                <li>Manter o funcionamento do sistema de drenagem da rodovia em perfeitas condições, evitando diversos problemas:</li>
                <li>Evita alagamento da faixa de domínio.</li>
                <li>Evita ocorrências de aquaplanagem.</li>
                <li>Maior durabilidade ao pavimento da rodovia.</li>
                <li>Evitar a instabilidade de cortes e aterros.</li>
                <li>Reduz a ocorrência de erosões.</li>
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

export default DrainageAndOACs;
