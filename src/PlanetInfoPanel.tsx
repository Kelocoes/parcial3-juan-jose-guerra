import Link from 'next/link';

import { planetTypeLabels, type Planet } from '@/types/planet';

interface PlanetInfoPanelProps {
    planet: Planet | null;
}

export default function PlanetInfoPanel({ planet }: PlanetInfoPanelProps) {
    if (!planet) {
        return (
            <p className="rounded-lg bg-base-100 p-4 shadow">No planet selected. Choose one to see its information.</p>
        );
    }

    return (
        <section className="flex flex-col gap-2 rounded-lg bg-base-100 p-4 shadow">
            <h2 className="text-xl font-bold">{planet.name}</h2>
            <p>{planetTypeLabels[planet.type]}</p>
            <p>{planet.description}</p>
            <Link href={`/planets/${planet.id}`} className="btn btn-primary self-start">
                View details
            </Link>
        </section>
    );
}
