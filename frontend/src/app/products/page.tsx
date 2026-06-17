'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
import FilterSidebar from '@/components/FilterSidebar/FilterSidebar';
import styles from './products.module.css';

interface Tyre {
  id: number;
  name: string;
  category: string;
  speed: number;
  grip: number;
  imageUrl?: string;
}

export default function ProductsPage() {
  const [tyres, setTyres] = useState<Tyre[]>([]);
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
    <div className={styles.layout}>
      <FilterSidebar />

      <main className={styles.main}>
        {loading && <p className={styles.state}>Chargement...</p>}
        {error && <p className={styles.error}>Erreur : {error}</p>}

        <div className={styles.grid}>
          {tyres.map((tyre) => (
            <ProductCard key={tyre.id} tyre={tyre} />
          ))}
        </div>
      </main>
    </div>
  );
}
