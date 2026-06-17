'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Image
        src={scrolled ? '/images/header/michelin-logo.png' : '/images/header/logo-transparent.png'}
        alt="Michelin"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: 'auto', height: '40px' }}
        priority
      />
      <button className={`${styles.accountBtn} ${scrolled ? styles.accountBtnScrolled : ''} cta`}>
        Mon compte
      </button>
    </header>
  );
}
