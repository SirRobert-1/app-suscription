import { geologica } from '@/app/layout'
import clsx from 'clsx'
import { Button } from '../ui/button';

function Hero() {
  return (
    <div className="flex flex-col items-center justify-between text-center w-screen h-screen py-10 px-40">
      <img src="/Vertex.svg" alt="Hero Image" className="w-24 h-24" />
      <h1 className={clsx("text-8xl font-bold", geologica.className)}>
        CONTROLA QUIEN ENTRA A TU NEGOCIO
      </h1>
      <h2 className={clsx("text-3xl font-medium", geologica.className)}>
        Sin papel. Sin complicaciones
      </h2>
      <p className={clsx("text-xl font-normal", geologica.className)}>
        Sistema de membresías con código QR para gimnasios, estudios y clubes.
        Tus clientes llegan, muestran su QR y en menos de 2 segundos el sistema
        decide si pueden entrar.
      </p>
      <Button
        className={clsx(
          "bg-morado hover:bg-morado text-white font-bold text-3xl p-10 rounded-[50px]",
          geologica.className,
        )}
      >
        Agenda demo
      </Button>
    </div>
  );
}

export default Hero;