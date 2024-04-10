import React from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vishwkant - Full Stack Developer',
  description: 'Personal Portfolio',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        {/* Add any other meta tags or link tags here */}
      </Head>
      <body className={inter.className}>
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
        <Navbar />
        {children}
        <Footer />
        {/* The script below is asynchronous and does not violate Next.js guidelines */}
      </body>
    </html>
  );
};

export default RootLayout;