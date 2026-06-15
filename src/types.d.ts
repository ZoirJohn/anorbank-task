interface Laptop {
	id: number;
	name: string;
	manufacturer: string;

	cpu: {
		brand: string;
		model: string;
	};

	ram: {
		capacityGB: number;
		type: "DDR5" | "LPDDR5X";
	};

	storage: {
		capacityGB: number;
		type: "SSD";
	};

	display: {
		sizeInches: number;
	};

	battery: {
		capacityWh: number;
	};

	weightKg: number;
	priceUSD: number;
}
