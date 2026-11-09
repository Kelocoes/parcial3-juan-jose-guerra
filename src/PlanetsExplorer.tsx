'use client';

import { useEffect, useState } from 'react';

import PlanetCard from '@/planetscards';
import PlanetInfoPanel from '@/PlanetInfoPanel';
import PlanetScene from '@/planetscense';
import PlanetTypeFilter, { type PlanetFilter } from '@/PlanetTypeFilter';
import { planets } from '@/features/planets/data/planets';
import type { Planet } from '@/types/planet';

export default function PlanetExplorer() {
    const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);

    


   
    useEffect(() => {
        document.title = selectedPlanet ? `${selectedPlanet.name} | Solar Explorer` : 'Solar Explorer';

        return () => {
            document.title = 'Solar Explorer';
        };
    }, [selectedPlanet]);

    return (
        <div className="flex flex-col gap-6">
            <header>
                <h1 className="text-3xl font-bold">Explore the solar system</h1>
                <p className="opacity-70">Filter the planets and select one to learn more.</p>
            </header>
            <PlanetScene planets={planets} onSelectPlanet={setSelectedPlanet} />
            <PlanetInfoPanel planet={selectedPlanet} />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {planets.map((planet) => (
                    <PlanetCard
                        key={planet.id}
                        planet={planet}
                        isSelected={selectedPlanet?.id === planet.id}
                        onSelect={setSelectedPlanet}
                    />
                ))}
            </div>
        </div>
    );
}