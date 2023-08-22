'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

export default function NavBar() {
    const pathname = usePathname();
    const [theme, setTheme] = useState(0); // 0: light; 1: dark

    useEffect(() => {
        setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 1 : 0);
    }, []);

    useEffect(() => {
        if (theme === 0) {
            localStorage.theme = 'light';
        } else {
            localStorage.theme = 'dark';
        }
        if (localStorage.theme === 'dark') {
            document.documentElement.lastElementChild.classList.add('dark');
        } else {
            document.documentElement.lastElementChild.classList.remove('dark');
        }
    }, [theme])

    return (
        <nav className="-border flex mx-auto mt-10 justify-center items-center px-2 max-w-[53rem] gap-2 z-20 ">
            <div className="w-full flex items-center border-2 rounded-[0.5rem] border-bg3 px-2 py-2">
                <div className="-border flex flex-none items-center">
                    <Link
                        href={'/'}
                        className='-border border-bg4 group group-hover:border-orange group-hover:text-green w-fit pl-2 flex items-center gap-4 h-7 sm:h-12'
                    >
                        <img src='/logo.png' alt='logo' className='w-12 h-12 object-contain' />
                        <p className='-border hidden sm:inline text-gray group-hover:text-green text-[22px] font-bold'>
                            zerogtiger
                        </p>
                    </Link>
                    <div className="h-6 sm:h-10 w-[2px] bg-orange mx-2 sm:mx-4">
                    </div>
                </div>
                <div className='grid grid-cols-4 grid-flow-row text-xs sm:text-[16px] w-full sm:w-3/4 h-7 sm:h-12 gap-2'>
                    <div className="group">
                        <Link
                            href={"/"}
                            className={`${pathname === '/' ? "font-bold text-aqua border-blue" : "text-blue border-bg4"} group-hover:border-orange group-hover:text-yellow border-2 h-full w-full flex items-center justify-center px-4 rounded-[0.5rem] `}
                        >
                            Home
                        </Link>
                    </div>
                    <div className="group">
                        <Link
                            href={"/content"}
                            className={`${pathname.substring(0, 8) === '/content' ? "font-bold text-aqua border-blue" : "text-blue border-bg4"} group-hover:border-orange group-hover:text-yellow border-2 h-full w-full flex items-center justify-center px-4 rounded-[0.5rem] `}
                        >
                            Content
                        </Link>
                    </div>
                    <div className="group">
                        <Link
                            href={"/contact"}
                            className={`${pathname.substring(0, 8) === '/contact' ? "font-bold text-aqua border-blue" : "text-blue border-bg4"} group-hover:border-orange group-hover:text-yellow border-2 h-full w-full flex items-center justify-center px-4 rounded-[0.5rem] `}
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="group">
                        <Link
                            href={"/about"}
                            className={`${pathname.substring(0, 6) === '/about' ? "font-bold text-aqua border-blue" : "text-blue border-bg4"} group-hover:border-orange group-hover:text-yellow border-2 h-full w-full flex items-center justify-center px-4 rounded-[0.5rem] `}
                        >
                            About
                        </Link>
                    </div>
                </div>
            </div>
            <img src='/theme_toggler.svg' alt='theme toggler' className='border-2 rounded-[0.5rem] border-bg4 hover:border-orange p-2 w-10 h-10 object-contain cursor-pointer' onClick={() => setTheme((theme + 1) % 2)} />
        </nav>
    )
}
