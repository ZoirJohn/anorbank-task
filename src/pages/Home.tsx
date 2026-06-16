import { useOutletContext } from "react-router";
import Card from "../components/ui/Card";

export default function Home() {
	const { laptops, select, chosen: chosenLaptops, reject } = useOutletContext<Store>();
	return (
		<section>
			<div className="mx-auto p-2">
				<div className="flex flex-wrap gap-2 mb-2 justify-center">
					{laptops.map((laptop) => {
						return <Card product={laptop} key={laptop.id} action={select} disabled={chosenLaptops.includes(laptop)} reaction={reject} />;
					})}
				</div>
			</div>
		</section>
	);
}
