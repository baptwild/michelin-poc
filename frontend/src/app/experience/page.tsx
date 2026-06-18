'use client'

import { useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store/useStore'
import { Button } from '@/components/Button/Button'
import ConfiguratorPanel from '@/components/Michelin/ConfiguratorPanel'

const ThreeCanvas = dynamic(() => import('@/components/Michelin/ThreeCanvas'), {
  ssr: false,
})

const TIRE_BENEFITS = [
  'Rendement optimal sur bitume',
  'Adhérence renforcée sur chemins',
  'Endurance sur la durée',
  'Conseil personnalisé par quiz',
]

export default function ExperiencePage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const pageWrapperRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const togglePanel = useStore((s) => s.togglePanel)
  const openPanel = useStore((s) => s.openPanel)
  const openPanelWithQuiz = useStore((s) => s.openPanelWithQuiz)
  const setPatterns = useStore((s) => s.setPatterns)
  const setColors = useStore((s) => s.setColors)

  useEffect(() => {
   import('@/experience/World/TireCatalog.js').then((mod) => {
     setPatterns(mod.TIRE_PATTERNS)
     setColors(mod.TIRE_COLORS)
   })
    const preloader = document.querySelector('.preloader')
    const preloaderTimeout = preloader ? setTimeout(() => {
      preloader.classList.add('hidden')
    }, 5000) : null
    pageRef.current?.setAttribute('asscroll-container', '')
    pageWrapperRef.current?.setAttribute('asscroll', '')
    return () => {
      if (preloaderTimeout) clearTimeout(preloaderTimeout)
    }
  }, [setColors, setPatterns])

  return (
    <>
      <div className="preloader">
        <div className="preloader-wrapper">
          <div className="loading">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>

      <div className="page" ref={pageRef}>
        <div className="page-wrapper experience-shell" ref={pageWrapperRef}>
          <section className="experience-hero">
            <div className="experience-eyebrow">MICHELIN VÉLO / PNEUS ROUTE &amp; GRAVEL</div>
            <div className="experience-hero-grid">
              <div className="experience-hero-copy">
                <h1 className="experience-title">
                  Le bon pneu pour chaque sortie.
                </h1>
                <p className="experience-lead">
                  Découvrez les trois familles de pneus Michelin Vélo : rendement sur route,
                  accroche en gravel, endurance sur la durée. Trouvez le pneu idéal selon votre pratique.
                </p>

                <div className="experience-actions">
                  <Button variant="yellow" onClick={openPanel}>
                    Configurer mes pneus
                  </Button>
                  <Button variant="outline" onClick={() => router.push('/products')}>
                    Voir les produits
                  </Button>
                </div>

                <div className="experience-tags">
                  <span>Rendement</span>
                  <span>Adhérence</span>
                  <span>Endurance</span>
                  <span>Conseil personnalisé</span>
                </div>
              </div>

              <aside className="experience-hero-panel">
                <div className="experience-panel-card">
                  <p className="experience-panel-kicker">Pourquoi Michelin Vélo</p>
                  <ul className="experience-steps">
                    {TIRE_BENEFITS.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-panel-card experience-panel-cta">
                  <p className="experience-panel-kicker">Configurateur</p>
                  <p>
                    Répondez au quiz et obtenez une recommandation personnalisée parmi notre gamme
                    de pneus route, gravel et endurance.
                  </p>
                  <Button variant="yellow" size="sm" onClick={openPanelWithQuiz}>
                    Aidez moi à choisir mon pneu
                  </Button>
                </div>
              </aside>
            </div>
          </section>

          <section className="experience-scene-card">
            <div className="experience">
              <ThreeCanvas />
            </div>
          </section>

        </div>
      </div>

      <button className="tire-toggle" onClick={togglePanel} aria-label="Catalogue pneus MICHELIN">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22q-.8 0-1.35-.55t-.55-1.35v-6.3q0-.35.1-.625.1-.275.3-.475L7.35 9.4q-.25-.25-.3-.575Q7 8.5 7.15 8.2l2.6-4.5q.15-.3.425-.5Q10.45 3 10.8 3h2.4q.35 0 .625.2.275.2.425.5l2.6 4.5q.15.3.1.625-.05.325-.3.575l-3.15 3.15q.2.2.3.475.1.275.1.625v6.45q0 .8-.55 1.35T12 22Z" />
        </svg>
      </button>

      <ConfiguratorPanel />
    </>
  )
}
