import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import Analytics from "~/components/Analytics";
import { cn } from "~/utils/cn";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "潘慧玲 - Huiling Pan | 让 AI 理解人类",
  description: "AI创业者，探索AI技术与人文关怀的融合，致力于通过科技创新改变世界",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={cn(inter.className, "antialiased common-bg")}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-sm backdrop-blur-sm">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-center md:justify-between items-center">
            <div className="text-lg font-serif text-gray-800 hidden md:block">潘慧玲 | Huiling Pan</div>
            <div className="flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                首页
              </Link>
              <Link href="/experience" className="text-gray-600 hover:text-gray-900 transition-colors">
                个人经历
              </Link>
            </div>
          </nav>
        </header>
        <div id="app" className="pt-16">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
