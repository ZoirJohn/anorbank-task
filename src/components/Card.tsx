export default function Card({ product, action, disabled }: { product: Laptop; action: (id: Laptop["id"]) => void; disabled: boolean }) {
	return (
		<div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-900 dark:border-gray-700 shrink-0">
			<div className="mb-4">
				<p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-0.5">{product.manufacturer}</p>
				<h3 className="text-lg font-semibold text-gray-900 dark:text-white">{product.name}</h3>
			</div>

			<div className="flex items-baseline gap-1 mb-6">
				<span className="text-3xl font-semibold text-gray-900 dark:text-white">${product.priceUSD.toLocaleString()}</span>
			</div>

			<ul className="space-y-2.5 mb-6">
				{[
					{
						icon: (
							<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
							</svg>
						),
						label: "CPU",
						value: `${product.cpu.brand} ${product.cpu.model}`,
					},
					{
						icon: (
							<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
							</svg>
						),
						label: "RAM",
						value: `${product.ram.capacityGB}GB ${product.ram.type}`,
					},
					{
						icon: (
							<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
							</svg>
						),
						label: "Storage",
						value: `${product.storage.capacityGB}GB ${product.storage.type}`,
					},
					{
						icon: (
							<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						),
						label: "Display",
						value: `${product.display.sizeInches}" IPS`,
					},
					{
						icon: (
							<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M21 10h-1V6a1 1 0 00-1-1H3a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1v-4h1a1 1 0 001-1v-2a1 1 0 00-1-1z" />
							</svg>
						),
						label: "Battery",
						value: `${product.battery.capacityWh}Wh`,
					},
					{
						icon: (
							<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
							</svg>
						),
						label: "Weight",
						value: `${product.weightKg}kg`,
					},
				].map(({ icon, label, value }) => (
					<li key={label} className="flex items-center gap-3">
						<span className="text-gray-400 dark:text-gray-500 shrink-0">{icon}</span>
						<span className="text-xs text-gray-400 dark:text-gray-500 w-14 shrink-0">{label}</span>
						<span className="text-sm text-gray-700 dark:text-gray-200 font-medium">{value}</span>
					</li>
				))}
			</ul>

			<div className="border-t border-gray-100 dark:border-gray-800 mb-4" />

			<div className="flex gap-2">
				<button onClick={() => action(product.id)} disabled={disabled} type="button" className="flex-1 py-2.5 px-4 bg-gray-900 hover:bg-gray-700 active:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
					Compare
				</button>
			</div>
		</div>
	);
}
