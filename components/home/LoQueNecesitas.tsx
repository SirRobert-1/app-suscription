import clsx from 'clsx';
import { geologica } from '@/lib/fonts';
import { Card } from '../ui/card';

const ITEMS = [
  {
    titulo: 'Validación en segundos',
    texto:
      'Tu recepcionista escanea el QR y el sistema decide al instante si el acceso está activo, vencido o si la cuota mensual se agotó. Sin dudas, sin errores.',
  },
  {
    titulo: 'QR instantáneo por WhatsApp',
    texto:
      'Al registrar a un cliente, recibe su credencial directo en su teléfono. Si alguna vez la pierde, el empleado la reenvía en un clic.',
  },
  {
    titulo: ' Notificaciones automáticas',
    texto:
      'El sistema te avisa qué membresías están por vencer y quién cumple años hoy. Tú solo decides si enviar el mensaje por WhatsApp.',
  },
  {
    titulo: 'Historial completo y permanente',
    texto:
      'Cada visita queda registrada con fecha, hora y el empleado que autorizó el acceso. Para siempre. Incluso si el empleado ya no trabaja contigo.',
  },
  {
    titulo: 'Sin hardware especial',
    texto:
      'Funciona desde cualquier teléfono, tablet o computadora con cámara. No necesitas comprar ni instalar nada.',
  },
  {
    titulo: 'Control total de planes',
    texto:
      'Define si tus clientes tienen acceso ilimitado, por días fijos a la semana o hasta agotar una cuota mensual de visitas. Tú pones las reglas.',
  },
];

function LoQueNecesitas() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center px-40 py-10 text-center">
      <h1 className={clsx('max-w-5xl text-8xl font-bold text-balance', geologica.className)}>
        Todo lo que necesitas para gestionar tu negocio
      </h1>
      <div className="mt-10 grid w-full grid-cols-1 gap-10 md:grid-cols-3">
        {ITEMS.map((item, index) => (
          <Card
            key={index}
            className={clsx(
              'flex w-full flex-col rounded-[25px] pt-5 pb-10 pl-5 text-start shadow-lg shadow-black/40'
            )}
          >
            <h2 className={clsx('text-2xl font-bold', geologica.className)}>{item.titulo}</h2>
            <p className={clsx('text-lg font-normal', geologica.className)}>{item.texto}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default LoQueNecesitas;
