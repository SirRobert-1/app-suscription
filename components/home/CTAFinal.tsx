import { geologica } from '@/lib/fonts';
import { Button } from '@/components/ui/button';

export function CTAFinal() {
  return (
    <div className="bg-morado/10 flex h-screen w-screen flex-col items-center justify-center px-5 py-10 text-center md:px-40">
      <h1 className={`${geologica.className} max-w-5xl text-5xl font-bold md:text-8xl`}>
        No te pierdas de esta gran oportunidad
      </h1>
      <Button
        className={`${geologica.className} bg-morado hover:bg-morado/90 mt-10 rounded-full shadow-lg shadow-black/30 px-10 py-8 text-2xl font-bold text-white`}
      >
        Contrata ahora
      </Button>
    </div>
  );
}
