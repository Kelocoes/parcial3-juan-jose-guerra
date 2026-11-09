import { notFound } from 'next/navigation';

import PlanetDetail from '@/PlanetsDetail';
import { planets } from '@/features/planets/data/planets';

interface PlanetPageProps {
    params: Promise<{ id: string }>;
}


export default async function PlanetPage({ params }: PlanetPageProps) {
    const { id } = await params;
    const planet = planets.find((item) => item.id === id);

    if (!planet) {
        notFound();
    }

    return <PlanetDetail planet={planet} />;
}