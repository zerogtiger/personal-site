import { preview as homePreview } from "@/app/(main_content)/page";
import { preview as contentPreview } from "@/app/(main_content)/content/page";
import { preview as contactPreview } from "@/app/(main_content)/contact/page";
import { preview as aboutPreview } from "@/app/(main_content)/about/page";
import Link from "next/link";

export default function FootNav(
  {
    photography
  }) {
  return (
    <footer className="-border mx-auto px-2 max-w-[53rem] mt-40 mb-10 z-20">
      <div
        className={`flex border-[1px] 
          ${photography ? "border-[#BCBCBC]" : "border-bg2"} rounded-[0.5rem] justify-center px-4 py-4`}>
        <div className="-border flex flex-none">
          <Link
            href={'/'}
            className='group w-fit gap-2 space-y-4 '
          >
            <img src={photography? '/logo_dark.png' : '/logo.png'} alt='logo' className='w-[5rem] h-[5rem] sm:w-[10rem] sm:h-[10rem]' />
            <p className={`text-[12px] sm:text-[22px] 
              ${photography ? "text-[#808080] group-hover:text-[#4D4D4D]" : "text-gray group-hover:text-green"}  font-bold`}>
              zerogtiger
            </p>
          </Link>
          <div className={`h-20 w-[2px] ${photography ? "bg-[#B3B3B3]" : "bg-orange"} mx-4`}>
          </div>
        </div>
        <div className='-border w-full sm:w-3/4 h-fit grid grid-cols-2 grid-flow-row gap-4'>
          <Link href={"/"}>
            <div
              className={`text-center sm:text-left group border-[1px] h-full 
    ${photography? "border-[#999999] text-[#666666] hover:border-[#666666]" : "border-bg4 text-blue hover:border-orange"} rounded-[0.5rem] px-4 py-4 space-y-2`}>
              <p className={`font-bold 
                ${photography? "text-[#666666] group-hover:text-[#4D4D4D]" : "text-blue group-hover:text-yellow"} text-xs sm:text-[16px]`}>Home</p>
              <p className={`hidden sm:inline-block 
                ${photography? "text-[#666666] group-hover:text-black" : "text-bg4 group-hover:text-fg"}`}>{homePreview}</p>
            </div>
          </Link>
          <Link href={"/content"}>
            <div
              className={`text-center sm:text-left group border-[1px] h-full 
    ${photography? "border-[#999999] text-[#666666] hover:border-[#666666]" : "border-bg4 text-blue hover:border-orange"} rounded-[0.5rem] px-4 py-4 space-y-2`}>
              <p className={`font-bold 
                ${photography? "text-[#666666] group-hover:text-[#4D4D4D]" : "text-blue group-hover:text-yellow"} text-xs sm:text-[16px]`}>Content</p>
              <p className={`hidden sm:inline-block 
                ${photography? "text-[#666666] group-hover:text-black" : "text-bg4 group-hover:text-fg"}`}>{contentPreview}</p>
            </div>
          </Link>
          <Link href={"/contact"}>
            <div
              className={`text-center sm:text-left group border-[1px] h-full 
    ${photography? "border-[#999999] text-[#666666] hover:border-[#666666]" : "border-bg4 text-blue hover:border-orange"} rounded-[0.5rem] px-4 py-4 space-y-2`}>
              <p className={`font-bold 
                ${photography? "text-[#666666] group-hover:text-[#4D4D4D]" : "text-blue group-hover:text-yellow"} text-xs sm:text-[16px]`}>Contact</p>
              <p className={`hidden sm:inline-block 
                ${photography? "text-[#666666] group-hover:text-black" : "text-bg4 group-hover:text-fg"}`}>{aboutPreview}</p>
            </div>
          </Link>
          <Link href={"/about"}>
            <div
              className={`text-center sm:text-left group border-[1px] h-full 
    ${photography? "border-[#999999] text-[#666666] hover:border-[#666666]" : "border-bg4 text-blue hover:border-orange"} rounded-[0.5rem] px-4 py-4 space-y-2`}>
              <p className={`font-bold 
                ${photography? "text-[#666666] group-hover:text-[#4D4D4D]" : "text-blue group-hover:text-yellow"} text-xs sm:text-[16px]`}>About</p>
              <p className={`hidden sm:inline-block 
                ${photography? "text-[#666666] group-hover:text-black" : "text-bg4 group-hover:text-fg"}`}>{contactPreview}</p>
            </div>
          </Link>
        </div >
      </div>
      <div className="mt-4 text-right text-bg2 px-2 text-[6px] sm:text-xs">
        &copy; 2025 Tiger Ding. Some rights reserved.
      </div >
    </footer >
  )
}
