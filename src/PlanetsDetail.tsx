import Link from 'next/link';

import PlanetViewer from '@/planetview';
import StatCard from '@/StarCard';
import { planets } from '@/features/planets/data/planets';
import { planetTypeLabels, type Planet } from '@/types/planet';

interface PlanetDetailProps {
    planet: Planet;
}

export default function PlanetDetail({ planet }: PlanetDetailProps) {

    return (
        <div className="flex flex-col gap-6">
            <Link href="/" className="btn btn-ghost self-start">
                ← Back to planets
            </Link>
            <PlanetViewer color={planet.color} />
            <header>
                <h1 className="text-3xl font-bold">{planet.name}</h1>
                <p className="opacity-70">{planetTypeLabels[planet.type]}</p>
            </header>
            <p>{planet.description}</p>
            <p>
                <strong>Fun fact:</strong> {planet.funFact}
            </p>
            <section className="flex flex-col gap-2">
                <h2 className="font-bold">Distance compared to the farthest planet: {}%</h2>
                <progress
                    className="progress progress-primary w-full"
                    aria-label="Relative distance from the Sun"
                    value={planet.distanceFromSun}
                />
            </section>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <StatCard label="Distance" value={`${planet.distanceFromSun} M km`} />
                <StatCard label="Moons" value={`${planet.moons}`} />
                <StatCard label="Day length" value={`${planet.dayLengthHours} h`} />
                <StatCard label="Temperature" value={`${planet.temperatureC} °C`} />
            </div>
        </div>
    );
}