import Link from 'next/link';
export default function PlanTerms() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 font-worksans-light">
      <div className="text-lg max-w-prose mx-auto">
        <h4>
          <span className="block text-base mt-8 text-blue-600 tracking-wide uppercase font-worksans-light">
            2. Planes y condiciones de compra de SoloPython
          </span>
          <span className="mt-2 block text-lg leading-8 font-medium tracking-tight text-gray-600 sm:text-lg">
            2.1 Planws
          </span>
        </h4>
        <p className="mt-4 text-xl text-gray-500 leading-8">
          Las características y el precio de su acceso al Servicio se determinan por el plan de
          suscripción y el tipo de cuenta que se registre, adquiera, renueve o cambie (cada uno de
          ellos, un "Plan"); para revisar las características y el precio asociados a los Planes de
          SoloPython
        </p>
      </div>

      <div className="text-lg max-w-prose mx-auto">
        <h4>
          <span className="mt-4 block text-lg leading-8 font-medium tracking-tight text-gray-600 sm:text-lg">
            2.2 Plan Gratis
          </span>
        </h4>
        <p className="mt-4 text-xl text-gray-500 leading-8">
          Si usted se inscribe en un plan gratuito ("Plan Gratuito") a través de nuestro Sitio,
          SoloPython Technologies LLC le otorga una licencia no transferible, no exclusiva,
          revocable y limitada para usar y acceder al Servicio en estricta conformidad con estos
          Términos. Nos reservamos el derecho, a nuestra absoluta discreción, de retirar o modificar
          su acceso al Servicio en cualquier momento sin previo aviso y sin responsabilidad alguna.
        </p>
      </div>

      <div className="text-lg max-w-prose mx-auto">
        <h4>
          <span className="mt-4 block text-lg leading-8 font-medium tracking-tight text-gray-600 sm:text-lg">
            2.3 Plan Premium
          </span>
        </h4>
        <p className="mt-4 text-xl text-gray-500 leading-8">
          Si adquiere un plan de suscripción pro ("Plan Pro"), SoloPython le concede una licencia
          limitada, no transferible, no exclusiva y revocable para utilizar y acceder al Servicio
          únicamente para su uso personal durante el plazo de suscripción seleccionado (el "Plazo
          Pro") en estricta conformidad con estas Condiciones.
        </p>
      </div>
      <div className="text-lg max-w-prose mx-auto">
        <h4>
          <span className="mt-4 block text-lg leading-8 font-medium tracking-tight text-gray-600 sm:text-lg">
            2.4 Tasas
          </span>
        </h4>
        <p className="mt-4 text-xl text-gray-500 leading-8">
          La Licencia (Premium) está expresamente condicionada al pago puntual de la cuota de
          licencia aplicable en ese momento ("Cuota de Suscripción"). Podemos incluir un cargo
          separado por cualquier impuesto aplicable sobre las ventas, el uso, el valor añadido o los
          impuestos especiales, y cualquier otro impuesto similar, derechos o cargos de cualquier
          tipo. Remitiremos los impuestos recaudados, si los hubiera, a la autoridad fiscal
          correspondiente. Si el pago no se recibe en el plazo requerido, podemos suspender su
          acceso al Servicio hasta que se reciba el pago. Salvo lo establecido en las Condiciones,
          todas las cuotas de suscripción no son reembolsables. Nos reservamos el derecho de
          aumentar o disminuir cualquier cuota de suscripción en cualquier momento; sin embargo, en
          la medida en que usted haya pagado su cuota de suscripción por adelantado, el aumento o la
          disminución no se hará efectiva para su plan hasta el final de su plazo actual o su
          próxima renovación.
        </p>
      </div>
      <div className="text-lg max-w-prose mx-auto">
        <h4>
          <span className="mt-4 block text-lg leading-8 font-medium tracking-tight text-gray-600 sm:text-lg">
            2.5 Renovación automática de los servicios de suscripción
          </span>
        </h4>
        <p className="mt-4 text-xl text-gray-500 leading-8">
          A menos que opte por la no renovación automática, su Suscripción se prorrogará
          automáticamente después de cualquier plazo de suscripción, por el mismo período de tiempo
          que el plazo de suscripción, a la tarifa vigente en ese momento. Para modificar o cancelar
          su Suscripción, vaya a la página de su Cuenta o{' '}
          <Link href="/contact">
            <span className="cursor-pointer text-blue-500">contacte con nosotros</span>
          </Link>
          . Si cancela su Suscripción durante el plazo de la misma, podrá utilizarla hasta el final
          del plazo vigente en ese momento y su Suscripción no se renovará una vez finalizado el
          plazo vigente. Sin embargo, no tendrá derecho a un reembolso prorrateado de ninguna parte
          de la Cuota de Suscripción pagada por el plazo de suscripción vigente en ese momento.
        </p>
      </div>
    </div>
  );
}
