import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar bg-base-100 shadow">
            <Link href="/" className="btn btn-ghost text-xl">
                Solar Explorer
            </Link>
        </nav>
    );
}
