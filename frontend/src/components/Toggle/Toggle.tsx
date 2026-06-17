'use client';

import { useState } from 'react';
import styles from './Toggle.module.css';

interface ToggleProps {
  label: string;
  onChange?: (checked: boolean) => void;
}

export default function Toggle({ label, onChange }: ToggleProps) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };

  return (
    <label className={styles.wrapper}>
      <span className={`${styles.track} ${checked ? styles.active : ''}`}>
        <span className={styles.thumb} />
        <input type="checkbox" checked={checked} onChange={handleChange} className={styles.input} />
      </span>
      <span className={styles.label}>{label}</span>
    </label>
  );
}
