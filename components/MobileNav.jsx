"use client"

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

const links = [
    { path: '/', name: 'home' },
    { path: '/services', name: 'services' },
    { path: '/resume', name: 'resume' },
    { path: '/work', name: 'work' },
    { path: '/contact', name: 'Hire Me' },
]


function MobileNav() {
    const [sheetOpen, setSheetOpen] = useState(false)
    const pathname = usePathname();
    return (
        <Sheet open={sheetOpen}>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" onClick={() => setSheetOpen(true)} />
            </SheetTrigger>
            <SheetContent setSheetOpen={setSheetOpen} className="flex flex-col">
                <div className="mt-12 mb-16 text-center text-2xl">
                    <Link href="/" onClick={() => setSheetOpen(false)}>
                        <h1 className="text-4xl font-semibold">
                            Moufid<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>

                <nav className="flex flex-col justify-center items-center gap-8">
                    {
                        links.map((link, index) => (
                            <Link href={link.path} onClick={() => setSheetOpen(false)} key={index} className={cn('capitalize font-medium hover:text-accent transition-all', link.path === pathname && "text-accent border-b-2 border-accent")}>
                                {link.name}
                            </Link>
                        ))
                    }
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav