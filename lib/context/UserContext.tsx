"use client";
import { createContext, useState } from "react";
import { useRequest } from "../hooks/useRequest";
import { User, UserContextType } from "../util/type";

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  async function login(email: string, password: string) {
    const loggedInUser = await useRequest<User>(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/login/login`,
      {
        method: "POST",
        data: { email, password },
      },
    );

    setUser(loggedInUser);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
