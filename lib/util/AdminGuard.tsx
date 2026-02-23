"use client";
import React, { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import { useRouter } from "next/navigation";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const {user} = useUser();
  const ctx = useUser();
  console.log(ctx)
  const router = useRouter();

  useEffect(() => {
    console.log("user from useUser:" + user);
    if (!user) router.replace("/login");
  }, [user, router]);

  if (!user) return null;

  return children;
}
