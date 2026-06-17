'use client';

import Toggle from '@/components/Toggle/Toggle';
import Counter from '@/components/Counter/Counter';
import styles from './FilterSidebar.module.css';

const FILTERS = [
  {
    title: 'TYPE DE PRATIQUE',
    options: ['VTT', 'Route', 'Gravel', 'Piste', 'E-Bike'],
  },
  {
    title: 'TYPE DE VÉLO',
    options: ['Trail', 'Enduro', 'DH', 'Triathlon', 'Course sur route', 'Endurance sur route', 'Course sur piste', 'Ville', 'Touring', 'Cargo', 'Bikepacking'],
  },
  {
    title: 'NIVEAU',
    options: ['Compétition', 'Entraînement', 'Loisir', 'Débutant'],
  },
  {
    title: 'RESSENTI',
    options: ['Réactif', 'Équilibré', 'Souple'],
  },
  {
    title: 'TYPE DE SURFACE',
    options: ['Asphalte lisse', 'Asphalte rugueux', 'Gravel léger', 'Pavés', 'Compact', 'Piste meuble', 'Mixte', 'Boue'],
  },
  {
    title: 'CONDITION DE SURFACE',
    options: ['Sec', 'Mixte', 'Humide'],
  },
];

export default function FilterSidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <span className={styles.title}>FILTRES</span>
        <button className={styles.clearBtn}>Effacer</button>
      </div>

      {FILTERS.map((section) => (
        <div key={section.title} className={styles.section}>
          <h4 className={styles.sectionTitle}>{section.title}</h4>
          <div className={styles.options}>
            {section.options.map((opt) => (
              <Toggle key={opt} label={opt} />
            ))}
          </div>
        </div>
      ))}

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>TAILLE DE PNEU</h4>
        <Counter initialValue={700} min={500} max={1000} unit="mm" />
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>DIAMÈTRE DE PNEU</h4>
        <Counter initialValue={21} min={18} max={60} unit="mm" />
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>POIDS DU CYCLISTE</h4>
        <Counter initialValue={68} min={30} max={150} unit="kg" />
      </div>
    </aside>
  );
}
