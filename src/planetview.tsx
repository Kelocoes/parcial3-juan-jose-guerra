interface PlanetViewerProps {
    color: string;
}

export default function PlanetViewer({ color }: PlanetViewerProps) {
    return (
        <div className="flex h-56 items-center justify-center rounded-lg bg-neutral">
            <div className="h-32 w-32 rounded-full" style={{ backgroundColor: color }} />
        </div>
    );
}
