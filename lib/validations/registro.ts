import { z } from 'zod';

const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü ]+$/;
const phoneRegex = /^\+?[0-9]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const registroSchema = z
  .object({
    nombre: z
      .string()
      .min(1, 'El nombre es obligatorio')
      .regex(nameRegex, 'Solo se permiten letras y espacios'),
    apellido_paterno: z
      .string()
      .min(1, 'El apellido paterno es obligatorio')
      .regex(nameRegex, 'Solo se permiten letras y espacios'),
    apellido_materno: z
      .string()
      .min(1, 'El apellido materno es obligatorio')
      .regex(nameRegex, 'Solo se permiten letras y espacios'),
    correo: z
      .string()
      .min(1, 'El correo es obligatorio')
      .regex(emailRegex, 'Formato de correo inválido'),
    contrasena: z
      .string()
      .min(8, 'La contraseña debe tener al menos 8 caracteres'),
    confirmar_contrasena: z
      .string()
      .min(1, 'Confirma tu contraseña'),
    telefono: z
      .string()
      .min(1, 'El teléfono es obligatorio')
      .regex(phoneRegex, 'Solo se permiten números, con + opcional al inicio'),
  })
  .refine((data) => data.contrasena === data.confirmar_contrasena, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmar_contrasena'],
  });

export type RegistroFormData = z.infer<typeof registroSchema>;
