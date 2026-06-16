import { NavLink } from "react-router";

export default function Header() {
	return (
		<header>
			<div className="container mx-auto py-4">
				<nav>
					<ul className="flex gap-2">
						<li>
							<NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/comparison" className={({ isActive }) => (isActive ? "underline" : "")}>
								Comparison
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
