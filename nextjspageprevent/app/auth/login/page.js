"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { push } = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit =async (e) => {
    e.preventDefault();

    const res=await fetch('/api/login',{
        method:"POST",
        body:JSON.stringify({username:username,password:password})
    })
    const data=await res.json();
    console.log(data)
    push("/admin/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
