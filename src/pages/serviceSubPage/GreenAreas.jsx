import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function GreenAreas() {
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
            Manutenção de Áreas Verdes
          </Typography>

          <div className="mx-auto mt-32 flex flex-col w-full px-4 md:w-6/12 lg:mt-0">
            <img className="rounded-lg w-full h-full" src="" alt="service-image" />
          </div>

          <div className="mt-12 flex flex-wrap items-center">
            <div class="space-y-4">
              <p>Consiste nos serviços de limpeza e na conservação de todas as áreas e locais que compõem o patrimônio locado dentro da faixa de domínio da rodovia. Onde podemos relacionar os seguintes serviços: poda, capina, despraguejamento, refilamento, aceiro, corte de árvores, varrição e limpeza.</p>
              <p>Serviços que devem ser executados com equipamentos e mão de obra especializada que respeitem as condições operacionais, ambientais e atendam os padrões de desempenho de cada rodovia.</p>
              <p>Descrição dos serviços de rotina essenciais para manter as condições mínimas de manutenção e segurança das rodovias:</p>
              <ul class="list-disc list-inside space-y-2">
                <li>Roçada: pode ser realizada de forma mecânica ou manual, sendo realizado o número de cortes necessários para manter o revestimento vegetal das áreas com altura uniforme e dentro dos padrões estabelecidos em toda sua extensão, em qualquer época do ano.</li>
                <li>Capina e despraguejamento: compreende o ato de remover manualmente as ervas daninhas, de todas as áreas inclusive jardins, pátios e pistas pavimentadas, bem como áreas próximas às barreiras de concreto e defensas metálicas, replantando grama onde for necessário.</li>
                <li>Refilamento: compreende o ato de remover a grama que invade as áreas pavimentadas e bordos de pista, proporcionando que a drenagem do pavimento funcione de forma plena.</li>
                <li>Limpeza e varrição das áreas pavimentadas, coleta de resíduos e recolhimento de lixos de toda a faixa de domínio, bem como o descarte do material em local controlado e autorizado pelas autoridades competentes.</li>
                <li>Corte, poda e remoção de árvores e arbustos mortos ou praguejados, para fora da faixa de domínio, bem como árvores que representem perigo ao tráfego ou cujas raízes comprometam o sistema de drenagem superficial.</li>
                <li>Aceiro: compreende a remoção da camada vegetal em uma largura aproximada de 1,00 (um) metro para cada lado da cerca de divisa da faixa de domínio em toda a sua extensão, para evitar que incêndios fora da faixa de domínio atinjam a rodovia.</li>
                <li>Recomposição do revestimento vegetal nos taludes dos cortes e aterros, sempre que estes apresentarem falhas na vegetação, evitando o carreamento de material para as drenagens e a formação de ravinas e erosões.</li>
                <li>Lavagem e limpeza de dispositivos e estruturas que compõem o sistema rodoviário.</li>
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

export default GreenAreas;
