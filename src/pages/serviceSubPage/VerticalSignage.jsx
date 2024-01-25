import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function VerticalSignage() {
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
            Manutenção de Sinalização Vertical
          </Typography>

          <div className="mx-auto mt-32 flex flex-col w-full px-4 md:w-6/12 lg:mt-0">
            <img className="rounded-lg w-full h-full" src="" alt="service-image" />
          </div>

          <div className="mt-12 flex flex-wrap items-center">
            <div className="space-y-4">
              <p>Os dispositivos de segurança, são um conjunto de sinais de trânsito e dispositivos de segurança colocados na via pública com o objetivo de garantir sua adequada utilização, possibilitando melhor fluidez no trânsito e maior segurança dos usuários de veículos que nela circulam. </p>
              <p>Uma sinalização eficiente deve atrair a atenção do condutor, transmitir mensagens simples ao usuário, além de ser vista a uma distância suficiente a ponto de permitir manobras com segurança.</p>
              <p>Placas de sinalização sem conservação ou com conservação precária perdem sua eficácia como dispositivos de controle de tráfego, podendo induzir ao desrespeito e dificultar a ação fiscalizadora do órgão ou entidade executivo de trânsito. As placas de sinalização devem ser mantidas na posição apropriada, sempre limpas e legíveis.</p>
              <p>Os principais serviços realizados em caráter corretivo e preventivo para garantir a funcionalidade da Sinalização Vertical:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Implantação de sinalização vertical.</li>
                <li>Substituição de Sinalização avariada.</li>
                <li>Lavagem da Sinalização.</li>
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

export default VerticalSignage;
