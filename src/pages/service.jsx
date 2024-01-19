import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { serviceData } from "@/data";
import { Footer } from "@/widgets/layout";

export function Service() {
  return (
    <>
      <div className="relative flex content-center items-center justify-center pt-32 pb-0"
        style={{ height: "0vh", background: "#11114e" }}
      />

      <section className="bg-white px-4 pt-12 pb-12">
        <div className="container mx-auto">
          <Typography
            variant="h3"
            className="mb-3 font-bold"
            color="blue-gray"
          >
            SERVIÇOS
            <hr className="w-16 border-2 border-blue-500 mb-4" />
          </Typography>
        </div>
      </section>

      <div className="flex justify-center pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 ">
          {serviceData.map((service) => (
            <Card className="max-w-[48rem] flex-row">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 sm:w-2/5  shrink-0 sm:rounded-r-none hidden sm:block"
              >
                <img
                  src={service?.imgUrl}
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {service?.title}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                  {service?.description}
                </Typography>
                <a href={service.redirect} className="inline-block">
                  <Button variant="text" className="flex items-center gap-2">
                    Leia Mais
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Service;