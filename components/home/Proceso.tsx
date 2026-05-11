import clsx from 'clsx';
import { geologica } from '@/lib/fonts';

const ITEMS = [
  {
    icono: '/Paso1.svg',
    titulo: 'Paso 1: Registro',
    texto:
      'Registra al cliente. El recepcionista captura el nombre, teléfono y plan del cliente en menos de 3 minutos. El sistema genera automáticamente su código QR único.',
  },
  {
    icono: '/Paso2.svg',
    titulo: 'Paso 2: Entrega del QR',
    texto:
      'El QR llega por WhatsApp. El cliente recibe su credencial directo en su teléfono. Sin apps que descargar, sin contraseñas que recordar.',
  },
  {
    icono: '/Paso3.svg',
    titulo: 'Paso 3: Escaneo',
    texto:
      'Escanea y listo. El cliente llega, muestra su QR y en menos de 2 segundos aparece en pantalla: Acceso Permitido ✓ o Acceso Denegado con el motivo exacto.',
  },
];

function Proceso() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between px-5 md:px-20 py-10 text-center">
      <h1 className={clsx('max-w-4xl text-5xl md:text-8xl font-bold', geologica.className)}>
        Así de simple es el nuevo proceso
      </h1>
      <p className={clsx('max-w-3xl text-xl font-normal', geologica.className)}>
        Tres pasos. Un dispositivo con cámara. Cero complicaciones.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 w-full place-items-center">
        {ITEMS.map((item, index) => (
          <div key={index} className="flex max-w-xs flex-col text-center mb-5 md:mb-0">
            <img src={item.icono} alt={`Icono ${index + 1}`} className="mx-auto mb-5 h-20 w-20" />
            <h2 className={clsx('text-2xl font-bold', geologica.className)}>{item.titulo}</h2>
            <p className={clsx('text-lg font-normal', geologica.className)}>{item.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proceso;
