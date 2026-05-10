import clsx from "clsx"
import { geologica } from "@/app/layout"
import { Card } from "../ui/card";

const ITEMS = [
  {
    titulo: "Validación en segundos",
    texto:
      "Tu recepcionista escanea el QR y el sistema decide al instante si el acceso está activo, vencido o si la cuota mensual se agotó. Sin dudas, sin errores.",
  },
  {
    titulo: "QR instantáneo por WhatsApp",
    texto:
      "Al registrar a un cliente, recibe su credencial directo en su teléfono. Si alguna vez la pierde, el empleado la reenvía en un clic.",
  },
  {
    titulo: " Notificaciones automáticas",
    texto:
      "El sistema te avisa qué membresías están por vencer y quién cumple años hoy. Tú solo decides si enviar el mensaje por WhatsApp.",
  },
  {
    titulo: "Historial completo y permanente",
    texto:
      "Cada visita queda registrada con fecha, hora y el empleado que autorizó el acceso. Para siempre. Incluso si el empleado ya no trabaja contigo.",
  },
  {
    titulo: "Sin hardware especial",
    texto:
      "Funciona desde cualquier teléfono, tablet o computadora con cámara. No necesitas comprar ni instalar nada.",
  },
  {
    titulo: "Control total de planes",
    texto:
      "Define si tus clientes tienen acceso ilimitado, por días fijos a la semana o hasta agotar una cuota mensual de visitas. Tú pones las reglas.",
  }
];

function LoQueNecesitas() {
  return (
    <div className="flex flex-col items-center text-center w-screen min-h-screen py-10 px-40">
      <h1 className={clsx("text-8xl font-bold max-w-5xl text-balance", geologica.className)}>
        Todo lo que necesitas para gestionar tu negocio
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-10">
        {ITEMS.map((item, index) => (
          <Card key={index} className={clsx("flex flex-col text-start w-full pl-5 pt-5 pb-10 rounded-[25px] shadow-lg shadow-black/40")}>
            <h2 className={clsx("text-2xl font-bold", geologica.className)}>
              {item.titulo}
            </h2>
            <p className={clsx("text-lg font-normal", geologica.className)}>
              {item.texto}
            </p>
          </Card >
        ))}
      </div>
    </div>
  )
}

export default LoQueNecesitas