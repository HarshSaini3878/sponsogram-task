// app/layout.tsx
import { Providers } from './providers'
import { Montserrat, Kalam } from 'next/font/google';
import "./globals.css";
const montserrat = Montserrat({
  weight: ['400', '500', '600'], // Specify desired font weights
  subsets: ['latin'], // Specify desired subsets
});

const kalam = Kalam({
  weight: ['400'], // Specify desired font weights
  subsets: ['latin'], // Specify desired subsets
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body  className={montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}