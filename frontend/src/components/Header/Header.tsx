'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/Button/Button.tsx'
import styles from './Header.module.css'

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!isHome) return
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  const isSolid = !isHome || scrolled

  return (
    <header className={`${styles.header} ${isSolid ? styles.scrolled : ''}`}>
      <Link href='/'>
        <Image
          src={
            isSolid
              ? '/images/header/michelin-logo.png'
              : '/images/header/logo-transparent.png'
          }
          alt='Michelin'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: 'auto', height: '40px' }}
          priority
        />
      </Link>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <a
          href='/community-ride/index.html'
          target='_blank'
          rel='noopener noreferrer'
          style={{ textDecoration: 'none' }}
        >
          <Button
            variant='yellow'
            size='sm'
            className={isSolid ? '' : styles.btnTransparent}
          >
            Michelin Community Ride
          </Button>
        </a>
        <Button
          variant='outline'
          size='sm'
          className={isSolid ? '' : styles.btnTransparent}
        >
          Mon compte
        </Button>
      </div>
    </header>
  )
}
