import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./global.css";
export const metadata = {
  title: "Flexxible",
  description: "Showcase and discover remakeable developer projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
