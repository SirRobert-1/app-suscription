import clsx from 'clsx'
import { geologica } from '@/lib/fonts'

const ITEMS = [
  {
    icono: "/Paso1.svg",
    titulo: "Paso 1: Registro",
    texto:
      "Registra al cliente. El recepcionista captura el nombre, teléfono y plan del cliente en menos de 3 minutos. El sistema genera automáticamente su código QR único.",
  },
  {
    icono: "/Paso2.svg",
    titulo: "Paso 2: Entrega del QR",
    texto:
      "El QR llega por WhatsApp. El cliente recibe su credencial directo en su teléfono. Sin apps que descargar, sin contraseñas que recordar.",
  },
  {
    icono: "/Paso3.svg",
    titulo: "Paso 3: Escaneo",
    texto:
      "Escanea y listo. El cliente llega, muestra su QR y en menos de 2 segundos aparece en pantalla: Acceso Permitido ✓ o Acceso Denegado con el motivo exacto.",
  },
];

function Proceso() {
  return (
    <div className="flex flex-col items-center justify-between text-center w-screen h-[90vh] py-10 px-20">
      <h1 className={clsx("text-8xl font-bold max-w-4xl", geologica.className)}>
        Así de simple es el nuevo proceso
      </h1>
      <p className={clsx("text-xl font-normal max-w-3xl", geologica.className)}>
        Tres pasos. Un dispositivo con cámara. Cero complicaciones.
      </p>
      <div className="flex justify-between w-full mt-10">
        {ITEMS.map((item, index) => (
          <div key={index} className="flex flex-col text-center max-w-xs">
            <img src={item.icono} alt={`Icono ${index + 1}`} className="w-20 h-20 mx-auto mb-5" />
            <h2 className={clsx("text-2xl font-bold", geologica.className)}>
              {item.titulo}
            </h2>
            <p className={clsx("text-lg font-normal", geologica.className)}>
              {item.texto}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proceso