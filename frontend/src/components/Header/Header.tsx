import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/michelin-logo.png"
        alt="Michelin"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: 'auto', height: 'auto' }}
        priority
      />
      <button className={`${styles.accountBtn} cta`}>Mon compte</button>
    </header>
  );
}
