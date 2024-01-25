import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function ContainmentDevices() {
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
            Manutenção de Dispositivos de Contenção
          </Typography>

          <div className="mx-auto mt-32 flex flex-col w-full px-4 md:w-6/12 lg:mt-0">
            <img className="rounded-lg w-full h-full" src="" alt="service-image" />
          </div>

          <div className="mt-12 flex flex-wrap items-center">
            <div className="space-y-4">
              <p>Em razão do crescimento desenfreado dos índices de acidentes de trânsito, envolvendo milhões de pessoas em todo o mundo, a cada dia que passa, torna-se necessário a utilização de dispositivos de contenção para reduzir a gravidade do acidente, impedir que os veículos invadam lugares de risco ou alcancem obstáculos fixos.</p>
              <p>Sendo que a manutenção correta do dispositivo de contenção é responsável pelo sucesso e a efetividade de sua utilização.</p>
              <p>Os principais serviços realizados:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Implantação/remoção de defensas metálicas.</li>
                <li>Implantação de atenuadores de impacto.</li>
              </ul>
              <p>Principais cuidados na manutenção:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Os componentes das defensas não devem apresentar arestas ou cantos vivos voltados contra o fluxo de tráfego.</li>
                <li>Os postes das defensas devem ser enterrados/cravados por sistema de percussão, assegurando adequado atrito lateral.</li>
                <li>A fixação do conjunto lâmina / postes / parafusos deve garantir o funcionamento do dispositivo.</li>
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

export default ContainmentDevices;
