import { IBM_Plex_Sans } from 'next/font/google'

export const ibm_plex_sans = IBM_Plex_Sans({ 
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
  // fallback: ['system-ui', 'arial']
})