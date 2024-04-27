'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const link = { name: 'Home', href: '/'}

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <Link 
        key={link.name}
        href={link.href}
        className={clsx("h-[48px] items-center justify-center rounded-md p-3",
            {
                'text-blue-600': pathname === link.href
            }
        )}
        >
            <h1 className="flex flex-col">Edmama's Recipes</h1>
        </Link>
    );
}