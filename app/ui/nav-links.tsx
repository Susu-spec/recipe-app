'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const links = [
    { name: 'Home', href: '/'},
    { name: 'About', href: ''},
    { name: 'Contact', href: ''}
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                return (
                    <Link 
            key={link.name}
            href={link.href}
            className={clsx("h-[48px]  flex flex-col items-center justify-center rounded-md p-3",
                {
                    'text-blue-600': pathname === link.href
                }
            )}
            >
            <h1 className="flex flex-col flex-wrap hidden md:block">Edmama's Recipes</h1>
            </Link>
                )
            })}
        </>
        
    );
}