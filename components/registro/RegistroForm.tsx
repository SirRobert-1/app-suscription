'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { geologica } from '@/lib/fonts';
import { registroSchema, type RegistroFormData } from '@/lib/validations/registro';
import { registrarCuenta } from '@/app/registro/actions';
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

export function RegistroForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const form = useForm<RegistroFormData>({
    resolver: zodResolver(registroSchema),
    defaultValues: {
      nombre: '',
      apellido_paterno: '',
      apellido_materno: '',
      correo: '',
      contrasena: '',
      confirmar_contrasena: '',
      telefono: '',
    },
  });

  async function onSubmit(values: RegistroFormData) {
    setIsSubmitting(true);
    setSubmitResult(null);

    const { confirmar_contrasena, ...cuentaData } = values;
    const result = await registrarCuenta(cuentaData);

    setIsSubmitting(false);

    if (result.success) {
      setSubmitResult({ success: true, message: '¡Cuenta creada exitosamente!' });
      form.reset();
    } else {
      setSubmitResult({ success: false, message: result.error || 'Error al crear la cuenta' });
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className={`${geologica.variable} font-geologica text-xl`}>
          Completa tu registro
        </CardTitle>
        <CardDescription>
          Todos los campos son obligatorios
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="registro-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="nombre"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="reg-nombre">Nombre</FieldLabel>
                  <Input
                    {...field}
                    id="reg-nombre"
                    placeholder="Tu nombre"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="apellido_paterno"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="reg-apellido-paterno">Apellido Paterno</FieldLabel>
                  <Input
                    {...field}
                    id="reg-apellido-paterno"
                    placeholder="Tu apellido paterno"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="apellido_materno"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="reg-apellido-materno">Apellido Materno</FieldLabel>
                  <Input
                    {...field}
                    id="reg-apellido-materno"
                    placeholder="Tu apellido materno"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="correo"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="reg-correo">Correo Electrónico</FieldLabel>
                  <Input
                    {...field}
                    id="reg-correo"
                    type="email"
                    placeholder="correo@ejemplo.com"
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
                  <FieldLabel htmlFor="reg-telefono">Teléfono</FieldLabel>
                  <Input
                    {...field}
                    id="reg-telefono"
                    type="tel"
                    placeholder="+52 123 456 7890"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="contrasena"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="reg-contrasena">Contraseña</FieldLabel>
                  <Input
                    {...field}
                    id="reg-contrasena"
                    type="password"
                    placeholder="Mínimo 8 caracteres"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="confirmar_contrasena"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="reg-confirmar-contrasena">Confirmar Contraseña</FieldLabel>
                  <Input
                    {...field}
                    id="reg-confirmar-contrasena"
                    type="password"
                    placeholder="Repite tu contraseña"
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
          form="registro-form"
          disabled={isSubmitting}
          className={clsx("w-full bg-morado text-white hover:opacity-90", geologica.className)}
        >
          {isSubmitting ? 'Creando cuenta...' : 'Crear cuenta'}
        </Button>
      </CardFooter>
    </Card>
  );
}
