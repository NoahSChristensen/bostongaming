import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ReactQueryProvider from "@/lib/util/ReactQueryProvider";
import { tanstackQueryClient } from "@/lib/util/TanstackQueryClient";
import { dehydrate } from "@tanstack/react-query";
import { UserProvider } from "@/lib/context/UserContext";
import AdminGuard from "@/lib/util/AdminGuard";

const ds = dehydrate(tanstackQueryClient);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <ReactQueryProvider dehydratedState={ds}>
          <AdminGuard>
            <UserProvider>{children}</UserProvider>
          </AdminGuard>
        </ReactQueryProvider>
  );
}
