import React, { useState } from "react";
import {
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";

export function Blog() {
  const MIN_NAME_LENGTH = 3;
  const MIN_MESSAGE_LENGTH = 20;
  const MIN_PHONE_LENGHT = 9;

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
  };

  return (
    <>
      <div className="relative flex content-center items-center justify-center pt-32 pb-0"
        style={{ height: "0vh", background: "#11114e" }}
      />


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
    </>
  );
};

export default Blog;