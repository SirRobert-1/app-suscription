import clsx from 'clsx'
import { geologica } from '@/lib/fonts'
import { Card } from '../ui/card';

const ITEMS = [
  {
    title: "Plan #1",
    
  },
  {
    title: "Plan #2",
  },
  {
    title: "Plan #3",
  },
];

function Planes() {
  return (
    <div className="flex flex-col items-center justify-between text-center w-screen h-screen py-10 px-40">
      <h1 className={clsx("text-8xl font-bold", geologica.className)}>
        Planes
      </h1>
      <p className={clsx("text-2xl font-normal", geologica.className)}>
        Uno para cada etapa de tu negocio.
      </p>
      <div className="flex w-full mt-10 gap-10">
        {ITEMS.map((item, index) => (
          <Card
            key={index}
            className={
              "flex flex-col text-center w-full pl-5 pt-5 pb-10 text-white bg-morado h-96 rounded-[25px] shadow-lg shadow-black/40"
            }
          >
            <h2 className={clsx("text-2xl font-bold", geologica.className)}>
              {item.title}
            </h2>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Planes