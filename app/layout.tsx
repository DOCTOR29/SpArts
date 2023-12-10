import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpArts App',
  description: 'Developed by Naveed Islam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
          <div className='flex flex-row'>
            
        <aside className="hidden xl:flex h-screen sticky top-0">
       
  
          <div className='w-[330px] '>
              <Sidebar />
              </div>
              </aside>
        
          <div className='w-full overflow-y-hidden'>
              {children}</div>
              
          </div>
          
        </ThemeProvider>
        
      </body>
    </html>
  )
}
