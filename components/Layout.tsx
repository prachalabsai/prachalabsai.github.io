
import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Github, Sun, Moon } from 'lucide-react';

const NavItem = ({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-200
      ${isActive
        ? 'text-[var(--text-main)]'
        : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'}`
    }
  >
    {label}
  </NavLink>
);

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[var(--bg-main)] transition-colors duration-300">
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <NavLink to="/" className="font-mono text-sm tracking-[0.1em] text-[var(--text-main)] hover:opacity-70 transition-opacity">
              PrachaLabs
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <NavItem to="/canvas" label="Canvas" />
              <NavItem to="/tools" label="Tools" />
              <NavItem to="/threads" label="Threads" />
              <NavItem to="/pracha" label="Pracha" />
              <a
                href="https://github.com/prachalabsai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
              >
                <Github size={14} />
              </a>
              <button
                onClick={toggleTheme}
                className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
              >
                {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
              </button>
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleTheme}
                className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[var(--text-muted)]"
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-[var(--border-main)]">
            <div className="max-w-2xl mx-auto px-6 py-4 flex flex-col gap-4">
              <NavItem to="/canvas" label="Canvas" onClick={() => setIsMenuOpen(false)} />
              <NavItem to="/tools" label="Tools" onClick={() => setIsMenuOpen(false)} />
              <NavItem to="/threads" label="Threads" onClick={() => setIsMenuOpen(false)} />
              <NavItem to="/pracha" label="Pracha" onClick={() => setIsMenuOpen(false)} />
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
          <div className="flex justify-between items-center">
            <span className="font-mono text-[10px] text-[var(--text-muted)]">
              PrachaLabs &mdash; Applied Research &amp; Engineering
            </span>
            <span className="font-mono text-[10px] text-[var(--text-muted)]">
              Columbia University
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
