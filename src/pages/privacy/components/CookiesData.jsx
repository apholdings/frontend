export default function CookiesData() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 font-worksans-light">
      <div className="text-lg max-w-prose mx-auto">
        <h4>
          <span className="block text-base mt-8 text-blue-600 tracking-wide uppercase font-worksans-light">
            Cookies
          </span>
        </h4>
        <p className="mt-4 text-xl text-gray-500 leading-8">
          Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad en
          nuestro Servicio y conservar cierta información.
        </p>
      </div>
      <div className="text-lg max-w-prose mx-auto">
        <p className="mt-4 text-xl text-gray-500 leading-8">
          Las cookies son archivos con una pequeña cantidad de datos que pueden incluir un
          identificador único anónimo. Las cookies se envían a su navegador desde un sitio web y se
          almacenan en su dispositivo. Las tecnologías de seguimiento también se utilizan como
          balizas, etiquetas y scripts para recopilar y rastrear información y para mejorar y
          analizar nuestro Servicio.
        </p>
      </div>
      <div className="text-lg max-w-prose mx-auto">
        <p className="mt-4 text-xl text-gray-500 leading-8">
          Usted puede indicar a su navegador que rechace todas las cookies o que le indique cuándo
          se envía una cookie. Sin embargo, si no acepta las cookies, es posible que no pueda
          utilizar algunas partes de nuestro Servicio.
        </p>
      </div>
      <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
        <p className="mt-4 text-xl text-gray-500 leading-8">Ejemplo de cookies utilizadas:</p>
        <ul>
          <li>
            Cookies de sesión. Utilizamos cookies de sesión para el funcionamiento de nuestro
            Servicio.
          </li>
          <li>
            Cookies de preferencia. Utilizamos cookies de preferencia para recordar sus preferencias
            y diversos ajustes.
          </li>
          <li>Cookies de seguridad. Utilizamos cookies de seguridad por motivos de seguridad.</li>
        </ul>
      </div>
    </div>
  );
}
