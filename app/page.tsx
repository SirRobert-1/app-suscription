import Hero from '@/components/home/Hero';
import LoQueNecesitas from '@/components/home/LoQueNecesitas';
import Planes from '@/components/home/Planes';
import Proceso from '@/components/home/Proceso';
import TodaviaControlas from '@/components/home/TodaviaControlas';
import { FloatingButton } from '@/components/home/FloatingButton';
import { CTAFinal } from '@/components/home/CTAFinal';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <FloatingButton />
      <ScrollAnimation animation="fade-in">
        <Hero />
      </ScrollAnimation>
      <ScrollAnimation animation="fade-right">
        <TodaviaControlas />
      </ScrollAnimation>
      <ScrollAnimation animation="scale-fade">
        <Proceso />
      </ScrollAnimation>
      <ScrollAnimation animation="fade-left">
        <LoQueNecesitas />
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up">
        <Planes />
      </ScrollAnimation>
      <ScrollAnimation animation="scale-fade" delay={0.1}>
        <CTAFinal />
      </ScrollAnimation>
    </div>
  );
}
