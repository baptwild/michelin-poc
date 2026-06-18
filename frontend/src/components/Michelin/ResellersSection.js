'use client'

export default function ResellersSection() {
  return (
    <div className="tire-card-section">
      <h5 className="tire-section-title">Où acheter</h5>
      <div className="tire-revendeur-list">
        <div className="tire-revendeur-row">
          <div className="tire-revendeur-info">
            <span className="tire-revendeur-name">Alltricks</span>
            <span className="tire-revendeur-stock">✓ Disponible</span>
          </div>
          <div className="tire-revendeur-actions">
            <span className="tire-revendeur-price">59,99 €</span>
            <button className="tire-btn-buy">Acheter</button>
          </div>
        </div>
        <div className="tire-revendeur-row">
          <div className="tire-revendeur-info">
            <span className="tire-revendeur-name">Probikeshop</span>
            <span className="tire-revendeur-stock">✓ Disponible</span>
          </div>
          <div className="tire-revendeur-actions">
            <span className="tire-revendeur-price">52,99 €</span>
            <button className="tire-btn-buy">Acheter</button>
          </div>
        </div>
      </div>
    </div>
  )
}
