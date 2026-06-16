export function checkDiff(laptops: Laptop[], getValue: (l: Laptop) => string) {
	const first = getValue(laptops[0]);
	return laptops.some((l) => getValue(l) !== first);
}
