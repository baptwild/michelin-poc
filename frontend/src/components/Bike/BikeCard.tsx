import Image from 'next/image';
import styles from './BikeCard.module.css';

export const BikeCard = () => {
  return (
    <div className={styles.card}>
      <Image
        src="/images/bike/bike.png"
        alt="Vélo"
        width={600}
        height={400}
        style={{ width: 'auto', height: '100%', maxWidth: '100%', objectFit: 'contain' }}
        priority
      />
    </div>
  );
};