import { Metadata } from "@/Metadata";
import "./globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <Metadata />
      </head>
      <body>{children}</body>
    </html>
  );
}
