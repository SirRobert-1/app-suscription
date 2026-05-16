'use server';

import { createServerActionClient } from '@/lib/supabase/server';
import { createClient } from '@supabase/supabase-js';

export async function registrarCuenta(formData: {
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  correo: string;
  contrasena: string;
  telefono: string;
}) {
  // Use anon client to call the RPC function
  const anonClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // Step 1: Insert cuenta row using RPC function (bypasses RLS)
  const { data: rpcResult, error: rpcError } = await anonClient.rpc('insert_cuenta_for_signup', {
    p_nombre: formData.nombre,
    p_apellido_paterno: formData.apellido_paterno,
    p_apellido_materno: formData.apellido_materno,
    p_correo: formData.correo,
    p_telefono: formData.telefono,
  });

  if (rpcError || !rpcResult?.success) {
    const errorMsg = rpcResult?.error || rpcError?.message || 'Error al crear la cuenta';
    if (rpcResult?.code === '23505' || errorMsg.includes('ya está registrado')) {
      return { success: false, error: 'Este correo ya está registrado' };
    }
    return { success: false, error: errorMsg };
  }

  const cuentaId = rpcResult.id;

  // Step 2: Create auth user with email and password
  const supabase = await createServerActionClient();
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: formData.correo,
    password: formData.contrasena,
  });

  if (authError) {
    // Rollback cuenta insert if auth creation fails
    await anonClient.from('cuenta').delete().eq('id', cuentaId);
    return { success: false, error: authError.message };
  }

  // Auto-confirm the email so user can login immediately
  if (authData.user?.id) {
    await anonClient.rpc('confirm_user_email', {
      p_user_id: authData.user.id,
    });
  }

  return { success: true, data: { id: cuentaId } };
}
