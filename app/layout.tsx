import "@/styles/globals.css";
import type { Metadata } from "next";
import { SideHome } from "@/components";

export const metadata: Metadata = {
	title: "Navigation Menu 01",
	description: "Navigation Menu Component by devwithzain",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<SideHome />
				{children}
			</body>
		</html>
	);
}
