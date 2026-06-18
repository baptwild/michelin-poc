'use client'

export default function PressureSection() {
  return (
    <div className="tire-card-section">
      <h5 className="tire-section-title">Pression recommandée</h5>
      <div className="tire-property-card">
        <div className="tire-pressure-row">
          <span className="tire-pressure-label">Avant</span>
          <span className="tire-pressure-value">4.46 bar</span>
        </div>
        <div className="tire-pressure-divider" />
        <div className="tire-pressure-row">
          <span className="tire-pressure-label">Arrière</span>
          <span className="tire-pressure-value">4.68 bar</span>
        </div>
      </div>
    </div>
  )
}
