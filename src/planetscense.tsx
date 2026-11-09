import type { Planet } from '@/types/planet';

interface PlanetSceneProps {
    planets: Planet[];
    onSelectPlanet: (planet: Planet) => void;
}

export default function PlanetScene({ planets, onSelectPlanet }: PlanetSceneProps) {
    return (
        <div className="flex min-h-40 flex-wrap items-center justify-center gap-4 rounded-lg bg-neutral p-6">
            {planets.map((planet) => (
                <button
                    key={planet.id}
                    type="button"
                    aria-label={`Select ${planet.name} in scene`}
                    className="h-12 w-12 cursor-pointer rounded-full"
                    style={{ backgroundColor: planet.color }}
                    onClick={() => onSelectPlanet(planet)}
                />
            ))}
        </div>
    );
}
