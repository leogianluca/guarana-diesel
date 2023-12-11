import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6" style={{ backgroundColor: '#3A3A3A' }}>
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">

          <div className="w-full px-4 lg:w-2/12">
            <img src="/img/logo.png" alt="Logo" className="mr-4 ml-2 cursor-pointer py-1.5 logo-image w-24 h-24" />
            <Typography className="font-normal white lg:w-2/5">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full shadow-none bg-transparent">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="white"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-white hover:text-white-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 grid w-max grid-cols-1 gap-24 lg:mt-0">
            <div>
              <Typography
                variant="small"
                color="white"
                className="mb-2 block font-medium uppercase"
              >
                Endereço:
              </Typography>

              <ul className="mt-3">
                <li>
                  <Typography
                    rel="noreferrer"
                    variant="small"
                    className="mb-2 block font-normal text-white hover:text-white-700"
                  >
                    Rua Joaquim Viana, n° 65, Guaraná, Aracruz/ES
                  </Typography>
                </li>
              </ul>
            </div>

          </div>

        </div>

        <hr className="my-6 border-white-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <p className="mr-4 text-xs ml-auto">
              <span className="text-white">{copyright}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Guarana Diesel",
  socials: [
    {
      color: "white",
      name: "whatsapp",
      path: "https://wa.me/5527997585511",
    },
    {
      color: "white",
      name: "instagram",
      path: "https://www.instagram.com/gd.servicos/",
    },
  ],
  menus: [
    {
      name: "Sobre a empresa",
      items: [
        { name: "Sobre Nós", path: "#" },
        { name: "Serviços", path: "#" },
        { name: "Notícias", path: "#" },
        { name: "Fale Conosco", path: "" },
      ],
    },
    {
      name: "Acesso Restrito",
      items: [
        {
          name: "Acesso Athenas",
          path: "https://guaranadiesel.athenas.online/Usuarios/login",
        },
        {
          name: "Webmail",
          path: "https://mail.hostinger.com/",
        }
      ],
    },
  ],
  copyright: (
    <>
      © 2009-{year} | Guarana Diesel
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
