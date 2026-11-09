interface StatCardProps {
    label: string;
    value: string;
}

export default function StatCard({ label, value }: StatCardProps) {
    return (
        <div className="rounded-lg bg-base-100 p-4 shadow">
            <p className="text-sm opacity-70">{label}</p>
            <p className="text-xl font-bold">{value}</p>
        </div>
    );
}