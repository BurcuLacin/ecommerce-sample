import "./globals.css";
import { Providers } from "@/redux/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>E-commerce</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
