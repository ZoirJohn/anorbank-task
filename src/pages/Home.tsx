import { useEffect } from "react";
import Card from "../components/Card";
import { useStore } from "../service";

export default function Home() {
	const {fetchChosen, laptops, chosen: chosenLaptops, select, reject } = useStore();
	useEffect(()=>{
		fetchChosen()
	},[])
	return (
		<section>
			<div className="container overflow-x-auto flex mx-auto gap-2 hover:cursor-grab showcase">
				{laptops.map((laptop) => (
					<Card product={laptop} key={laptop.id} action={select} disabled={chosenLaptops.includes(laptop)} />
				))}
			</div>
			{chosenLaptops.map((laptop) => (
				<Card product={laptop} key={laptop.id} action={select} disabled={chosenLaptops.includes(laptop)} />
			))}
		</section>
	);
}
