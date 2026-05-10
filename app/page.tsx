import Hero from "@/components/home/Hero";
import LoQueNecesitas from "@/components/home/LoQueNecesitas";
import Planes from "@/components/home/Planes";
import Proceso from "@/components/home/Proceso";
import TodaviaControlas from "@/components/home/TodaviaControlas";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <TodaviaControlas />
      <Proceso />
      <LoQueNecesitas />
      <Planes />
    </div>
  );
}
