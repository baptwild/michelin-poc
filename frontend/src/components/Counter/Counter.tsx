'use client';

import { useState } from 'react';
import styles from './Counter.module.css';

interface CounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  unit?: string;
  onChange?: (value: number) => void;
}

export default function Counter({ initialValue = 0, min = 0, max = 999, unit, onChange }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const update = (next: number) => {
    if (next < min || next > max) return;
    setCount(next);
    onChange?.(next);
  };

  return (
    <div className={styles.counter}>
      <button className={styles.btn} onClick={() => update(count - 1)} disabled={count <= min}>
        −
      </button>
      <span className={styles.value}>
        {count}{unit ? ` ${unit}` : ''}
      </span>
      <button className={styles.btn} onClick={() => update(count + 1)} disabled={count >= max}>
        +
      </button>
    </div>
  );
}
