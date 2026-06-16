'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [tyres, setTyres] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/tyres`)
        .then((res) => res.json())
        .then((data) => setTyres(data));
  }, []);

  return (
      <div style={{ padding: 20 }}>
        <h1>Michelin Tyres</h1>

        {tyres.map((t) => (
            <div key={t.id} style={{ marginBottom: 10 }}>
              <b>{t.name}</b> — {t.category}
            </div>
        ))}
      </div>
  );
}