import { useOutletContext } from "react-router";
import { checkDiff } from "../utils/checkDifference";

export default function Comparison() {
	const { chosen } = useOutletContext<Store>();
	const data = [
		{ label: "CPU", getValue: (laptop: Laptop) => `${laptop.cpu.brand} ${laptop.cpu.model}` },
		{ label: "RAM", getValue: (laptop: Laptop) => `${laptop.ram.type} ${laptop.ram.capacityGB}GB` },
		{ label: "Storage", getValue: (laptop: Laptop) => `${laptop.storage.type} ${laptop.storage.capacityGB}GB` },
		{ label: "Display", getValue: (laptop: Laptop) => `${laptop.display.sizeInches}"` },
		{ label: "Battery", getValue: (laptop: Laptop) => `${laptop.battery.capacityWh}Wh` },
		{ label: "Weight", getValue: (laptop: Laptop) => `${laptop.weightKg}Kg` },
		{ label: "Price", getValue: (laptop: Laptop) => `${laptop.priceUSD}$` },
	];
	return (
		<section>
			<div className="container mx-auto flex items-center justify-center">
				<div className="w-3/4">
					<div className="grid grid-cols-4 border-b p-4 ">
						<div className="">
							<h2 className="text-lg text-start font-normal">Specifications</h2>
						</div>
						{chosen.map((laptop) => (
							<div className="">
								<h2 className="text-lg font-medium text-center">
									{laptop.manufacturer} {laptop.name}
								</h2>
							</div>
						))}
					</div>
					{chosen.length ? (
						data.map(({ label, getValue }) => (
							<div key={label} className={`grid grid-cols-4 border-b p-4 ${checkDiff(chosen, getValue) ? "bg-amber-50 dark:bg-amber-950/30" : ""}`}>
								<h2 className="text-lg font-normal">{label}</h2>
								{chosen.map((laptop) => (
									<h2 key={laptop.id} className="text-lg text-center">
										{getValue(laptop)}
									</h2>
								))}
							</div>
						))
					) : (
						<></>
					)}
				</div>
			</div>
		</section>
	);
}
