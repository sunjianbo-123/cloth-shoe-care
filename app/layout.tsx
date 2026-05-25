import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "净履衣橱洗护店",
  description: "衣服、鞋子、皮具、家纺一站式专业洗护服务，支持到店、同城取送和线上预约。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
