import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
});

export const metadata = {
  title: "Best Travel Guidence",
  description: "Countries Travels"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-black`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
