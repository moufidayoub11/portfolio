import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairsTransition from "@/components/StairsTransition";
import { Suspense } from "react";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Ayoub Moufid",
  description: "Ayoub Moufid's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/photo.png" sizes="any" />
      </head>
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairsTransition />
        <PageTransition>
          <Suspense>
            {children}
          </Suspense>
        </PageTransition>
      </body>
    </html>
  );
}
