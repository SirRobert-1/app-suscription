import clsx from 'clsx';
import { geologica } from '@/lib/fonts';
import { Card } from '../ui/card';

const ITEMS = [
  {
    title: 'Plan #1',
  },
  {
    title: 'Plan #2',
  },
  {
    title: 'Plan #3',
  },
];

function Planes() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between px-5 md:px-40 py-10 text-center">
      <h1 className={clsx('text-5xl md:text-8xl font-bold', geologica.className)}>Planes</h1>
      <p className={clsx('text-xl md:text-2xl font-normal', geologica.className)}>
        Uno para cada etapa de tu negocio.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 w-full gap-10">
        {ITEMS.map((item, index) => (
          <Card
            key={index}
            className={
              'bg-morado flex h-96 w-full flex-col rounded-[25px] pt-5 pb-10 pl-5 text-center text-white shadow-lg shadow-black/40'
            }
          >
            <h2 className={clsx('text-2xl font-bold', geologica.className)}>{item.title}</h2>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Planes;
