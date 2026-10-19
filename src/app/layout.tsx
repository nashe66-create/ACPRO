import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "ACPRO | Home air conditioning", description: "A clearer way to compare home air-conditioning installation offers." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-GB"><body>{children}</body></html>; }
