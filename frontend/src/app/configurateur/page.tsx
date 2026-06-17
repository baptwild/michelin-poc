import { TireCard } from '@/components/TireCard/TireCard';
import { RetailerList } from '@/components/RetailerList/RetailerList';
import { BikeCard } from '@/components/Bike/BikeCard';

export default function ConfigurateurPage() {
  return (
    <main>
      <h1>Configurateur</h1>
      <TireCard
        name="PRO5 TLR"
        size="225/45 R17 94Y"
        matchScore={92}
        features={['Freinage sur sol sec', 'Freinage sur sol mouillé', 'Longévité']}
        imageUrl="/images/products/pneu.png"
      />
      <RetailerList
        retailers={[
          { name: 'Pneus.com', logoUrl: '/images/retailers/decathlon.png', inStock: true, price: 100, buyUrl: 'https://www.pneus.com' },
          { name: 'Pneus.fr', logoUrl: '/images/retailers/alltricks.png', inStock: false, price: 120, buyUrl: 'https://www.pneus.fr' },
        ]}
      />
      <BikeCard />
    </main>
  );
}