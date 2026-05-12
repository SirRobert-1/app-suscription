import { geologica } from '@/lib/fonts';
import { RegistroForm } from '@/components/registro/RegistroForm';

export default function RegistroPage() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center bg-zinc-50 px-5 py-10 dark:bg-black">
      <img src="/Vertex.svg" alt="VertexCheck" className="mb-8 h-20 w-20" />
      <h1 className={`${geologica.className} font-geologica mb-2 text-3xl font-bold md:text-5xl`}>
        Crea tu <span className="text-morado">cuenta</span>
      </h1>
      <p className={`${geologica.className} font-geologica mb-8 text-lg text-muted-foreground`}>
        Empieza a controlar el acceso a tu negocio
      </p>
      <RegistroForm />
    </div>
  );
}
