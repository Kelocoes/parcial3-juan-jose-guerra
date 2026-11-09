import { planetTypeLabels, type Planet } from '@/types/planet';

interface PlanetCardProps {
    planet: Planet;
    isSelected: boolean;
    onSelect: (planet: Planet) => void;
}


export default function PlanetCard({ planet, isSelected, onSelect }: PlanetCardProps) {
    return (
        <button
            type="button"
            aria-pressed={isSelected}
            onClick={() => onSelect(planet)}
            className={`card w-full cursor-pointer border-2 bg-base-100 text-left shadow ${isSelected ? 'border-primary' : 'border-transparent'}`}
        >
            <div className="card-body">
                <div className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full" style={{ backgroundColor: planet.color }} />
                    <h3 className="card-title">{planet.name}</h3>
                </div>
                <p>{planetTypeLabels[planet.type]}</p>
                <p>{planet.distanceFromSun} million km from the Sun</p>
            </div>
        </button>
    );
}