'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
import FilterSidebar, { FilterSection } from '@/components/FilterSidebar/FilterSidebar';
import type { Tyre } from '@/types/tyre';
import styles from './products.module.css';

const PRATIQUE_SECTION_TITLE = 'TYPE DE PRATIQUE';

const PRATIQUE_TO_CATEGORY: Record<string, string> = {
  VTT: 'mtb',
  Route: 'road',
  Gravel: 'gravel',
  Piste: 'piste',
  'E-Bike': 'ebike',
};

const FILTER_SECTIONS: FilterSection[] = [
  { type: 'toggle', title: PRATIQUE_SECTION_TITLE, options: ['VTT', 'Route', 'Gravel', 'Piste', 'E-Bike'] },
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
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());

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

  const handleToggleChange = (sectionTitle: string, option: string, checked: boolean) => {
    if (sectionTitle !== PRATIQUE_SECTION_TITLE) return;
    const category = PRATIQUE_TO_CATEGORY[option];
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (checked) next.add(category);
      else next.delete(category);
      return next;
    });
  };

  const visibleTyres = selectedCategories.size === 0
    ? tyres
    : tyres.filter((tyre) => selectedCategories.has(tyre.category));

  return (
    <div className={styles.layout}>
      <FilterSidebar
        title="FILTRES"
        sections={FILTER_SECTIONS}
        onToggleChange={handleToggleChange}
        onClear={() => setSelectedCategories(new Set())}
      />

      <main className={styles.main}>
        {loading && <p className={styles.state}>Chargement...</p>}
        {error && <p className={styles.error}>Erreur : {error}</p>}

        <div className={styles.grid}>
          {visibleTyres.map((tyre) => (
            <ProductCard key={tyre.id} tyre={tyre} />
          ))}
        </div>
      </main>
    </div>
  );
}
