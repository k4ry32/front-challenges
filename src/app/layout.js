import './globals.css'
import { Plus_Jakarta_Sans, Jura } from 'next/font/google'

//const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })
const jura = Jura({ subsets: ['latin'] })

export const metadata = {
  title: 'Frontend Challenges',
  description: 'Next.js + Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jura.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
