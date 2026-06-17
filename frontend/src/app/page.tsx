'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { Button } from '@/components/Button/Button';

export default function Home() {
  const router = useRouter();

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
      <h2 className={styles.title}>
  Nous avons le pneu idéal<br />
  pour votre usage<br />
  et nous vous aidons à le<br />
  trouver !
</h2>
        <div className={styles.actions}>
          <Button variant="yellow" onClick={() => router.push('/products')}>Je veux acheter mon pneu</Button>
          <Button variant="outline">Je veux de l&apos;aide pour choisir mon pneu</Button>
        </div>
      </div>
    </section>
  );
}