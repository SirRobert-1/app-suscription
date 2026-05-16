import { notFound } from 'next/navigation';
import { createServerClient } from '@/lib/supabase/server';
import { RegistroClienteForm } from '@/components/registro-cliente/RegistroClienteForm';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function RegistroClientePage({ params }: PageProps) {
  const { slug } = await params;
  const supabase = await createServerClient();

  // Look up sucursal by slug
  const { data: sucursal, error } = await supabase
    .from('sucursal')
    .select('id, nombre')
    .eq('slug', slug)
    .single();

  if (error || !sucursal) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <img
            src="/Vertex.svg"
            alt="VertexCheck"
            className="h-16 mx-auto"
          />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Registro de Cliente
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Completa tu registro para <span className="font-semibold text-morado">{sucursal.nombre}</span>
          </p>
        </div>
        <RegistroClienteForm sucursalId={sucursal.id} sucursalNombre={sucursal.nombre} />
      </div>
    </div>
  );
}

// Suspense boundary for dynamic params
export const dynamic = 'force-dynamic';
