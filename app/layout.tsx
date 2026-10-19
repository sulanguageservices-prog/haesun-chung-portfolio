import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Haesun Chung | 비즈니스 코치 · Business Coach";
const description =
  "Haesun Chung is a business coach helping leaders and teams find clarity and grow with confidence. 정해선 비즈니스 코치 — 1:1, 그룹, 기업 코칭.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://haesunchung.com"),
  title,
  description,
  keywords: ["Haesun Chung", "business coach", "executive coaching", "비즈니스 코칭", "정해선", "리더십 코칭"],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Haesun Chung",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
  },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = { themeColor: "#FBF8F1" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
