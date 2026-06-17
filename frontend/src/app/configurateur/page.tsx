'use client';

import { BikeCard } from '@/components/Bike/BikeCard';
import { TireCard } from '@/components/TireCard/TireCard';
import { RetailerList } from '@/components/RetailerList/RetailerList';
import Counter from '@/components/Counter/Counter';
import Toggle from '@/components/Toggle/Toggle';
import { Button } from '@/components/Button/Button';
import styles from './configurateur.module.css';

export default function ConfigurateurPage() {
  return (
    <div className={styles.layout}>

      {/* Colonne gauche */}
      <div className={styles.left}>
        <BikeCard />

        <section className={styles.tiresSection}>
          <h2>VOS PNEUS IDÉAUX</h2>
          <div className={styles.tiresGrid}>
            <TireCard
              name="PRO5 TLR"
              size="700 mm"
              matchScore={98}
              features={['Endurance', 'Compétition', 'Longues distances']}
              imageUrl="/images/products/pneu.png"
              selected
            />
            <TireCard
              name="PRO5 TLR"
              size="700 mm"
              matchScore={98}
              features={['Endurance', 'Compétition', 'Longues distances']}
              imageUrl="/images/products/pneu.png"
            />
          </div>
        </section>

        <RetailerList
          retailers={[
            { name: 'Alltricks', logoUrl: '/images/retailers/alltricks.png', inStock: true, price: 59.99, buyUrl: 'https://alltricks.fr' },
            { name: 'Decathlon', logoUrl: '/images/retailers/decathlon.png', inStock: true, price: 52.99, buyUrl: 'https://decathlon.fr' },
          ]}
        />
      </div>

      {/* Colonne droite — Profil Rider */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h3>PROFIL RIDER</h3>
          <Button variant="primary" size="sm">Effacer</Button>
        </div>

        <div className={styles.filterGroup}>
          <h4>POIDS</h4>
          <Counter initialValue={68} min={30} max={200} unit="KG" />
        </div>

        <div className={styles.filterGroup}>
          <h4>NIVEAU</h4>
          <Toggle label="Compétition" />
          <Toggle label="Entraînement" />
          <Toggle label="Loisir" />
          <Toggle label="Débutant" />
        </div>

        <div className={styles.filterGroup}>
          <h4>PRATIQUE</h4>
          <Toggle label="VTT" />
          <Toggle label="Gravel" />
          <Toggle label="Piste" />
          <Toggle label="E-Bike" />
        </div>

        <div className={styles.filterGroup}>
          <h4>TYPE DE VÉLO</h4>
          <Toggle label="Trail" />
          <Toggle label="Enduro" />
          <Toggle label="DH" />
          <Toggle label="Triathlon" />
          <Toggle label="Course sur route" />
        </div>
      </aside>

    </div>
  );
}