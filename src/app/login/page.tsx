"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
interface CredentialType {
  email: string;
  password: string;
}
interface ResponseType {
  message: string;
  status: boolean;
}
export default function Login() {
  const [credentials, setCredential] = useState<CredentialType>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("")
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data: ResponseType = await res.json();
    if (res.status === 200) {
      if (data.status) {
        router.push("/dashboard");
      } else {
        setErrorMessage(data.message);
      }
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="flex flex-col gap-4 md:w-1/2 mx-auto p-4"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="email"
          value={credentials.email}
          onChange={(e) =>
            setCredential({ ...credentials, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredential({ ...credentials, password: e.target.value })
          }
        />
        {errorMessage && (
          <p className="text-sm text-red-600 font-normal text-center">
            {errorMessage}
          </p>
        )}
        <button
          className="border border-indigo-500  py-2 px-4 hover:border-indigo-600"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
