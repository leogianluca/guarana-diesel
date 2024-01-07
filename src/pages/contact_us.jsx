import React from "react";
import {
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { PhoneIcon, DevicePhoneMobileIcon, AtSymbolIcon } from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Contact() {
  return (
    <>
      <div
        className="relative flex content-center items-center justify-center pt-32 pb-0"
        style={{
          // height: "0vh",
          background: "linear-gradient(to right, #0044d0, #4364f7, #6fb1fc)",
        }}
      />

      <section className="bg-white px-4 pt-12 pb-12">
        <div className="container mx-auto">
          <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
            Fale Conosco
            <hr className="w-16 border-2 border-blue-500 mb-4" />
          </Typography>

          <div className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <div className="w-full lg:w-1/2 p-8">
              <Typography variant="h5" className="mb-10">
                <div className="mb-6 flex items-center">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                    <PhoneIcon className="h-5 w-6 text-white" />
                  </div>
                  <span className="ml-2">(27) 3276-1288</span>
                </div>
              </Typography>

              <Typography variant="h5" className="mb-10">
                <div className="mb-6 flex items-center">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                    <DevicePhoneMobileIcon className="h-5 w-6 text-white" />
                  </div>
                  <span className="ml-2">(27) 9 9758-5511</span>
                </div>
              </Typography>

              <Typography variant="h5" className="mb-10">
                <div className="mb-6 flex items-center">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                    <AtSymbolIcon className="h-5 w-6 text-white" />
                  </div>
                  <span className="ml-2">contato@guaranadiesel.com</span>
                </div>
              </Typography>
            </div>

            <div className="w-full lg:w-1/2 p-8">
              <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
                Formulário de contato
              </Typography>

              <form className="mx-auto w-full mt-12">
                <div className="mb-8 flex flex-col gap-8 md:flex-row md:gap-4">
                  <Input variant="outlined" size="lg" label="Nome Completo" />
                  <Input variant="outlined" size="lg" label="Email" />
                </div>
                <Textarea variant="outlined" size="lg" label="Mensagem" rows={8} />
                <Button variant="gradient" size="lg" className="mt-8" fullWidth>
                  Enviar
                </Button>
              </form>
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

export default Contact;