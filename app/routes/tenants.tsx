import { useState } from "react";

export default function Tenants() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

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
