"use client";
import { useUser } from "@/lib/hooks/useUser";
import React, { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRequest } from "@/lib/hooks/useRequest";
import { useRouter } from "next/navigation";
import { log } from "console";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {user, login} = useUser();

  const router = useRouter();

  type LoginBody = {
  email: string;
  password: string;
};

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    try {
        await login(email, password);
        router.replace("/admin");
    }
    catch(error) {
        console.error("Login failed", error);
    }
  }
  return (
    <div>
      <form className="flex flex-col gap-4 text-main-col" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="w-full p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
