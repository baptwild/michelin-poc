'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import styles from './page.module.css'
import { Button } from '@/components/Button/Button'
import { BikeCard } from '@/components/Bike/BikeCard'

const CATEGORIES = ['COURSE', 'GRAVEL', 'VTT']

const TRUSTED_BY = ['IRONMAN', 'RACE ACCROSS SERIES']

const TRY_RIDES = [
  { title: 'COURSE', subtitle: 'SORTIE PERFORMANCE' },
  { title: 'GRAVEL', subtitle: 'SORTIE DÉCOUVERTE' },
  { title: 'VTT', subtitle: 'SORTIE TECHNIQUE' },
]

const RECOMMENDED_BY = [
  'MAGASINS PARTENAIRES',
  'MONTEURS & RÉPARATEURS',
  'CLUBS CYCLISTES',
]

export default function Home() {
  const router = useRouter()

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h2 className={styles.title}>
            Nous avons le pneu qui fera
            <br />
            la différence
            <br />
            <br />
            et nous vous aidons à le trouver !
          </h2>
          <div className={styles.actions}>
            <Button
              variant='yellow'
              onClick={() => router.push('/configurateur')}
            >
              Lancer le simulateur
            </Button>
            <Button variant='outline' onClick={() => router.push('/products')}>
              Explorer la gamme Michelin
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.whySection}>
        <h2 className={styles.whyTitle}>Pourquoi choisir Michelin ?</h2>
        <p className={styles.whyText}>
          Michelin propose une gamme complète de pneus, de chambres à air et
          d&apos;accessoires pour tous les types de vélos, vous permettant de
          repousser vos limites. Que vous fassiez de la course, que vous
          exploriez de nouveaux sentiers ou que vous vous déplaciez en ville,
          trouvez les pneus MICHELIN parfaits pour repousser vos limites et
          atteindre vos objectifs cyclistes. Découvrez les vôtres dès
          aujourd&apos;hui !
        </p>
        <div className={styles.whyActions}>
          <Button variant='yellow'>Comparer les performances</Button>
        </div>
        <div className={styles.carousel}>
          {CATEGORIES.map((cat) => (
            <div key={cat} className={styles.carouselCard}>
              <Image
                src='/images/quality-card.png'
                alt={cat}
                fill
                sizes='(max-width: 768px) 75vw, 33vw'
                className={styles.carouselImage}
              />
              <div className={styles.carouselScrim} />
              <span className={styles.carouselLabel}>{cat}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.simulatorSection}>
        <h2 className={styles.simulatorTitle}>
          Quel pneu est fait pour vous ?
        </h2>
        <p className={styles.simulatorText}>
          Répondez à quelques questions et découvrez la recommandation Michelin
          adaptée à votre pratique.
        </p>
        <div className={styles.simulatorActions}>
          <Button
            variant='yellow'
            onClick={() => router.push('/configurateur')}
          >
            Lancer le simulateur
          </Button>
        </div>
        <BikeCard />
      </section>

      <section className={`${styles.whySection} ${styles.trustedSection}`}>
        <h2 className={styles.whyTitle}>
          Validé par les cyclistes les plus exigeants
        </h2>
        <p className={styles.whyText}>
          Les athlètes les plus grands recherchent chaque avantage, et Michelin
          les accompagne dans leur quête de performance.
        </p>
        <div className={styles.carousel}>
          {TRUSTED_BY.map((label) => (
            <div
              key={label}
              className={`${styles.carouselCard} ${styles.carouselCardWide}`}
            >
              <Image
                src='/images/quality-card.png'
                alt={label}
                fill
                sizes='(max-width: 768px) 75vw, 33vw'
                className={styles.carouselImage}
              />
              <div className={styles.carouselScrim} />
              <span className={styles.carouselLabel}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.tryBeforeSection}>
        <h2 className={styles.whyTitle}>Essayez avant de choisir</h2>
        <p className={styles.whyText}>
          Vivez la différence Michelin sur le terrain grâce à nos événements
          communautaires, et testez nos produits directement lors des Michelin
          Ride Sessions.
        </p>
        <div className={styles.whyActions}>
          <Button variant='yellow'>Je m&apos;inscris</Button>
          <Button variant='yellow'>Je m&apos;inscris</Button>
        </div>
        <div className={styles.carousel}>
          {TRY_RIDES.map((ride) => (
            <div key={ride.title} className={styles.carouselCard}>
              <Image
                src='/images/quality-card.png'
                alt={ride.title}
                fill
                sizes='(max-width: 768px) 75vw, 33vw'
                className={styles.carouselImage}
              />
              <div className={styles.carouselScrim} />
              <span className={styles.carouselLabelGroup}>
                <span className={styles.carouselLabel}>{ride.title}</span>
                <span className={styles.carouselSubLabel}>{ride.subtitle}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.whySection}>
        <h2 className={styles.whyTitle}>Recommandé par les spécialistes</h2>
        <p className={styles.whyText}>
          Michelin s&apos;appuie sur un réseau d&apos;experts reconnus pour
          accompagner les cyclistes dans leurs choix.
        </p>
        <div className={styles.whyActions}>
          <Button variant='yellow'>
            Découvrir la liste des revendeurs Michelin
          </Button>
        </div>
        <div className={styles.carousel}>
          {RECOMMENDED_BY.map((label) => (
            <div key={label} className={styles.carouselCard}>
              <Image
                src='/images/quality-card.png'
                alt={label}
                fill
                sizes='(max-width: 768px) 75vw, 33vw'
                className={styles.carouselImage}
              />
              <div className={styles.carouselScrim} />
              <span className={styles.carouselLabel}>{label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
