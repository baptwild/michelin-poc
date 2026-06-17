'use client';

import { useState } from 'react';
import { BikeCard } from '@/components/Bike/BikeCard';
import { TireCard } from '@/components/TireCard/TireCard';
import { RetailerList } from '@/components/RetailerList/RetailerList';
import FilterSidebar, { FilterSection } from '@/components/FilterSidebar/FilterSidebar';
import styles from './configurateur.module.css';

const TIRES = [
  { id: 'pro5-tlr-1', name: 'PRO5 TLR', size: '700 mm', matchScore: 98, features: ['Endurance', 'Compétition', 'Longues distances'], imageUrl: '/images/products/pneu.png' },
  { id: 'pro5-tlr-2', name: 'PRO5 TLR', size: '700 mm', matchScore: 98, features: ['Endurance', 'Compétition', 'Longues distances'], imageUrl: '/images/products/pneu.png' },
];

const TIRE_CONFIG_SECTIONS: FilterSection[] = [
  { type: 'counter', title: 'TAILLE', initialValue: 700, min: 500, max: 1000, unit: 'mm' },
  { type: 'counter', title: 'DIAMÈTRE', initialValue: 21, min: 18, max: 60, unit: 'mm' },
];

const PRESSURE_SECTIONS: FilterSection[] = [
  { type: 'value', title: 'PNEU AVANT', value: '4.46 BAR' },
  { type: 'value', title: 'PNEU ARRIÈRE', value: '4.68 BAR' },
];

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
  const [selectedTireId, setSelectedTireId] = useState(TIRES[0].id);

  return (
    <div className={styles.layout}>

      {/* Colonne gauche */}
      <div className={styles.left}>
        <BikeCard />

        <section className={styles.tiresSection}>
          <h2>VOS PNEUS IDÉAUX</h2>
          <div className={styles.tiresGrid}>
            {TIRES.map((tire) => (
              <TireCard
                key={tire.id}
                name={tire.name}
                size={tire.size}
                matchScore={tire.matchScore}
                features={tire.features}
                imageUrl={tire.imageUrl}
                selected={selectedTireId === tire.id}
                onClick={() => setSelectedTireId(tire.id)}
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
        <FilterSidebar title="PROFIL RIDER" sections={RIDER_PROFILE_SECTIONS} />
      </div>

    </div>
  );
}
