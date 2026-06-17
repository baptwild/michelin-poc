'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
import FilterSidebar, { FilterSection } from '@/components/FilterSidebar/FilterSidebar';
import styles from './products.module.css';

interface Tyre {
  id: number;
  name: string;
  category: string;
  speed: number;
  grip: number;
  imageUrl?: string;
}

const FILTER_SECTIONS: FilterSection[] = [
  { type: 'toggle', title: 'TYPE DE PRATIQUE', options: ['VTT', 'Route', 'Gravel', 'Piste', 'E-Bike'] },
  {
    type: 'toggle',
    title: 'TYPE DE VÉLO',
    options: ['Trail', 'Enduro', 'DH', 'Triathlon', 'Course sur route', 'Endurance sur route', 'Course sur piste', 'Ville', 'Touring', 'Cargo', 'Bikepacking'],
  },
  { type: 'toggle', title: 'NIVEAU', options: ['Compétition', 'Entraînement', 'Loisir', 'Débutant'] },
  { type: 'toggle', title: 'RESSENTI', options: ['Réactif', 'Équilibré', 'Souple'] },
  {
    type: 'toggle',
    title: 'TYPE DE SURFACE',
    options: ['Asphalte lisse', 'Asphalte rugueux', 'Gravel léger', 'Pavés', 'Compact', 'Piste meuble', 'Mixte', 'Boue'],
  },
  { type: 'toggle', title: 'CONDITION DE SURFACE', options: ['Sec', 'Mixte', 'Humide'] },
  { type: 'counter', title: 'TAILLE DE PNEU', initialValue: 700, min: 500, max: 1000, unit: 'mm' },
  { type: 'counter', title: 'DIAMÈTRE DE PNEU', initialValue: 21, min: 18, max: 60, unit: 'mm' },
  { type: 'counter', title: 'POIDS DU CYCLISTE', initialValue: 68, min: 30, max: 150, unit: 'kg' },
];

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
      <FilterSidebar title="FILTRES" sections={FILTER_SECTIONS} />

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
