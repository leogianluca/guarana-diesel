import React, { useState } from "react";
import {
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import axios from "axios";

export function Blog() {
  const MIN_TITLE_LENGTH = 3;
  const MIN_MESSAGE_LENGTH = 20;

  const [formValues, setFormValues] = useState({
    title: '',
    imgUrl: '',
    message: '',
  });

  const { title, imgUrl, message } = formValues;

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.title]: e.target.value,
      [e.target.imgUrl]: e.target.value,
    });
  };

  const handleTextAreaChange = (e) => {
    setFormValues({
      ...formValues,
      message: e.target.value,
    });
  };

  const isBlank = (title, imgUrl, message) => {
    if (title === '') {
      return alert('O título não pode estar vazio');
    } else if (imgUrl === '') {
      return alert('As links das imagens não podem estar vazios');
    } else if (message === '') {
      return alert('A descrição não pode estar vazia');
    } else {
      return alert('O formulário não pode ser enviado em branco');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    isBlank(title, imgUrl, message)

    const imgUrlArray = imgUrl.split(';');

    const formData = {
      title,
      imgUrl: imgUrlArray,
      message,
    };
    
    try {
      // Envia os dados do formulário para a API usando a função fetch
      const response = await fetch('http://https://guaranadiesel-api.onrender.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Verifica se a resposta da API é bem-sucedida
      if (response.ok) {
        alert('Formulário enviado com sucesso!');
        // Faça outras ações após o envio bem-sucedido
      } else {
        alert('Erro ao enviar o formulário. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Erro ao enviar o formulário. Por favor, tente novamente.');
    }
  };

  return (
    <>
      <div className="relative flex content-center items-center justify-center pt-32 pb-0"
        style={{ height: "0vh", background: "#11114e" }}
      />

      <section className="bg-white px-4 pt-12">
        <div className="container mx-auto">
          <Typography
            variant="h3"
            className="mb-3 font-bold"
            color="blue-gray"
          >
            NOVA PUBLICAÇÃO
            <hr className="w-16 border-2 border-blue-500 mb-4" />
          </Typography>
        </div>
      </section>

      <section className="bg-white px-4 pb-12">
        <div className="container mx-auto">
          <form className="mx-auto w-full mt-12">
            <div className="mb-8 flex flex-col gap-8 md:flex-row md:gap-4">
              <Input
                variant="outlined"
                size="lg"
                label="Título"
                name="title"
                value={title}
                onChange={handleInputChange}
                minLength={MIN_TITLE_LENGTH}
                required
              />
            </div>

            <div className="mb-8 flex flex-col gap-8 md:flex-row md:gap-4">
              <Input
                variant="outlined"
                size="lg"
                label="Links das imagens"
                name="imgUrl"
                value={imgUrl}
                onChange={handleInputChange}
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
      </section>
    </>
  );
};

export default Blog;