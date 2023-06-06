import './globals.css'
import { Akshar } from '@next/font/google'

const akshar = Akshar({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const main = `${akshar.className} flex flex-col justify-around items-center min-w-full min-h-screen bg-amber-200 text-yellow-900 opacity-90`
const main_dark = `dark:bg-amber-900 dark:text-yellow-200`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <body className={akshar.className}>
          <div className={`${main} ${main_dark}`}>
            <div className="pt-20">{children}</div>
          </div>
        </body>
      </html>
    </>
  )
}
