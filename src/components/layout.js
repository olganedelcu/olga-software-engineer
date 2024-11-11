import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Header from './header';
import Footer from './footer';
import ThemeToggle from './themeToggle';

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div style={{ 
        backgroundColor: 'var(--background)',
        color: 'var(--text-primary)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Header />
        <ThemeToggle />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;