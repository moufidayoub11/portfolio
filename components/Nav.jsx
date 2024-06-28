"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { path: '/', name: 'home' },
    { path: '/services', name: 'services' },
    { path: '/resume', name: 'resume' },
    { path: '/work', name: 'work' },
]

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {
                links.map((link, index) => (
                    <Link href={link.path} key={index} className={cn('capitalize font-medium hover:text-accent transition-all', link.path === pathname && "text-accent border-b-2 border-accent")}>
                        {link.name}
                    </Link>
                ))
            }
        </nav>
    );
};

export default Nav;