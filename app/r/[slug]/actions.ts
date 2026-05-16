'use server';

export async function registrarCliente(formData: {
  nombre: string;
  apellidos: string;
  telefono: string;
  fecha_nacimiento: string;
  id_sucursal: number;
}) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  console.log('[registrarCliente] Supabase URL:', supabaseUrl);
  console.log('[registrarCliente] Supabase Key present:', !!supabaseKey);
  console.log('[registrarCliente] FormData:', JSON.stringify(formData));

  // Usar fetch directo con solo apikey header (sin Authorization JWT)
  const response = await fetch(`${supabaseUrl}/rest/v1/registro_cliente?select=id`, {
    method: 'POST',
    headers: {
      'apikey': supabaseKey!,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    },
    body: JSON.stringify({
      nombre: formData.nombre,
      apellidos: formData.apellidos,
      telefono: formData.telefono,
      fecha_nacimiento: formData.fecha_nacimiento,
      id_sucursal: formData.id_sucursal,
    })
  });

  console.log('[registrarCliente] Response status:', response.status);
  console.log('[registrarCliente] Response ok:', response.ok);

  if (!response.ok) {
    const errorText = await response.text();
    console.log('[registrarCliente] Error response:', errorText);
    return { success: false, error: `Error al registrar: ${response.status} ${errorText}` };
  }

  const data = await response.json();
  console.log('[registrarCliente] Data:', data);

  return { success: true, data };
}
