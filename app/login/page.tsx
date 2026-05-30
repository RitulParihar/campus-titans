"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("LOGIN CLICKED"); // useful debug

    setLoading(true);

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    setLoading(false);

    if (response.ok) {
      router.push("/");
      router.refresh();
    } else {
      alert(data.error);
    }
  }

  return (
    <main className="mx-auto max-w-md py-20">
      <h1 className="mb-8 text-3xl font-bold">
        Login
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-xl border p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-xl border p-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"   // ✅ THIS IS THE FIX
          disabled={loading}
          className="w-full rounded-xl bg-black p-3 text-white"
        >
          {loading ? "Signing In..." : "Login"}
        </button>
      </form>
    </main>
  );
}