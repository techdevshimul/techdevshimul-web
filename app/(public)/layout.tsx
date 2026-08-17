import Footer from "@/components/public/layout/Footer";
import Header from "@/components/public/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "techdevshimul | Shimul Hossain",
  description:
    "techdevshimul is Shimul Hossain's web application and portfolio platform.",
};

export default function PublicRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
