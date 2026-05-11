import { geologica } from "@/lib/fonts";
import { Button } from "@/components/ui/button";

export function CTAFinal() {
	return (
		<div className="flex flex-col items-center justify-center text-center w-screen h-screen py-10 px-4 md:px-10 lg:px-40 bg-morado/10">
			<h1 className={`${geologica.className} text-5xl md:text-8xl font-bold  max-w-5xl`}>
				No te pierdas de esta gran oportunidad
			</h1>
			<Button
				className={`${geologica.className} bg-morado text-white hover:bg-morado/90 font-bold text-xl md:text-2xl px-8 md:px-10 py-5 md:py-6 rounded-full mt-10`}
			>
				Contrata ahora
			</Button>
		</div>
	);
}
