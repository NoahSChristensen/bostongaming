import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ReactQueryProvider from "@/lib/util/ReactQueryProvider";
import {
  dehydrate,
  DehydratedState,
  useQueryClient,
} from "@tanstack/react-query";
import { tanstackQueryClient } from "@/lib/util/TanstackQueryClient";
import { getBannerData, getProductData } from "@/lib/util/data";
import Header from "@/components/homeLayout/Header";
import { useRequest } from "@/lib/hooks/useRequest";

const ds = dehydrate(tanstackQueryClient);

await tanstackQueryClient.prefetchQuery({
  queryKey: [`bannerData`],
  queryFn: () => useRequest(`${process.env.NEXT_PUBLIC_SERVER_HOST}/slider`),
});

await tanstackQueryClient.prefetchQuery({
  queryKey: [`productData`],
  queryFn: () => useRequest(`${process.env.NEXT_PUBLIC_SERVER_HOST}/product`),
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boston Gaming",
  description: "Best Rig - For The Best Price",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <ReactQueryProvider dehydratedState={ds}>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
