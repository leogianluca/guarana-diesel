import React, { useState } from "react";
import {
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { PhoneIcon, DevicePhoneMobileIcon, AtSymbolIcon, BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import GoogleMap from "@/widgets/google-map";

export function Contact() {
  const MIN_NAME_LENGTH = 3;
  const MIN_MESSAGE_LENGTH = 20;
  const MIN_PHONE_LENGHT = 9;
  const isAlpha = (str) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(str);
  const isEmail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const { name, email, message, phone } = formValues;

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.phone]: e.target.value,
    });
  };

  const handleTextAreaChange = (e) => {
    setFormValues({
      ...formValues,
      message: e.target.value,
    });
  };

  const isBlank = (name, email, message) => {
    if (name === '') {
      return alert('O nome não pode estar vazio');
    } else if (email === '') {
      return alert('O email não pode estar vazio');
    } else if (message === '') {
      return alert('A mensagem não pode estar vazia');
    } else {
      return alert('O formulário não pode ser enviado em branco');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    isBlank(name, email, message)

    if (name !== '' && !isAlpha(name)) {
      return alert('Seu nome deve conter apenas letras');
    }

    if (email !== '' && !isEmail(email)) {
      return alert('Digite um e-mail válido');
    }
  };

  return (
    <>
      <div
        className="relative flex content-center items-center justify-center pt-32 pb-0"
        style={{ height: "0vh", background: "#11114e" }}
      />

      <section className="bg-white px-4 pt-12 pb-12">
        <div className="container mx-auto">
          <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
            FALE CONOSCO
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

              <Typography variant="h5" className="mb-10">
                <div className="mb-6 flex items-center">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                    <BuildingStorefrontIcon className="h-5 w-6 text-white" />
                  </div>
                  <span className="ml-2">Rua Joaquim Viana, n° 65, Guaraná, Aracruz/ES</span>
                </div>
              </Typography>
            </div>

            <div className="w-full lg:w-1/2 p-8">
              <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
                Contate-nos
              </Typography>

              <form className="mx-auto w-full mt-12">
                <div className="mb-8 flex flex-col gap-8 md:flex-row md:gap-4">
                  <Input
                    variant="outlined"
                    size="lg"
                    label="Nome Completo"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    minLength={MIN_NAME_LENGTH}
                    required
                  />
                </div>
                <div className="mb-8 flex flex-col gap-8 md:flex-row md:gap-4">
                  <Input
                    variant="outlined"
                    size="lg"
                    label="Telefone"
                    name="phone"
                    value={phone}
                    onChange={handleInputChange}
                    minLength={MIN_PHONE_LENGHT}
                  />

                  <Input
                    variant="outlined"
                    size="lg"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    minLength={MIN_NAME_LENGTH}
                    required
                  />
                </div>

                <Textarea
                  variant="outlined"
                  size="lg"
                  label="Mensagem"
                  rows={8}
                  name="message"
                  value={message}
                  onChange={handleTextAreaChange}
                  minLength={MIN_MESSAGE_LENGTH}
                  required
                />

                <Button variant="gradient" size="lg" className="mt-8" fullWidth onClick={handleSubmit}>
                  Enviar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <GoogleMap />

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Contact;