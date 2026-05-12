'use server';

import { createClient } from '@supabase/supabase-js';

export async function registrarCuenta(formData: {
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  correo: string;
  contrasena: string;
  telefono: string;
}) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
    .from('cuenta')
    .insert({
      nombre: formData.nombre,
      apellido_paterno: formData.apellido_paterno,
      apellido_materno: formData.apellido_materno,
      correo: formData.correo,
      contrasena: formData.contrasena,
      telefono: formData.telefono,
    })
    .select('id')
    .single();

  if (error) {
    if (error.code === '23505') {
      return { success: false, error: 'Este correo ya está registrado' };
    }
    return { success: false, error: 'Error al crear la cuenta. Intenta de nuevo.' };
  }

  return { success: true, data };
}
