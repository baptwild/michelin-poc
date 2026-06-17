import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import styles from './RetailerList.module.css';

interface Retailer {
  name: string;
  logoUrl: string;
  inStock: boolean;
  price: number;
  buyUrl: string;
}

interface RetailerListProps {
  retailers: Retailer[];
}

export const RetailerList = ({ retailers }: RetailerListProps) => {
  return (
    <div className={styles.container}>
      {retailers.map((retailer, index) => (
        <div key={retailer.name}>
          {index > 0 && <hr className={styles.divider} />}
          <div className={styles.row}>
            <Image
              src={retailer.logoUrl}
              alt={retailer.name}
              width={120}
              height={40}
              style={{ objectFit: 'contain' }}
            />
            <span className={styles.stock}>
              {retailer.inStock ? 'En stock' : 'Rupture de stock'}
            </span>
            <span className={styles.price}>{retailer.price.toFixed(2)} €</span>
            <Button variant="yellow" size="sm">
              Acheter
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};