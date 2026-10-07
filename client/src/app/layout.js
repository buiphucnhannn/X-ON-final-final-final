import { Cormorant_Garamond, Montserrat } from "next/font/google";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "X-On | Press On. Slay On. Repeat. — Handmade Press-On Nails",
  description:
    "X-On is where modern nail artistry meets effortless beauty. Handmade press-on nails and carefully selected nail essentials designed with quality, style, and performance in mind.",
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${montserrat.variable} w-full`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen w-full bg-petal-pattern text-[#1F171A] font-sans antialiased selection:bg-[#FCE4E8] selection:text-[#8F3349]">
        <ScrollRevealObserver />
        {children}
      </body>
    </html>
  );
}
