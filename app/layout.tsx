import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "VATSTECH",
  description: "Your Complete Business Solution Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}
