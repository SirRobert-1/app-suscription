import { geologica } from '@/lib/fonts';
import { Button } from '@/components/ui/button';

export function CTAFinal() {
  return (
    <div className="bg-morado/10 flex h-screen w-screen flex-col items-center justify-center px-4 py-10 text-center md:px-10 lg:px-40">
      <h1 className={`${geologica.className} max-w-5xl text-5xl font-bold md:text-8xl`}>
        No te pierdas de esta gran oportunidad
      </h1>
      <Button
        className={`${geologica.className} bg-morado hover:bg-morado/90 mt-10 rounded-full px-8 py-5 text-xl font-bold text-white md:px-10 md:py-6 md:text-2xl`}
      >
        Contrata ahora
      </Button>
    </div>
  );
}
