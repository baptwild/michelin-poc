'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [tyres, setTyres] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/tyres`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setTyres(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Michelin Tyres</h1>

      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: 'red' }}>Erreur : {error}</p>}

      {tyres.map((t) => (
        <div key={t.id} style={{ marginBottom: 10 }}>
          <b>{t.name}</b> — {t.category}
        </div>
      ))}
    </div>
  );
}
