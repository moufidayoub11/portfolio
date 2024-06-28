"use client"

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

function StairsTransition() {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
        <div key={pathname}>
            <div className="fixed h-screen w-screen top-0 right-0 left-0 pointer-events-none z-40 flex">
                <Stairs/>
            </div>
        </div>
    </AnimatePresence>
  )
}

export default StairsTransition