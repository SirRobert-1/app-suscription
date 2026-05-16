'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { geologica } from '@/lib/fonts';
import { registroClienteSchema, type RegistroClienteFormData } from '@/lib/validations/registro-cliente';
import { registrarCliente } from '@/app/r/[slug]/actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import clsx from 'clsx';

interface RegistroClienteFormProps {
  sucursalId: number;
  sucursalNombre: string;
}

export function RegistroClienteForm({ sucursalId, sucursalNombre }: RegistroClienteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const form = useForm<RegistroClienteFormData>({
    resolver: zodResolver(registroClienteSchema),
    defaultValues: {
      nombre: '',
      apellidos: '',
      telefono: '',
      fecha_nacimiento: '',
    },
  });

  async function onSubmit(values: RegistroClienteFormData) {
    setIsSubmitting(true);
    setSubmitResult(null);

    const result = await registrarCliente({
      ...values,
      id_sucursal: sucursalId,
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitResult({ success: true, message: '¡Registro completado! Te contactaremos pronto.' });
      form.reset();
    } else {
      setSubmitResult({ success: false, message: result.error || 'Error al registrar' });
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className={`${geologica.variable} font-geologica text-xl`}>
          Tus datos
        </CardTitle>
        <CardDescription>
          Todos los campos son obligatorios
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="registro-cliente-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="nombre"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="cli-nombre">Nombre</FieldLabel>
                  <Input
                    {...field}
                    id="cli-nombre"
                    placeholder="Tu nombre"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="apellidos"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="cli-apellidos">Apellidos</FieldLabel>
                  <Input
                    {...field}
                    id="cli-apellidos"
                    placeholder="Tus apellidos"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="telefono"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="cli-telefono">Teléfono</FieldLabel>
                  <Input
                    {...field}
                    id="cli-telefono"
                    type="tel"
                    placeholder="+52 123 456 7890"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="fecha_nacimiento"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="cli-fecha">Fecha de Nacimiento</FieldLabel>
                  <Input
                    {...field}
                    id="cli-fecha"
                    type="date"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        {submitResult && (
          <div
            className={`w-full rounded-lg p-3 text-sm ${
              submitResult.success
                ? 'bg-green-200 text-green-900 dark:bg-green-900/20 dark:text-green-400'
                : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
            }`}
          >
            {submitResult.message}
          </div>
        )}
        <Button
          type="submit"
          form="registro-cliente-form"
          disabled={isSubmitting}
          className={clsx("w-full bg-morado text-white hover:opacity-90", geologica.className)}
        >
          {isSubmitting ? 'Registrando...' : 'Registrarme'}
        </Button>
      </CardFooter>
    </Card>
  );
}
