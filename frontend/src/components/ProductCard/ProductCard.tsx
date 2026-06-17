import Image from 'next/image';
import Badge from '@/components/Badge/Badge';
import styles from './ProductCard.module.css';

interface Retailer {
  name: string;
  logo: string;
  available: boolean;
}

interface Tyre {
  id: number;
  name: string;
  category: string;
  speed: number;
  grip: number;
  imageUrl?: string;
}

const RETAILERS: Retailer[] = [
  { name: 'Alltricks', logo: '/images/retailers/alltricks.png', available: true },
  { name: 'Decathlon', logo: '/images/retailers/decathlon.png', available: true },
];

interface ProductCardProps {
  tyre: Tyre;
}

export default function ProductCard({ tyre }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={tyre.imageUrl || '/images/products/pneu.png'}
          alt={tyre.name}
          width={200}
          height={200}
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      </div>

      <div className={styles.body}>
        <div className={styles.badges}>
          <Badge label={tyre.category} />
          <Badge label={`Grip ${tyre.grip}`} />
        </div>

        <h3 className={styles.name}>{tyre.name}</h3>
        <p className={styles.description}>
          Prêt à aller plus loin en répondant à tous vos besoins.
        </p>

        <div className={styles.retailers}>
          {RETAILERS.map((r) => (
            <div key={r.name} className={styles.retailerRow}>
              <div className={styles.retailerLogo}>
                <Image
                  src={r.logo}
                  alt={r.name}
                  width={80}
                  height={24}
                  style={{ objectFit: 'contain', objectPosition: 'left center', width: '100%', height: '24px' }}
                />
              </div>
              <div className={styles.retailerAvailability}>
                <Badge label="Disponible" variant="success" />
              </div>
              <button className={styles.buyBtn}>Acheter</button>
            </div>
          ))}
        </div>

        <button className={styles.techBtn}>
          Caractéristiques techniques
        </button>
      </div>
    </article>
  );
}
