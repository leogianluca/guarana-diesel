import React, { useState, useEffect } from "react";
import axios from "axios";

import { Typography, Button } from "@material-tailwind/react";
import { FingerPrintIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { featuresData } from "@/data";
import SliderPartner from "@/widgets/slider-partner";
import NewsCard from "@/widgets/news-card";

export function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get("http://localhost:3000/posts/3");
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <div className="relative flex content-center items-center justify-center pt-800 pb-32" style={{ height: "70vh" }}>
        <div className="absolute top-0 h-full w-full bg-[url('/img/background.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="px-4 text-left lg:w-8/12">
              <Typography
                variant="h3"
                color="white"
                className="mb-6 font-black"
              >
                Conservação de rodovias com excelência.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="-mt-32 bg-white px-4 pb-10 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                SOBRE NÓS
              </Typography>
              <Typography className="mb-8 font-normal text-justify text-blue-gray-500">
                A Guarana Diesel, também conhecida como GD Serviços Engenharia e Transportes, é uma empresa
                especializada em uma ampla gama de atividades, com ênfase na conservação de rodovias. A empresa conta com uma equipe
                altamente qualificada e preparada para executar suas tarefas, sempre com o objetivo de proporcionar o melhor resultado
                possível aos clientes.
              </Typography>

              <a
                href="/sobre"
                rel="noopener noreferrer"
              >
                <Button variant="filled">Saiba mais</Button>
              </a>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <img
                alt="Card Image"
                src="/img/teamwork.png"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-20 pb-10">
        <div className="container mx-auto">
          <PageTitle heading="NOSSOS PARCEIROS">
            <br />
          </PageTitle>
          <SliderPartner />
        </div>
      </section>

      {posts && posts.length > 0 ? (
        <section className="px-4 pt-20 pb-48">
          <div className="container mx-auto">
            <PageTitle heading="NOTÍCIAS">
              Descubra as notícias mais recentes e aprofunde seus conhecimentos sobre os setores em que atuamos, enquanto acompanha o
              crescimento e as conquistas da Guaraná Diesel.
            </PageTitle>
            <NewsCard posts={posts} />
          </div>
        </section>
      ) : (
        <div className="mb-20" />
      )}

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
