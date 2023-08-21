import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Portfolio',
  description: 'Created By ISHU SINGH 😎',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <NavBar />
        {children}
        <GoToTop/>
        <Footer />
      </body>
    </html>
  );
}
