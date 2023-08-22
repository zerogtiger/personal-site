import NavBar from '@/components/NavBar'
import './globals.css'
// import { Inter } from 'next/font/google'
import FootNav from '@/components/FootNav'
import { Analytics } from '@vercel/analytics/react'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'zerogtiger',
    description: 'Tiger Ding\'s website',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='bg-bg'>
                <NavBar />
                {children}
                <Analytics />
                <FootNav />
            </body>
        </html >
    )
}
