'use server';

import { createServerActionClient } from '@/lib/supabase/server';

export async function registrarCliente(formData: {
  nombre: string;
  apellidos: string;
  telefono: string;
  fecha_nacimiento: string;
  id_sucursal: number;
}) {
  const supabase = await createServerActionClient();

  const { data, error } = await supabase
    .from('registro_cliente')
    .insert({
      nombre: formData.nombre,
      apellidos: formData.apellidos,
      telefono: formData.telefono,
      fecha_nacimiento: formData.fecha_nacimiento,
      id_sucursal: formData.id_sucursal,
    })
    .select('id')
    .single();

  if (error) {
    return { success: false, error: 'Error al registrar. Intenta de nuevo.' };
  }

  return { success: true, data };
}
