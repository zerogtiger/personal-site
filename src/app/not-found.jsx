'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export const metadata = {
    title: '404: Page not found'
}

export default function PageNotFound404() {
    return (
        <main>
            <div className='-border sm:flex mx-auto px-4 sm:mt-24 max-w-[52rem] gap-2'>
                <div className='w-fit font-iosevka space-y-0'>
                    <h1 className='-border text-gray text-8xl font-iosevka'>404</h1>
                    <h1 className='-border text-gray font-normal'> Page not found </h1>
                </div>
                <div>
                    <h1>This page is not available, but I am.</h1>
                    <p>It seems like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
                    <p> To prevent recurrences, please <Link href={'/contact'}>notify me</Link> with a screenshot of this page if you believe this page is intended to exist. </p>
                </div>
            </div>
            <div className='-border mx-auto px-4 max-w-[52rem]'>
                <p className='break-words -border font-iosevka'>{`~${usePathname()}`}</p>
            </div>
            <div className='-border mx-auto px-4 text-right sm:mb-24 max-w-[52rem]'>
                <Link href={'/'} className='mt-0'>&#8598; Back to Home</Link>
            </div>
        </main >
    )
}
