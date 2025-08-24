import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Лендинг робота для облигаций",
    description: "Автоматическая торговая система для облигаций с роботом",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className="font-sans antialiased">
        {children}
        </body>
        </html>
    );
}
