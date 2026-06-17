'use client';

import { useEffect, useState } from 'react';
import { BikeCard } from '@/components/Bike/BikeCard';
import { TireCard } from '@/components/TireCard/TireCard';
import { RetailerList } from '@/components/RetailerList/RetailerList';
import FilterSidebar, { FilterSection } from '@/components/FilterSidebar/FilterSidebar';
import type { Tyre } from '@/types/tyre';
import styles from './configurateur.module.css';

const TIRE_CONFIG_SECTIONS: FilterSection[] = [
  { type: 'counter', title: 'TAILLE', initialValue: 700, min: 500, max: 1000, unit: 'mm' },
  { type: 'counter', title: 'DIAMÈTRE', initialValue: 21, min: 18, max: 60, unit: 'mm' },
];

const PRESSURE_SECTIONS: FilterSection[] = [
  { type: 'value', title: 'PNEU AVANT', value: '4.46 BAR' },
  { type: 'value', title: 'PNEU ARRIÈRE', value: '4.68 BAR' },
];

const PRATIQUE_SECTION_TITLE = 'PRATIQUE';

const PRATIQUE_TO_CATEGORY: Record<string, string> = {
  VTT: 'mtb',
  Gravel: 'gravel',
  Piste: 'piste',
  'E-Bike': 'ebike',
};

const RIDER_PROFILE_SECTIONS: FilterSection[] = [
  { type: 'counter', title: 'POIDS', initialValue: 68, min: 30, max: 200, unit: 'kg' },
  { type: 'toggle', title: 'NIVEAU', options: ['Compétition', 'Entraînement', 'Loisir', 'Débutant'] },
  { type: 'toggle', title: 'PRATIQUE', options: ['VTT', 'Gravel', 'Piste', 'E-Bike'] },
  {
    type: 'toggle',
    title: 'TYPE DE VÉLO',
    options: ['Trail', 'Enduro', 'DH', 'Triathlon', 'Course sur route', 'Endurance sur route', 'Course sur piste', 'Ville', 'Touring', 'Cargo', 'Bikepacking'],
  },
  { type: 'toggle', title: 'RESSENTI', options: ['Réactif', 'Équilibré', 'Souple'] },
  {
    type: 'toggle',
    title: 'SURFACE',
    options: ['Asphalte lisse', 'Asphalte rugueux', 'Gravel léger', 'Pavés', 'Compact', 'Fin et meuble', 'Mixte', 'Grossier et meuble', 'Boue'],
  },
  { type: 'toggle', title: 'CONDITIONS', options: ['Sec', 'Mixte', 'Humide'] },
];

export default function ConfigurateurPage() {
  const [tyres, setTyres] = useState<Tyre[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTyreId, setSelectedTyreId] = useState<number | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/tyres`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: Tyre[]) => {
        setTyres(data);
        setSelectedTyreId(data[0]?.id ?? null);
      })
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

      {/* Colonne gauche */}
      <div className={styles.left}>
        <BikeCard />

        <section className={styles.tiresSection}>
          <h2>VOS PNEUS IDÉAUX</h2>
          {loading && <p className={styles.state}>Chargement...</p>}
          {error && <p className={styles.error}>Erreur : {error}</p>}
          <div className={styles.tiresGrid}>
            {visibleTyres.map((tyre) => (
              <TireCard
                key={tyre.id}
                name={tyre.name}
                matchScore={tyre.grip}
                features={[tyre.category.toUpperCase(), `${tyre.speed} km/h`]}
                imageUrl={tyre.imageUrl || '/images/products/pneu.png'}
                selected={selectedTyreId === tyre.id}
                onClick={() => setSelectedTyreId(tyre.id)}
              />
            ))}
          </div>
        </section>

        <RetailerList
          retailers={[
            { name: 'Alltricks', logoUrl: '/images/retailers/alltricks.png', inStock: true, price: 59.99, buyUrl: 'https://alltricks.fr' },
            { name: 'Decathlon', logoUrl: '/images/retailers/decathlon.png', inStock: true, price: 52.99, buyUrl: 'https://decathlon.fr' },
          ]}
        />

        <div className={styles.configRow}>
          <FilterSidebar title="CONFIGURATION DU PNEU" sections={TIRE_CONFIG_SECTIONS} hideClear style={{ flex: 1, width: 'auto' }} />
          <FilterSidebar title="PRESSION CONSEILLÉE" sections={PRESSURE_SECTIONS} hideClear style={{ flex: 1, width: 'auto' }} />
        </div>
      </div>

      {/* Colonne droite — Profil Rider */}
      <div className={styles.sidebar}>
        <FilterSidebar title="PROFIL RIDER" sections={RIDER_PROFILE_SECTIONS} onToggleChange={handleToggleChange} />
      </div>

    </div>
  );
}
