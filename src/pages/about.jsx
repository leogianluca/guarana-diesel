import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function About() {
  return (
    <>
      <div className="relative flex content-center items-center justify-center pt-32 pb-0"
        style={{ height: "0vh", background: "linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)"}}
      />

      <section className="bg-white px-4 pt-12 pb-12">
        <div className="container mx-auto">
          <Typography
            variant="h3"
            className="mb-3 font-bold"
            color="blue-gray"
          >
            NOSSA HISTÓRIA
          <hr className="w-16 border-2 border-blue-500 mb-4" />
          </Typography>

          <div className="mx-auto mt-32 flex w-full justify-center px-4 md:w-6/12 lg:mt-0">
            <img
              alt="Card Image"
              src="/img/teamwork.png"
              className="h-full w-full"
            />
          </div>

          <div className="mt-12 flex flex-wrap items-center">
            <Typography className="mb-8 text-justify text-black-500 leading-10">
              <p>
                <a className="pl-8">Desde</a> a sua fundação em 22 de abril de 2009, a Guaraná Diesel LTDA ME tem trilhado um caminho de sucesso e expansão. Inicialmente, surgimos como uma oficina de manutenção mecânica de veículos e máquinas pesadas, juntamente com a prestação de serviços de locação de caminhões com operadores para a grandiosa obra de construção da Usina Hidroelétrica de Belo Monte, em Porto Velho - RO.
              </p>
              <p>
                <a className="pl-8">Com</a> o passar do tempo, buscamos diversificar nossas áreas de atuação e expandir nossos horizontes. Em apenas um ano, decidimos adentrar também no mundo da poda e do paisagismo, oferecendo serviços de qualidade na cidade de Aracruz, onde estamos presentes até os dias atuais.
              </p>
              <p>
                <a className="pl-8">O</a> ano de 2018 marcou uma nova fase em nossa trajetória, na qual abraçamos novos desafios e ingressamos no segmento de conservação de rodovias em parceria com a ECO 101. Desde então, temos nos destacado nacionalmente nessa área, fornecendo um serviço de excelência que conquistou reconhecimento e admiração. Firmamos parcerias estratégicas com o grupo Eco Rodovias, expandindo nossa atuação para locais como a Eco Rio Minas e a Ecovias do Araguaia.
              </p>
              <p>
                <a className="pl-8">Hoje</a>, orgulhamo-nos do nosso percurso, das parcerias estabelecidas e dos resultados alcançados. A Guaraná Diesel continua em constante evolução, comprometida em oferecer serviços de qualidade, superar expectativas e construir um legado de excelência no setor de conservação de rodovias. Estamos prontos para enfrentar novos desafios, expandir nossas fronteiras e escrever os próximos capítulos dessa história de sucesso.
              </p>
              <p>
                <a className="pl-8">Ao</a> longo dos anos, a Guaraná Diesel tem se adaptado constantemente às mudanças do mercado, buscando estar sempre à frente das demandas e tendências. Nossa capacidade de adaptação é um dos principais pilares do nosso sucesso. Diversificamos nossas áreas de atuação, estabelecemos parcerias estratégicas, investimos em capacitação e tecnologia, mantemos o foco no atendimento ao cliente e acompanhamos de perto as tendências do setor.
              </p>
              <p>
                <a className="pl-8">Valorizamos</a> a satisfação dos nossos clientes e buscamos oferecer serviços de alta qualidade, superando suas expectativas. Estamos comprometidos em fornecer soluções eficientes, utilizando os melhores materiais, tecnologias avançadas e práticas inovadoras. Nosso objetivo é garantir que as rodovias estejam em ótimas condições de conservação, contribuindo para a segurança e o desenvolvimento do país.
              </p>
              <p>
                <a className="pl-8">Hoje</a>, como uma empresa consolidada e reconhecida nacionalmente, estamos prontos para enfrentar novos desafios, expandir nossas fronteiras e continuar construindo um legado de excelência. A Guaraná Diesel se destaca pela sua trajetória de sucesso, pela capacidade de adaptação e pelo compromisso com a qualidade em todos os serviços prestados. Estamos entusiasmados com o futuro e ansiosos para escrever os próximos capítulos dessa história de sucesso junto com nossos clientes e parceiros.
              </p>
            </Typography>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default About;
