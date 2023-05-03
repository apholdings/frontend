/* This example requires Tailwind CSS v2.0+ */
export default function Header() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 tracking-wide uppercase font-worksans-light">
            Departamento legal
          </h2>
          <p className="dark:text-dark-txt mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl font-worksans-bold">
            Politica de privacidad
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            SoloPython ("nosotros" o "nuestro") opera los sitios web https://www.solopython.com (el
            "Servicio").
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Utilizamos sus datos para proporcionar y mejorar el Servicio. Al utilizar el Servicio,
            usted acepta la recopilación y el uso de la información de acuerdo con esta política. A
            menos que se defina de otro modo en estas condiciones de servicio, los términos
            utilizados en esta política tienen el mismo significado que en nuestra política de
            privacidad, accesible desde http://www.solopython.com/privacy
          </p>
        </div>
      </div>
    </div>
  );
}
