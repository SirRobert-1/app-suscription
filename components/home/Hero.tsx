import { geologica } from '@/lib/fonts';
import clsx from 'clsx';
import { Button } from '../ui/button';

function Hero() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between px-5 md:px-40 py-10 text-center">
      <img src="/Vertex.svg" alt="Hero Image" className="h-24 w-24 mt-5" />
      <h1 className={clsx('text-4xl md:text-8xl font-bold', geologica.className)}>
        CONTROLA QUIEN ENTRA A TU NEGOCIO
      </h1>
      <h2 className={clsx('text-3xl font-medium', geologica.className)}>
        Sin papel. Sin complicaciones
      </h2>
      <p className={clsx('text-xl font-normal', geologica.className)}>
        Sistema de membresías con código QR para gimnasios, estudios y clubes. Tus clientes llegan,
        muestran su QR y en menos de 2 segundos el sistema decide si pueden entrar.
      </p>
      <Button
        className={clsx(
          'bg-morado hover:bg-morado rounded-[50px] p-10 text-3xl font-bold text-white shadow-lg shadow-black/30',
          geologica.className
        )}
      >
        Agenda demo
      </Button>
    </div>
  );
}

export default Hero;
