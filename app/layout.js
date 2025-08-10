import { Nunito } from 'next/font/google';
import '/public/css/animate.min.css';
import '/public/css/animation.css';
import '/public/css/bootstrap-select.min.css';
import '/public/css/bootstrap.css';
import '/public/css/swiper-bundle.min.css';
import '/public/css/style.css';
import '/public/font/fonts.css';
import '/public/icon/style.css';

import { AuthProvider } from '../context/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';

const nunito = Nunito({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--nunito-font-family',
  display: 'swap',
});

export const metadata = {
  title: 'SupaPharm Admin Site',
  description: 'Owned by SupaPHarm',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#00a859' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} body`}>
        <AuthProvider>
          <ProtectedRoute>
            {children}
          </ProtectedRoute>
        </AuthProvider>
      </body>
    </html>
  );
}
