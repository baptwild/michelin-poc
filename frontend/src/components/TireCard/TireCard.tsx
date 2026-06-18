// TireCard.tsx
import styles from './TireCard.module.css';

interface TireCardProps {
  name: string;
  size?: string;
  matchScore?: number;
  features?: string[];
  imageUrl: string;
  selected?: boolean;
  onClick?: () => void;
}

export const TireCard = ({
  name,
  size,
  matchScore,
  features = [],
  imageUrl,
  selected = false,
  onClick,
}: TireCardProps) => {
  return (
    <div
      className={`${styles.card} ${selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      <img src={imageUrl} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h4 className={styles.name}>{name}</h4>
        {size && <p className={styles.size}>{size}</p>}
        {matchScore !== undefined && (
          <p className={styles.match}>Michelin Match : {matchScore}%</p>
        )}
        {features.length > 0 && (
          <ul className={styles.features}>
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};