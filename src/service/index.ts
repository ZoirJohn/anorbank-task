import { useState } from "react";

function useStore() {
	const [laptops, _] = useState<Laptop[]>([
		{
			id: 1,
			name: "ThinkPad X2",
			manufacturer: "Lenovo",
			cpu: { brand: "Intel", model: "Core Ultra 7" },
			ram: { capacityGB: 16, type: "DDR5" },
			storage: { capacityGB: 512, type: "SSD" },
			display: { sizeInches: 14 },
			battery: { capacityWh: 65 },
			weightKg: 1.3,
			priceUSD: 1299,
		},
		{
			id: 2,
			name: "EliteBook 900",
			manufacturer: "HP",
			cpu: { brand: "Intel", model: "Core Ultra 7" },
			ram: { capacityGB: 16, type: "DDR5" },
			storage: { capacityGB: 512, type: "SSD" },
			display: { sizeInches: 14 },
			battery: { capacityWh: 65 },
			weightKg: 1.4,
			priceUSD: 1249,
		},
		{
			id: 3,
			name: "Latitude 7450",
			manufacturer: "Dell",
			cpu: { brand: "Intel", model: "Core Ultra 7" },
			ram: { capacityGB: 16, type: "DDR5" },
			storage: { capacityGB: 512, type: "SSD" },
			display: { sizeInches: 14 },
			battery: { capacityWh: 68 },
			weightKg: 1.36,
			priceUSD: 1349,
		},
		{
			id: 4,
			name: "ZenBook 14",
			manufacturer: "Asus",
			cpu: { brand: "AMD", model: "Ryzen 7 8840HS" },
			ram: { capacityGB: 16, type: "LPDDR5X" },
			storage: { capacityGB: 1024, type: "SSD" },
			display: { sizeInches: 14 },
			battery: { capacityWh: 75 },
			weightKg: 1.28,
			priceUSD: 1199,
		},
		{
			id: 5,
			name: "Swift Go 14",
			manufacturer: "Acer",
			cpu: { brand: "Intel", model: "Core Ultra 5" },
			ram: { capacityGB: 16, type: "DDR5" },
			storage: { capacityGB: 512, type: "SSD" },
			display: { sizeInches: 14 },
			battery: { capacityWh: 65 },
			weightKg: 1.25,
			priceUSD: 999,
		},
		{
			id: 6,
			name: "MacBook Air M5",
			manufacturer: "Apple",
			cpu: { brand: "Apple", model: "M5" },
			ram: { capacityGB: 16, type: "LPDDR5X" },
			storage: { capacityGB: 512, type: "SSD" },
			display: { sizeInches: 13.6 },
			battery: { capacityWh: 66 },
			weightKg: 1.24,
			priceUSD: 1399,
		},
		{
			id: 7,
			name: "Yoga Pro 7",
			manufacturer: "Lenovo",
			cpu: { brand: "AMD", model: "Ryzen 7 8840HS" },
			ram: { capacityGB: 32, type: "LPDDR5X" },
			storage: { capacityGB: 1024, type: "SSD" },
			display: { sizeInches: 14.5 },
			battery: { capacityWh: 73 },
			weightKg: 1.49,
			priceUSD: 1499,
		},
		{
			id: 8,
			name: "Spectre x360",
			manufacturer: "HP",
			cpu: { brand: "Intel", model: "Core Ultra 7" },
			ram: { capacityGB: 32, type: "LPDDR5X" },
			storage: { capacityGB: 1024, type: "SSD" },
			display: { sizeInches: 14 },
			battery: { capacityWh: 68 },
			weightKg: 1.44,
			priceUSD: 1599,
		},
		{
			id: 9,
			name: "XPS 14",
			manufacturer: "Dell",
			cpu: { brand: "Intel", model: "Core Ultra 7" },
			ram: { capacityGB: 32, type: "LPDDR5X" },
			storage: { capacityGB: 1024, type: "SSD" },
			display: { sizeInches: 14.5 },
			battery: { capacityWh: 70 },
			weightKg: 1.68,
			priceUSD: 1699,
		},
		{
			id: 10,
			name: "ROG Zephyrus G14",
			manufacturer: "Asus",
			cpu: { brand: "AMD", model: "Ryzen 9 8945HS" },
			ram: { capacityGB: 32, type: "LPDDR5X" },
			storage: { capacityGB: 1024, type: "SSD" },
			display: { sizeInches: 14 },
			battery: { capacityWh: 73 },
			weightKg: 1.5,
			priceUSD: 1899,
		},
		{
			id: 11,
			name: "Predator Triton 14",
			manufacturer: "Acer",
			cpu: { brand: "Intel", model: "Core Ultra 9" },
			ram: { capacityGB: 32, type: "DDR5" },
			storage: { capacityGB: 1024, type: "SSD" },
			display: { sizeInches: 14.5 },
			battery: { capacityWh: 76 },
			weightKg: 1.7,
			priceUSD: 1799,
		},
		{
			id: 12,
			name: "Surface Laptop 7",
			manufacturer: "Microsoft",
			cpu: { brand: "Qualcomm", model: "Snapdragon X Elite" },
			ram: { capacityGB: 16, type: "LPDDR5X" },
			storage: { capacityGB: 512, type: "SSD" },
			display: { sizeInches: 13.8 },
			battery: { capacityWh: 54 },
			weightKg: 1.34,
			priceUSD: 1299,
		},
	]);

	const [chosen, setChosen] = useState<Laptop[]>([]);

	function select(id: Laptop["id"]) {
		if (chosen.length >= 3) {
			return;
		}
		storeId(id);
		setChosen((prev) => [...prev, laptops.find((laptop) => laptop.id === id) as Laptop]);
	}

	function reject(id: Laptop["id"]) {
		deleteId(id);
		setChosen((prev) => [...prev.filter((laptop) => laptop.id !== id)]);
	}

	function storeId(id: Laptop["id"]) {
		let chosen: number[] = JSON.parse(localStorage.getItem("chosen") as string);
		if (!chosen) {
			chosen = [];
		}

		if (chosen.length >= 3 || chosen.includes(id)) {
			return;
		}

		chosen.push(id);
		localStorage.setItem("chosen", JSON.stringify(chosen));
	}

	function deleteId(id: Laptop["id"]) {
		let chosen: number[] = JSON.parse(localStorage.getItem("chosen") as string);
		chosen = chosen.filter((chosenId) => chosenId !== id);
		localStorage.setItem("chosen", JSON.stringify(chosen));
	}

	function fetchChosen() {
		const raw = localStorage.getItem("chosen");

		if (!raw) {
			setChosen([]);
			return;
		}

		const chosenFromStorage: number[] = JSON.parse(raw);

		const fetchedLaptops = chosenFromStorage.map((id) => laptops.find((laptop) => laptop.id === id)).filter(Boolean) as Laptop[];

		setChosen(fetchedLaptops);
	}
	return { laptops, chosen, select, reject, fetchChosen };
}
export { useStore };
