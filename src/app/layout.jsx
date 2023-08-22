import NavBar from '@/components/NavBar'
import './globals.css'
// import { Inter } from 'next/font/google'
import FootNav from '@/components/FootNav'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'zerogtiger',
    description: 'Tiger Ding\'s website',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
        </head>
            <body className='bg-bg'>
                <NavBar />
                {children}
                <FootNav />
            </body>
        </html >
    )
}
