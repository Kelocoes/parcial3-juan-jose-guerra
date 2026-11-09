import { planetTypeLabels, type PlanetType } from '@/types/planet';

export type PlanetFilter = PlanetType | 'all';

interface PlanetTypeFilterProps {
    value: PlanetFilter;
    onChange: (value: PlanetFilter) => void;
}

const options: { value: PlanetFilter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'rocky', label: planetTypeLabels.rocky },
    { value: 'gas', label: planetTypeLabels.gas },
    { value: 'ice', label: planetTypeLabels.ice },
];

export default function PlanetTypeFilter({}: PlanetTypeFilterProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {options.map((option) => (
                <button
                    key={option.value}
                    type="button"
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}
