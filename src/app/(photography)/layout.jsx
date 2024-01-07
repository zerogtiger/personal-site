import NavBar from '@/components/NavBar'
import '@/app/globals.css'
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
      <body className='bg-white'>
        <NavBar photography={true}/>
        {children}
        <Analytics />
        <FootNav photography={true}/>
      </body>
    </html >
  )
}
