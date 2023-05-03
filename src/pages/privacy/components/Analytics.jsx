export default function Analytics() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="text-lg max-w-prose mx-auto">
        <h4>
          <span className="block text-base mt-8 text-blue-600 font-semibold tracking-wide uppercase">
            Analiticas
          </span>
        </h4>
        <p className="mt-4 text-xl text-gray-500 leading-8">
          Podemos utilizar proveedores de servicios de terceros para supervisar y analizar el uso de
          nuestro Servicio.
        </p>
      </div>
      <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
        <h4>
          <span className="mt-2 block text-lg leading-8 font-medium tracking-tight text-gray-600 sm:text-lg">
            Google Analytics
          </span>
        </h4>
        <p className="mt-4 text-xl text-gray-500 leading-8">
          Google Analytics es un servicio de análisis web ofrecido por Google que rastrea e informa
          sobre el tráfico del sitio web. Google utiliza los datos recopilados para rastrear y
          supervisar el uso de nuestro Servicio. Estos datos se comparten con otros servicios de
          Google. Google puede utilizar los datos recogidos para contextualizar y personalizar los
          anuncios de su propia red publicitaria.
        </p>
        <p className="mt-4 text-xl text-gray-500 leading-8">
          Puede optar por no poner su actividad en el Servicio a disposición de Google Analytics
          instalando el complemento de inhabilitación para navegadores de Google Analytics. El
          complemento impide que el JavaScript de Google Analytics (ga.js, analytics.js y dc.js)
          comparta información con Google Analytics sobre la actividad de las visitas.
        </p>
      </div>
    </div>
  );
}
