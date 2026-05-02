import { useState } from "react";

export default function Tenants() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/1/tenants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    if (response.ok) {
      const data = await response.json();
      setMessage(`Tenant erstellt: ${data.name}`);
    }
  }

  return (
    <div>
      <h1>Tenant erstellen</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tenantName">Tenant Name</label>
        <input
          id="tenantName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Senden</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
