import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const NavItem = ({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-200
      ${isActive
        ? 'text-accent'
        : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'}`
    }
  >
    {label}
  </NavLink>
);

const NAV = [
  { to: '/charter', label: 'Charter' },
  { to: '/writing', label: 'Writing' },
  { to: '/work', label: 'Work' },
  { to: '/pracha', label: 'Pracha' },
];

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    document.documentElement.classList.contains('light') ? 'light' : 'dark'
  );

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('light', next === 'light');
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* private mode */
    }
    setTheme(next);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      {/* Brand ribbon */}
      <div className="h-[2px] bg-accent" aria-hidden="true" />
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[var(--bg-main)] transition-colors duration-300">
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <NavLink to="/" className="font-mono text-sm tracking-[0.1em] text-[var(--text-main)] hover:text-accent transition-colors">
              PrachaLabs
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV.map((item) => (
                <NavItem key={item.to} to={item.to} label={item.label} />
              ))}
              <button
                onClick={toggleTheme}
                className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
              </button>
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleTheme}
                className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[var(--text-muted)]"
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-[var(--border-main)]">
            <div className="max-w-2xl mx-auto px-6 py-4 flex flex-col gap-4">
              {NAV.map((item) => (
                <NavItem key={item.to} to={item.to} label={item.label} onClick={() => setIsMenuOpen(false)} />
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <main className="flex-grow max-w-2xl w-full mx-auto px-6 py-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border-main)] transition-colors duration-300">
        <div className="max-w-2xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center gap-4 flex-wrap">
            <span className="font-mono text-[10px] text-[var(--text-muted)]">
              PrachaLabs &mdash; Downstream of Intelligence
            </span>
            <span className="font-mono text-[10px] text-[var(--text-muted)]">
              <a
                href="https://pracha.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-soft hover:text-accent transition-colors"
              >
                pracha.me
              </a>
              {' · '}Columbia University
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
