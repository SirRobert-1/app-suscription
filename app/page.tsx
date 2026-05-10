import Hero from "@/components/home/Hero";
import TodaviaControlas from "@/components/home/TodaviaControlas";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <TodaviaControlas />
    </div>
  );
}
