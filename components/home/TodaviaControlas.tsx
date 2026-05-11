import clsx from 'clsx';
import { geologica } from '@/lib/fonts';
import { Card } from '../ui/card';

const ITEMS = [
  {
    title: 'Accesos sin control',
    description:
      'Membresías vencidas que nadie detecta. Entradas que no quedaron registradas en ningún lado.',
    color: 'bg-morado',
    text: 'text-white',
  },
  {
    title: ' Ingresos que se escapan',
    description:
      'Sin recordatorios de renovación, tus clientes simplemente dejan de venir y tú no te enteras hasta que ya es tarde.',
    color: 'bg-[#16DB65]',
    text: 'text-black',
  },
  {
    title: 'Sin historial real',
    description:
      'Hojas de cálculo que se pierden, listas de papel que nadie actualiza. Cero visibilidad de lo que pasa en tu negocio.',
    color: 'bg-morado',
    text: 'text-white',
  },
];

function TodaviaControlas() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between px-5 md:px-40 py-10 text-center">
      <h1 className={clsx('text-4xl md:text-8xl font-bold mb-5', geologica.className)}>
        ¿Todavía controlas el acceso con una lista en papel?
      </h1>
      <p className={clsx('max-w-3xl text-xl font-normal', geologica.className)}>
        La mayoría de negocios con membresías pierden dinero sin darse cuenta: clientes con
        membresía vencida que siguen entrando, renovaciones que nadie recuerda cobrar y sin ningún
        registro de quién entró ni cuándo.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 w-full gap-10">
        {ITEMS.map((item, index) => (
          <Card
            key={index}
            className={clsx(
              'flex w-full flex-col rounded-[25px] pt-5 pb-10 pl-5 pr-2 text-start shadow-lg shadow-black/40',
              item.color,
              item.text
            )}
          >
            <h2 className={clsx('text-2xl font-bold', geologica.className)}>{item.title}</h2>
            <p className={clsx('text-lg font-normal', geologica.className)}>{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TodaviaControlas;
