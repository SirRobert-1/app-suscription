import { z } from 'zod';

const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü ]+$/;
const phoneRegex = /^\+?[0-9]+$/;

export const registroClienteSchema = z.object({
  nombre: z
    .string()
    .min(1, 'El nombre es obligatorio')
    .regex(nameRegex, 'Solo se permiten letras y espacios'),
  apellidos: z
    .string()
    .min(1, 'Los apellidos son obligatorios')
    .regex(nameRegex, 'Solo se permiten letras y espacios'),
  telefono: z
    .string()
    .min(1, 'El teléfono es obligatorio')
    .regex(phoneRegex, 'Solo se permiten números, con + opcional al inicio'),
  fecha_nacimiento: z
    .string()
    .min(1, 'La fecha de nacimiento es obligatoria')
    .refine(
      (date) => {
        const parsedDate = new Date(date);
        const today = new Date();
        const minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
        return !isNaN(parsedDate.getTime()) && parsedDate <= today && parsedDate >= minDate;
      },
      {
        message: 'Fecha de nacimiento inválida',
      }
    ),
});

export type RegistroClienteFormData = z.infer<typeof registroClienteSchema>;
