'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

export default function NavBar(
  {
    photography
  }
) {
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
      <div className={`w-full flex items-center border-[1px] rounded-[0.5rem] ${photography ? "border-[#BCBCBC]" : "border-bg3"} px-2 py-2`}>
        <div className="-border flex flex-none items-center">
          <Link
            href={'/'}
            className={`-border ${photography ? "border-[#999999]" : "border-bg4"} group ${photography ? "group-hover:border-[#666666]" : "group-hover:border-orange"} w-fit pl-2 flex items-center gap-4 h-7 sm:h-12`}
          >
            <img src='/logo.png' alt='logo' className='h-7 w-7 sm:w-12 sm:h-12 object-contain' />
            <p className={`-border hidden sm:inline ${photography ? "text-[#808080] group-hover:text-[#4D4D4D]" : "text-gray group-hover:text-green"} text-[22px] font-bold`}>
              zerogtiger
            </p>
          </Link>
          <div className={`h-6 sm:h-10 w-[2px] ${photography ? "bg-[#B3B3B3]" : "bg-orange"} mx-2 sm:mx-4`}>
          </div>
        </div>
        <div className={`${photography ? "border-[#999999]" : "border-bg4"}
          border border-1 sm:border-0 rounded-[0.5rem] grid grid-cols-4 grid-flow-row text-xs sm:text-[16px] w-full sm:w-3/4 h-8 sm:h-12 gap-2`}>
          <div className="group">
            <Link
              href={"/"}
              className={`${pathname === '/' ?
                `font-bold ${photography ? "border-[#4D4D4D] text-[#4D4D4D]" : "border-blue text-aqua"
                } sm:border-2`
                :
                `${photography ? "border-[#999999] text-[#666666]" : "border-bg4 text-blue"
                } sm:border-[1px]`
                } border-0 ${photography ? "group-hover:text-[#000000] group-hover:border-[#666666]" : "group-hover:text-yellow group-hover:border-orange"
                } h-full w-full flex items-center justify-center px-4 rounded-[0.5rem]`}
            >
              Home
            </Link>
          </div>
          <div className="group">
            <Link
              href={"/content"}
              className={`${pathname.substring(0, 8) === '/content' ?
                `font-bold ${photography ? "text-[#4D4D4D]" : "text-aqua"
                } ${photography ? "border-[#4D4D4D]" : "border-blue"
                } sm:border-2`
                :
                `text-${photography ? "[#666666]" : "blue"
                } ${photography ? "border-[#999999]" : "border-bg4"
                } sm:border-[1px]`
                } border-0 ${photography ? "group-hover:border-[#666666]" : "group-hover:border-orange"} ${photography ? "group-hover:text-[#000000]" : "group-hover:text-yellow"
                } h-full w-full flex items-center justify-center px-4 rounded-[0.5rem]`}
            >
              Content
            </Link>
          </div>
          <div className="group">
            <Link
              href={"/contact"}
              className={`${pathname.substring(0, 8) === '/contact' ?
                `font-bold ${photography ? "text-[#4D4D4D]" : "text-aqua"
                } ${photography ? "border-[#4D4D4D]" : "border-blue"
                } sm:border-2`
                :
                `text-${photography ? "[#666666]" : "blue"
                } ${photography ? "border-[#999999]" : "border-bg4"
                } sm:border-[1px]`
                } border-0 ${photography ? "group-hover:border-[#666666]" : "group-hover:border-orange"} ${photography ? "group-hover:text-[#000000]" : "group-hover:text-yellow"
                } h-full w-full flex items-center justify-center px-4 rounded-[0.5rem]`}
            >
              Contact
            </Link>
          </div>
          <div className="group">
            <Link
              href={"/about"}
              className={`${pathname.substring(0, 6) === '/about' ?
                `font-bold ${photography ? "text-[#4D4D4D]" : "text-aqua"
                } ${photography ? "border-[#4D4D4D]" : "border-blue"
                } sm:border-2`
                :
                `text-${photography ? "[#666666]" : "blue"
                } ${photography ? "border-[#999999]" : "border-bg4"
                } sm:border-[1px]`
                } border-0 ${photography ? "group-hover:border-[#666666]" : "group-hover:border-orange"} ${photography ? "group-hover:text-[#000000]" : "group-hover:text-yellow"
                } h-full w-full flex items-center justify-center px-4 rounded-[0.5rem]`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
      <img src='/theme_toggler.svg' alt='theme toggler'
        className={`border-[1px] rounded-[0.5rem] ${photography ? "border-[#999999]" : "border-bg4"
          } ${photography ? "hover:border-[#000000]" : "hover:border-orange"
          } p-2 w-10 h-10 object-contain cursor-pointer`} onClick={() => setTheme((theme + 1) % 2)} />
    </nav>
  )
}
