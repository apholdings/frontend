export default function DisclosureOfData() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 font-worksans-light">
      <div className="text-lg max-w-prose mx-auto">
        <h4>
          <span className="block text-base mt-8 text-blue-600 tracking-wide uppercase font-worksans-light">
            Divulgación de datos
          </span>
        </h4>
        <p className="mt-4 text-xl text-gray-500 leading-8">Requisitos legales</p>
      </div>

      <div className="mt-6 prose prose-bblue prose-lg text-gray-500 mx-auto">
        <p className="mt-4 text-xl text-gray-500 leading-8">
          SoloPython puede revelar sus Datos Personales si cree de buena fe que dicha acción es
          necesaria para:
        </p>
        <ul>
          <li>Para cumplir con una obligación legal</li>
          <li>Para proteger y defender los derechos o la propiedad de SoloPython</li>
          <li>Para prevenir o investigar posibles infracciones en relación con el Servicio</li>
          <li>Proteger la seguridad personal de los usuarios del Servicio o del público</li>
          <li>Para protegerse de la responsabilidad legal</li>
        </ul>
      </div>
    </div>
  );
}
