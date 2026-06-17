'use client';

import { useState } from 'react';
import Toggle from '@/components/Toggle/Toggle';
import Counter from '@/components/Counter/Counter';
import styles from './FilterSidebar.module.css';

export type ToggleFilterSection = {
  type: 'toggle';
  title: string;
  options: string[];
};

export type CounterFilterSection = {
  type: 'counter';
  title: string;
  initialValue: number;
  min: number;
  max: number;
  unit: string;
};

export type ValueFilterSection = {
  type: 'value';
  title: string;
  value: string;
};

export type FilterSection =
  | ToggleFilterSection
  | CounterFilterSection
  | ValueFilterSection;

type FilterSidebarProps = {
  title: string;
  sections: FilterSection[];
  onClear?: () => void;
  hideClear?: boolean;
  style?: React.CSSProperties;
  onToggleChange?: (
    sectionTitle: string,
    option: string,
    checked: boolean,
  ) => void;
};

function ChevronIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`${styles.chevron} ${className}`}
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 7L6 2L11 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FilterSidebar({
  title,
  sections,
  onClear,
  hideClear = false,
  style,
  onToggleChange,
}: FilterSidebarProps) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [resetKey, setResetKey] = useState(0);

  const toggleSection = (sectionTitle: string) => {
    setCollapsed((prev) => ({ ...prev, [sectionTitle]: !prev[sectionTitle] }));
  };

  const handleClear = () => {
    setResetKey((k) => k + 1);
    onClear?.();
  };

  return (
    <aside className={styles.sidebar} style={style}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        {!hideClear && (
          <button className={styles.clearBtn} onClick={handleClear}>
            Effacer
          </button>
        )}
      </div>

      {sections.map((section) => {
        if (section.type === 'value') {
          return (
            <div key={section.title} className={styles.section}>
              <div className={styles.sectionTitle}>{section.title}</div>
              <div className={styles.value}>{section.value}</div>
            </div>
          );
        }

        const isOpen = !collapsed[section.title];
        return (
          <div key={section.title} className={styles.section}>
            <button
              type="button"
              className={styles.sectionTitle}
              onClick={() => toggleSection(section.title)}
              aria-expanded={isOpen}
            >
              {section.title}
              <ChevronIcon className={isOpen ? '' : styles.chevronClosed} />
            </button>
            {isOpen &&
              (section.type === 'counter' ? (
                <Counter
                  key={resetKey}
                  initialValue={section.initialValue}
                  min={section.min}
                  max={section.max}
                  unit={section.unit}
                />
              ) : (
                <div className={styles.options}>
                  {section.options.map((opt) => (
                    <Toggle
                      key={`${resetKey}-${opt}`}
                      label={opt}
                      onChange={(checked) => onToggleChange?.(section.title, opt, checked)}
                    />
                  ))}
                </div>
              ))}
          </div>
        );
      })}
    </aside>
  );
}
