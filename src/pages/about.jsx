import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { FingerPrintIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData } from "@/data";
import SliderPartner from "@/widgets/slider-partner";
import News from "@/widgets/news";

export function About() {
  return (
    <>
      <div className="relative flex content-center items-center justify-center pt-32 pb-0" style={{ height: "0vh", backgroundColor: "blue" }} />

      <section className="bg-white px-4 pt-12 pb-12">
        <div className="container mx-auto">
          <div className="mx-auto mt-32 flex w-full justify-center px-4 md:w-6/12 lg:mt-0">
            <img
              alt="Card Image"
              src="/img/teamwork.png"
              className="h-full w-full"
            />
          </div>
          <div className="mt-12 flex flex-wrap items-center">
            <Typography className="mb-8 font-normal text-justify text-blue-gray-500">
              A Guarana Diesel, também conhecida como GD Serviços Engenharia e Transportes, é uma empresa
              especializada em uma ampla gama de atividades, com ênfase na conservação de rodovias. A empresa conta com uma equipe
              altamente qualificada e preparada para executar suas tarefas, sempre com o objetivo de proporcionar o melhor resultado
              possível aos clientes.
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
