'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';
import { Button } from '@/components/Button/Button';
import { BikeCard } from '@/components/Bike/BikeCard';

const CATEGORIES = ['COURSE', 'GRAVEL', 'VTT'];

export default function Home() {
  const router = useRouter();

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h2 className={styles.title}>
            Nous avons le pneu qui fera<br />
            la différence<br />
            <br />
            et nous vous aidons à le trouver !
          </h2>
          <div className={styles.actions}>
            <Button variant="yellow" onClick={() => router.push('/products')}>Je veux acheter mon pneu</Button>
            <Button variant="outline" onClick={() => router.push('/configurateur')}>Je veux de l&apos;aide pour choisir mon pneu</Button>
          </div>
        </div>
      </section>


      <section className={styles.whySection}>
        <h2 className={styles.whyTitle}>Pourquoi choisir Michelin ?</h2>
        <p className={styles.whyText}>
          Michelin propose une gamme complète de pneus, de chambres à air et d&apos;accessoires pour tous les types de vélos, vous
          permettant de repousser vos limites. Que vous fassiez de la course, que vous exploriez de nouveaux sentiers ou que vous
          vous déplaciez en ville, trouvez les pneus MICHELIN parfaits pour repousser vos limites et atteindre vos objectifs cyclistes.
          Découvrez les vôtres dès aujourd&apos;hui !
        </p>
        <div className={styles.whyActions}>
          <Button variant="yellow">Comparer les performances</Button>
        </div>
        <div className={styles.carousel}>
          {CATEGORIES.map((cat) => (
            <div key={cat} className={styles.carouselCard}>
              <Image
                src="/images/quality-card.png"
                alt={cat}
                fill
                className={styles.carouselImage}
              />
              <span className={styles.carouselLabel}>{cat}</span>
            </div>
          ))}
        </div>
      </section>


      <section className={styles.simulatorSection}>
        <h2 className={styles.simulatorTitle}>Quel pneu est fait pour vous ?</h2>
        <p className={styles.simulatorText}>
          Répondez à quelques questions et découvrez la recommandation Michelin adaptée à votre pratique.
        </p>
        <div className={styles.simulatorActions}>
          <Button variant="yellow" onClick={() => router.push('/configurateur')}>Lancer le simulateur</Button>
        </div>
        <BikeCard />
      </section>
    </>
  );
}