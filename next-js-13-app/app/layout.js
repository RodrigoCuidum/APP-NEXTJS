import '../styles/globals.css'
import { Navigation } from '../components/Navigation'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>💀 YURCHIK PAGE 💀</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
