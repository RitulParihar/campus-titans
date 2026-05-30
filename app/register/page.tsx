"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    const response =
      await fetch(
        "/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

    const data =
      await response.json();

    setLoading(false);

    if (response.ok) {
      router.push("/login");
    } else {
      alert(data.error);
    }
  }

  return (
    <main className="mx-auto max-w-md py-20">
      <h1 className="mb-8 text-3xl font-bold">
        Create Account
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          placeholder="Name"
          className="w-full rounded-xl border p-3"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          placeholder="Email"
          type="email"
          className="w-full rounded-xl border p-3"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full rounded-xl border p-3"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          disabled={loading}
          className="w-full rounded-xl bg-black p-3 text-white"
        >
          {loading
            ? "Creating..."
            : "Register"}
        </button>
      </form>
    </main>
  );
}